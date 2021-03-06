<?php

namespace App\Models;

use App\Traits\OrderableTrait;
use App\Traits\SearchableTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $guarded = [];
    protected $with = ['replies', 'user'];
    protected $appends = [
        'created_at'
    ];
    use HasFactory;
    use SearchableTrait;
    use OrderableTrait;


    public static $searchableFields = [
        'content',
        'post.title',
        'user.name'
    ];

    public function getCreatedAtAttribute()
    {
        return verta($this->attributes['created_at'])->formatDifference();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function parent()
    {
        return $this->belongsTo(Comment::class);
    }

    public function replies()
    {
        return $this->hasMany(Comment::class);
    }
}
