<?php

namespace App\Models;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Media;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

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
        'is_follow'
    ];

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
        return $this->belongsToMany(Post::class,'bookmarks');
    }

    public function likes()
    {
        return $this->belongsToMany(Post::class,'likes');
    }

    public function getIsFollowAttribute()
    {
        return $this->followers()->where('user_id', optional(request()->user())->id)->exists();
    }
}
