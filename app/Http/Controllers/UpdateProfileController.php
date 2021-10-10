<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Services\MediaFileService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class UpdateProfileController extends Controller
{
    public function update(ProfileRequest $request)
    {
    //    return $request->all();
        
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
            // $request->request->add(['thumb_id' => MediaFileService::publicUpload($request->profile_src,$ext)]);
            // dd(MediaFileService::publicUpload($request->profile_src,$ext)->id);
            $data['thumb_id'] = MediaFileService::publicUpload($request->profile_src,$ext)->id;
            $user->thumb ? $user->thumb->delete() : "";
        } else {
            $request->request->add(['thumb_id' => $user->thumb_id]);
        }
   
        // if ($request->profile && $request->profile_name) {
        //     $file_name = $request->user()->username . '.' . Str::afterLast($request->profile_name, '.');
        //     $path = public_path('profiles/') . $file_name;
        //     Image::make($request->profile)->fit(100)->save($path);
        //     $data['profile'] = '/profiles/' . $file_name;
        // }

        $request->user()->update($data);

        return $request->user();

    }
}
