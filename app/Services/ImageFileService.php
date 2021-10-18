<?php

namespace App\Services;

use App\Contracts\FileServiceContract;
use App\Models\Media;
use Intervention\Image\Facades\Image;

class ImageFileService extends DefaultFileService implements FileServiceContract
{
    public static $sizes = ['300', '600'];

    public static function upload($file, string $filename, $dir, $ex): array
    {
        $path = storage_path($dir) . $filename . '.' . $ex;
        Image::make($file)->save($path);
        return ['original' => $filename . '.' . $ex];
    }

    private static function resize($img, $filename, $dir, $ex)
    {
        $img = Image::make($img);
        $imgs['original'] = $filename . '.' . $ex;
        foreach (self::$sizes as $size) {
            $imgs[$size] = $filename . '_' . $size . '.' . $ex;
            $img->resize($size, null, function ($aspect) {
                $aspect->aspectRatio();
            })->save(storage_path($dir) . $filename . '_' . $size . '.' . $ex);
        }
        return $imgs;
    }

    public static function thumb(Media $media)
    {
        return '/storage/' . $media->files['original'];
    }

    public static function getFileName()
    {
        return (static::$media->is_private ? 'private/' : 'public/') . static::$media->files['original'];
    }
}
