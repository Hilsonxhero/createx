<?php

namespace App\Http\Controllers\Comment;

use App\Events\CommentCreatedEvent;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
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

        event(new CommentCreatedEvent(
            $comment->load(['user', 'post', 'replies'])
        ));

        return response([
            'data' => $comment
        ], 200);
    }

    public function destroy(Comment $comment)
    {
        $comment->delete();

        return response([
            'data' => 'success'
        ], 200);
    }
}
