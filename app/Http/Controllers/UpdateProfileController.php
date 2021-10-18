<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Models\Category;
use App\Models\Post;
use App\Services\MediaFileService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class UpdateProfileController extends Controller
{
    public function update(ProfileRequest $request)
    {
       

        $data = $request->only([
            'name', 'email', 'password', 'phone', 'bio',
            'username', 'email_on_follow', 'email_on_like', 'email_on_reply',
        ]);
        if (empty($data['password'])) {
            unset($data['password']);
        } else {
            $data['password'] = Hash::make($request->password);
        }
        $user = $request->user();
        $ext = Str::afterLast($request->profile_name, '.');
        if ($request->profile && $request->profile_name) {
            $data['thumb_id'] = MediaFileService::publicUpload($request->profile_src,$ext)->id;
            $user->thumb ? $user->thumb->delete() : "";
        } else {
            $request->request->add(['thumb_id' => $user->thumb_id]);
        }
        $request->user()->update($data);

        return $request->user();

    }
}
