<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class ShortLinkPostController extends Controller
{

    public function __invoke(Post $post)
    {
        return redirect("/posts/{$post->slug}");
    }
}
