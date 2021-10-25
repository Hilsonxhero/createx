<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\UserFollowNotification;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function __invoke(Request $request, User $user)
    {
        $request->user()->follows()->toggle([$user->id]);

        if ($user->is_follow) {
            $user->notify(new UserFollowNotification($request->user()));
        }

        return response([
            'data' => 'success'
        ], 200);
    }
}
