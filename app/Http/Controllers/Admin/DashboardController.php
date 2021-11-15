<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {

        // $users = DB::table('users')
        // ->select(DB::raw('count(*) as user_count'))
        // ->get();


        $users_count = User::count();
        $categories_count = Category::count();
        $posts_count = Post::count();
        $comments_count = Comment::count();
        return response([
            'users_count' => $users_count,
            'categories_count' => $categories_count,
            'posts_count' => $posts_count,
            'comments_count' => $comments_count,
        ]);
    }
}
