<?php

namespace App\Models;
use App\Traits\OrderableTrait;
use App\Traits\SearchableTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Draft extends Model
{
    protected $guarded = [];
    use HasFactory;
    use SearchableTrait;
    use OrderableTrait;

    public static $searchableFields = [
        'title',
    ];


    public function user(){
        return $this->belongsTo(User::class);
    }
}
