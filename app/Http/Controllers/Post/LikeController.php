<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Notifications\PostLikedNotification;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function store(Request $request, Post $post)
    {
        $post->likes()->sync(
            $request->user()->id,
            false
        );

        $post->user->notify(new PostLikedNotification($post));

        return response([
            'data' => 'success'
        ], 200);

    }

    public function destroy(Request $request, Post $post)
    {
        $post->likes()->detach(
            $request->user()->id
        );

        return response([
            'data' => 'success'
        ], 200);
    }
}
