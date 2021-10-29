<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UsersRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index(Request $request)
    {
        $userFields = collect(User::$FIELDS);
        $headers = $userFields->transform(function ($item, $key) {
            return ['text' => $item, 'value' => $key];
        });
        return response([
            'users' => User::orderBy($request->sort_by ?? 'id', $request->sort_type === 'asc' ? 'asc' : 'desc')
                ->where('name', 'LIKE', "%{$request->search}%")
                ->orWhere('username', 'LIKE', "%{$request->search}%")
                ->orWhere('email', 'LIKE', "%{$request->search}%")
                ->paginate($request->per_page ?? 10),
            'headers' => $headers->values()->all(),
        ], 200);
    }

    public function store(UsersRequest $request)
    {

        event(new Registered(
            User::create([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->name),
            ])
        ));

        return response([
            'data' => 'success',
        ], 200);

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
        // dd($request->all());
        $user = User::find($request->user);
        $user->delete();
    }
}
