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
        'profile_src'
    ];

    public function sendEmailVerificationNotification()
    {
        $this->notify(new \App\Notifications\VerifyEmail());
    }

    public function getProfileSrcAttribute()
    {
        if ($this->thumb) {
            return '/profiles/' . $this->thumb->files['original'];
        } else {
            return asset('/images/5.jpg');
        }
    }

    public function thumb()
    {
        return $this->belongsTo(Media::class, 'thumb_id');
    }

    public function drafts(){
        return $this->hasMany(Draft::class);
    }
}
