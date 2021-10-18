<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AllUserPostsController extends Controller
{

    public function __invoke(Request $request)
    {
        return response([
            'data' => $request->user()->posts->map(function($post){
                return collect($post)->merge(['updated_at' => verta($post->updated_at)->formatDifference()]);
            }),
            'drafts_count' => $request->user()->drafts->count(),
            'posts_count' => $request->user()->posts->count()
        ],200);
    }
}
