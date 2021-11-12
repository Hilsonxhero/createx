<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index(Request $request)
    {
        return response([
            'items' => Post::with('user')->withCount(['likes','comments'])
                ->sortFromRequest()
                ->searchInFields()
                ->paginate($request->per_page ?? 10),
        ], 200);
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Post $post)
    {
        // return response([
        // 'data' => User::find($id)
        // ],200);
        return $post;
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy(Request $request)
    {
        $post = Post::find($request->id);
        $post->delete();

        return response([
            'data' => 'success',
        ], 200);
    }
}
