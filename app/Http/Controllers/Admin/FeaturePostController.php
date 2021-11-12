<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FeaturePost;
use App\Models\Post;
use Illuminate\Http\Request;

class FeaturePostController extends Controller
{

    public function index(Request $request)
    {
        return response([
            'posts' => FeaturePost::with('post.user')->get()
        ], 200);

    }
    public function store(Request $request, Post $post)
    {

        $post->featurePosts()->firstOrCreate([]);

        return response([
            'data' => 'success',
        ], 200);

    }
    public function destroy(Post $post){
        $post->featurePosts()->delete();


        return response([
            'data' => 'success',
        ], 200);
    }
}
