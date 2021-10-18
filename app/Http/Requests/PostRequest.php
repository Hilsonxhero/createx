<?php

namespace App\Http\Requests;

use App\Services\MediaFileService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class PostRequest extends FormRequest
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
            'title' => ['required'],
            'content' => ['required'],
            'dec' => ['nullable'],
            'categories' => ['array'],
            'categories.*' => ['required'],
            'banner' => ['required'],
            'min_read' => ['required']
        ];
    }

    public function prepareForValidation()
    {
        $data = $this->all();

        $min_read = ceil(str_word_count(strip_tags($data['content'])) / 250);

        $dec = Str::words($data['dec'], 50, '...') ?? Str::words(strip_tags($data['content']), 50, '...');

        $ext = Str::afterLast($this->banner_name, '.');
        $banner_id = MediaFileService::publicUpload($this->banner, $ext)->id;

        return $this->merge([
            'user_id' => $this->user()->id,
            'dec' => $dec,
            'banner_id' => $banner_id,
            'min_read' => $min_read

        ]);
    }
}
