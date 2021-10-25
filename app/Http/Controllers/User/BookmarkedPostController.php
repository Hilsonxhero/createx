<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BookmarkedPostController extends Controller
{
    public function index(Request $request)
    {
        return response([
            'posts' => $request->user()->bookmarks()
                ->with(['user'])
                ->withCount('bookmarks')
                ->simplePaginate(),
            'user' => $request->user()->load('bookmarks')->loadCount('bookmarks')
        ], 200);
    }
}
