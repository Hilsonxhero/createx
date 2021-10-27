<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class SearchUserController extends Controller
{
    public function index(Request $request)
    {
        return response([
            'users' => User::query()
                ->where('name', 'LIKE', "%{$request->q}%")
                ->orWhere('email', 'LIKE', "%{$request->q}%")
                ->simplePaginate()
        ], 200);
    }
}
