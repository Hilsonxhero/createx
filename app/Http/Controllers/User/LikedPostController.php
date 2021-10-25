<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LikedPostController extends Controller
{
    public function index(Request $request)
    {
        return response([
            'posts' => $request->user()->likes()
                ->with(['user'])
                ->withCount('likes')
                ->simplePaginate(),
            'user' => $request->user()->load('likes')->loadCount('likes')
        ], 200);
    }
}
