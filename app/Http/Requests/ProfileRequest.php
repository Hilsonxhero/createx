<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required'],
            'username' => ['required',"unique:users,username,{$this->id}"],
            'email' => ['required',"unique:users,email,{$this->id}"],
            'password' => ['nullable'],
            'phone' => ['nullable'],
            'profile' => ['nullable'],
            'bio' => ['nullable'],
            'email_on_follow' => ['required'],
            'email_on_like' => ['required'],
            'email_on_reply' => ['required'],
        ];
    }
}
