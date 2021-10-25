<?php

namespace App\Http\Controllers\Comment;

use App\Events\CommentCreatedEvent;
use App\Events\CommentDeletedEvent;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use App\Notifications\PostCommentNotification;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, Post $post)
    {

        $request->validate([
            'content' => ['required']

        ]);

        $comment = Comment::query()->create([
            'content' => $request->content,
            'post_id' => $request->post_id,
            'user_id' => $request->user()->id
        ]);

        event(new CommentCreatedEvent($comment));
//        $post->user->notify(new PostCommentNotification($post));



        return response([
            'data' => $comment
        ], 200);
    }

    public function destroy(Comment $comment)
    {

        event(new CommentDeletedEvent($comment));

        $comment->delete();


        return response([
            'data' => 'success'
        ], 200);
    }
}
