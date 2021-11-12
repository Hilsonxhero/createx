<?php

namespace App\Models;


use App\Traits\OrderableTrait;
use App\Traits\SearchableTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;


class Category extends Model
{
    use Sluggable;
    use SearchableTrait;
    use OrderableTrait;

    protected $guarded = [];
    use HasFactory;

    public static $searchableFields = [
        'title',
        'slug',
    ];


    public function posts()
    {
        return $this->belongsToMany(Post::class);
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
