<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class PostCategoryController extends Controller
{
    public function index(Request $request, Category $category)
    {
//        $posts = Post::query()->whereHas('categories', function ($query) use ($category) {
//            $query->where('slug', $category->slug);
//        })->get();
        $posts = $category->posts()->with('user')->withCount('likes')->simplePaginate();
        return response([
            'posts' => $posts,
            'category' => $category->loadCount('posts')
        ], 200);
    }
}
