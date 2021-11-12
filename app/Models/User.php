<?php

namespace App\Models;

use App\Models\Media;
use App\Traits\OrderableTrait;
use App\Traits\SearchableTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, OrderableTrait, SearchableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'profile',
        'bio',
        'thumb_id',
        'username',
        'email_on_follow',
        'email_on_like',
        'email_on_reply',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public static $FIELDS = [
        'name' => 'نام',
        'email' => 'ایمیل',
        'username' => 'نام کاربری',
        'created_at' => 'تاریخ عضویت',
        'Actions' => 'actions',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    protected $appends = [
        'profile_src',
        'is_follow',
        'created_at',
    ];

    public static $searchableFields = [
        'name', 'username', 'email', 'bio',
    ];

    public static function booted()
    {
        static::deleting(function ($user) {
            $user->drafts()->delete();
        });
    }

    public function sendEmailVerificationNotification()
    {
        $this->notify(new \App\Notifications\VerifyEmail());
    }

    public function getProfileSrcAttribute()
    {
        if ($this->thumb) {
            return '/storage/' . $this->thumb->files['original'];
        } else {
            return asset('/images/5.jpg');
        }
    }

    public function getCreatedAtAttribute()
    {
        return verta($this->attributes['created_at'])->format('Y-n-j');
    }

    public function thumb()
    {
        return $this->belongsTo(Media::class, 'thumb_id');
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function drafts()
    {
        return $this->hasMany(Draft::class);
    }

    public function follows()
    {
        return $this->belongsToMany(User::class, 'follows', 'user_id', 'following_id');
    }

    public function followers()
    {
        return $this->belongsToMany(User::class, 'follows', 'following_id', 'user_id');
    }

    public function bookmarks()
    {
        return $this->belongsToMany(Post::class, 'bookmarks');
    }

    public function likes()
    {
        return $this->belongsToMany(Post::class, 'likes');
    }

    public function getIsFollowAttribute()
    {
        return $this->followers()->where('user_id', optional(request()->user())->id)->exists();
    }

}
