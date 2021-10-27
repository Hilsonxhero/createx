<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class SearchPostController extends Controller
{
    public function index(Request $request)
    {
        return response([
            'posts' => Post::query()
                ->with(['user'])
                ->where('title', 'LIKE', "%{$request->q}%")
                ->orWhere('content', 'LIKE', "%{$request->q}%")
                ->simplePaginate()
        ], 200);
    }
}
