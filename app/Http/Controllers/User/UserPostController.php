<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserPostController extends Controller
{
    public function index(Request $request, User $user)
    {
        return response([
            'posts' => $user->posts()->with(['user'])->
            withCount('likes')
                ->simplePaginate(),
            'user' => $user->loadCount(['followers','follows'])
        ], 200);
    }
}
