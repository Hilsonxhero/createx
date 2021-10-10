<?php

namespace App\Http\Controllers\Draft;

use App\Http\Controllers\Controller;
use App\Http\Requests\DraftRequest;
use App\Models\Draft;
use Exception;
use Illuminate\Support\Str;

class DraftController extends Controller
{
    public function store(DraftRequest $request)
    {

        $request->merge(['user_id' => $request->user()->id]);
        $request->merge(['link' => Str::random(16)]);

        $draft = Draft::create([
            'title' => $request->title,
            'content' => $request->content,
            'user_id' => $request->user_id,
            'link' => $request->link,
        ]);

        return response([
            'link' => '/drafts/' . $draft->link,
        ]);

    }

    public function update(DraftRequest $request,$draft)
    {
    
        $item = Draft::query()->where('link',$draft)->first();
        $item->update([
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return response([
            'data' => 'ok',
        ], 200);

    }

    public function show($draft)
    {
        $item = Draft::query()->where('link',$draft)->first();

        $this->authorize('show', $item);
      
        return $item;

    }
}
