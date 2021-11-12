<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Draft;
use Illuminate\Http\Request;

class DraftController extends Controller
{

    public function index(Request $request)
    {
        return response([
            'items' => Draft::with('user')
                ->sortFromRequest()
                ->searchInFields()
                ->paginate($request->per_page ?? 10),
        ], 200);
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy(Request $request)
    {
        $post = Draft::find($request->id);
        $post->delete();

        return response([
            'data' => 'success',
        ], 200);
    }
}
