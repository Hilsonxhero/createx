<?php

namespace App\Http\Controllers;

use App\Models\FeaturePost;
use Illuminate\Http\Request;

class FeaturePostController extends Controller
{
    public function index(Request $request)
    {
       
        return response([
            'data' => FeaturePost::query()->with('post.user')->inRandomOrder()->take(4)->get(),
        ], 200);
    }
}
