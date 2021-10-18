<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class AllUserDraftsController extends Controller
{

    public function __invoke(Request $request)
    {
       return response([
           'data' => $request->user()->drafts->map(function($draft){
               return collect($draft)->merge(['updated_at' => verta($draft->updated_at)->formatDifference()]);
           }),
           'drafts_count' => $request->user()->drafts->count(),
           'posts_count' => $request->user()->posts->count()
       ],200);
    }
}
