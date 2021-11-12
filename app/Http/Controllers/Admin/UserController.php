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
            'items' => User::SortFromRequest()
                ->searchInFields()

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

    public function show(User $user)
    {
        // return response([
        // 'data' => User::find($id)
        // ],200);
        return $user;
    }

    public function update(UsersRequest $request, User $user)
    {

        $data = $request->only([
            'name', 'username', 'email', 'password',
        ]);

        if (empty($data['password'])) {
            unset($data['password']);
        } else {
            $data['password'] = Hash::make($request->password);
        }
        // dd($request->name);
        $user->update($data);

        return response([
            'data' => 'success',
        ], 200);

    }

    public function destroy(Request $request)
    {
        // dd($request->all());
        $user = User::find($request->id);
        $user->delete();
    }
}
