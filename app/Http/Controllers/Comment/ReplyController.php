<?php

namespace App\Http\Controllers\Comment;

use App\Events\CommentCreatedEvent;
use App\Events\ReplyCreatedEvent;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use App\Notifications\CommentRepliedNotification;
use App\Notifications\PostCommentNotification;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    public function store(Request $request, Post $post)
    {
        $request->validate([
            'content' => ['required'],
            'comment_id' => ['required', 'exists:comments,id']
        ]);

        $reply = Comment::query()->create([
            'content' => $request->content,
            'post_id' => $request->post_id,
            'user_id' => $request->user()->id,
            'comment_id' => $request->comment_id
        ]);

        $post->user->notify(new PostCommentNotification($post));
        Comment::query()->find($request->comment_id)->user->notify(new CommentRepliedNotification($post));

        event(new ReplyCreatedEvent(
            $reply->load(['user', 'post', 'replies', 'parent'])
        ));

        return response([
            'data' => $reply
        ], 200);
    }
}
