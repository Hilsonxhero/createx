<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UploadPostImageController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'file' => ['required'],
        ]);
        
        $image = $request->file('file');

        $image_name = Str::random(15) . '.' . $image->getClientOriginalExtension();

        $image_dir = public_path() . '/images/posts/';

        $image->move($image_dir,$image_name);
        

        return response([
            'data' => '/images/posts/'. $image_name
        ]);



    }
}
