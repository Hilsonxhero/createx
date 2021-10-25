<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class HomePostController extends Controller
{
    public function index()
    {
        return response([
            'posts' => Post::with(['user'])
                ->orderByDesc('created_at')
                ->simplePaginate()
        ], 200);
    }
}
