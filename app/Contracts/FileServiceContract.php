<?php


namespace App\Contracts;


use App\Models\Media;

interface FileServiceContract
{
    public static function upload($file, string $filename, $dir,$ext): array;

    public static function delete($media);

    public static function thumb(Media $media);
    public static function stream(Media $media);
}
