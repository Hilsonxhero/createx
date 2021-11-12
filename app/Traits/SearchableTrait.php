<?php
namespace App\Traits;

use Illuminate\Support\Str;


trait SearchableTrait
{

    public function scopesearchInFields($query, $search = 'search')
    {
        foreach (static::$searchableFields as $filter) {
            if(Str::of($filter)->contains('.')){

             $relation = Str::beforeLast($filter, '.');
             $fieldName = Str::afterLast($filter, '.');


             $query->orWhereHas($relation,function($q) use($search,$fieldName){
                 return $q->where($fieldName, 'LIKE', "%". request()->{$search} ."%");
             });

             continue;
            }
            $query->orWhere($filter, 'LIKE', "%". request()->{$search} ."%");
        }
    }
}
