<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Support\Str;

class Post extends Model
{

    protected $guarded = [];

    use Sluggable;
    use HasFactory;

    protected $appends = [
        'banner_src',
        'created_at',
        'is_bookmarked',
        'is_liked',
    ];

    public function getCreatedAtAttribute()
    {
        return verta($this->attributes['created_at'])->formatDifference();
    }


    public function banner()
    {
        return $this->belongsTo(Media::class, 'banner_id');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function bookmarks()
    {
        return $this->belongsToMany(User::class, 'bookmarks');
    }


    public function getIsBookmarkedAttribute()
    {
        return $this->bookmarks()
            ->where('user_id', optional(request()->user())->id)
            ->exists();
    }

    public function likes()
    {
        return $this->belongsToMany(User::class, 'likes');
    }

    public function getIsLikedAttribute()
    {
        return $this->likes()
            ->where('user_id', optional(request()->user())->id)
            ->exists();
    }

    public function parentComments()
    {

        return $this->comments()->whereNull('comment_id');
    }

    public function getCategoriesTitleAttribute()
    {
        return $this->categories->pluck('title');
    }


    public function getBannerSrcAttribute()
    {
        return $this->banner->thumb();
    }

    public static function booted()
    {
        static::saving(function ($post) {
            $post->short_link = Str::random(7);
        });
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
}
