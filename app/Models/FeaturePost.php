<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeaturePost extends Model
{
    use HasFactory;


    public function post(){
        return $this->belongsTo(Post::class);
    }
}
