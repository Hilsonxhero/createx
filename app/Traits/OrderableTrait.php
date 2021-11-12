<?php
namespace App\Traits;


trait OrderableTrait
{

    public function scopeSortFromRequest($query)
    {

        $sort_by = request()->sort_by ?? 'id';

        $sort_type = request()->sort_type === 'asc' ? 'asc' : 'desc';

        return $query->orderBy($sort_by, $sort_type);

    }
}
