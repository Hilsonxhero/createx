<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index(Request $request)
    {
        return response([
            'items' => Category::sortFromRequest()
                ->searchInFields()
                ->paginate($request->per_page ?? 10),
        ], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            "title" => ['required'],
        ]);
        Category::query()->create([
            'title' => $request->title,
        ]);
    }

    public function show(Category $category)
    {
        return $category;
    }

    public function update(Request $request, Category $category)
    {
        $request->validate([
            "title" => ['required'],
            "slug" => ['nullable'],
        ]);

        $data = $request->only([
            'title', 'slug',
        ]);

        // if (empty($data['password'])) {
        //     unset($data['password']);
        // } else {
        //     $data['password'] = Hash::make($request->password);
        // }
        // dd($request->name);
        $category->update($data);

        return response([
            'data' => 'success',
        ], 200);

    }

    public function destroy(Request $request)
    {
        $post = Category::find($request->id);
        $post->delete();

        return response([
            'data' => 'success',
        ], 200);
    }
}
