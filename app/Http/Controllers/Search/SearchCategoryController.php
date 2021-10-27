<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class SearchCategoryController extends Controller
{
    public function index(Request $request)
    {
        return response([
            'categories' => Category::query()
                ->where('title', 'LIKE', "%{$request->q}%")
                ->simplePaginate()
        ], 200);
    }
}
