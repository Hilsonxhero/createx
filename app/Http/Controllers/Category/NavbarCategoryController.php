<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class NavbarCategoryController extends Controller
{
    public function index()
    {
        return response([
            'data' => Category::query()->inRandomOrder()->take(5)->get()
        ], 200);
    }
}
