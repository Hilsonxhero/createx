<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Http\Requests\UpdatePost;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Category;
use App\Models\Post;
use App\Services\MediaFileService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function store(PostRequest $request)
    {

        $data = $request->only([
            'title', 'content', 'dec',
            'dec', 'user_id', 'banner_id', 'min_read',
        ]);

        $post = Post::create($data);

        $this->createPostCategories($request, $post);

        return response([
            'data' => $post,
        ], 200);

    }

    public function show(Post $post)
    {

        $this->authorize('view', $post);

        return $post->append('categories_title');
    }

    public function edit(UpdatePost $request, Post $post)
    {

        $post->update([
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return $post;

    }

    public function update(UpdatePostRequest $request, Post $post)
    {

        $data = $request->only([
            'title', 'content', 'dec',
            'dec', 'user_id', 'min_read',
        ]);

        if ($request->banner_name) {
            $ext = Str::afterLast($request->banner_name, '.');
            $data['banner_id'] = MediaFileService::publicUpload($request->banner, $ext)->id;
            $post->banner->delete();
        } else {
            $data['banner_id'] = $post->banner_id;
        }

        $post->update($data);

        $this->createPostCategories($request, $post);

        return response([
            'data' => $post,
        ], 200);

    }

    public function destroy(Request $request, Post $post)
    {
       $post->delete();

       return response([
           'data' => 'success'
       ],200);

    }

    protected function createPostCategories($request, Post $post)
    {

        $selectedCategories = Category::query()->whereIn('title', $request->categories)->get();
        $shouldCreateCategories = collect($request->categories)->diff($selectedCategories->pluck('title'));

        $categories = [];

        foreach ($shouldCreateCategories as $categoryTitle) {
            $categories[] = Category::create([
                'title' => $categoryTitle,
            ]);
        }

        $post->categories()->sync(
            collect($categories)->pluck('id')->concat($selectedCategories->pluck('id'))
        );

    }
}
