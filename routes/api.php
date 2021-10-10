<?php

use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Draft\DraftController;
use App\Http\Controllers\Post\UploadPostImageController;
use App\Http\Controllers\UpdateProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    ->middleware(['auth', 'throttle:6,1'])
    ->name('verification.send');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest')
    ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
    ->middleware('guest')
    ->name('password.update');

Route::middleware(['auth:sanctum', 'verified'])->group(function () {

    Route::get('/me', function (Request $request) {
        return $request->user();
    });

    Route::patch('/profile', [UpdateProfileController::class, 'update'])
        ->name('profile.update');

    Route::post('/upload-post-img', [UploadPostImageController::class, 'upload'])
        ->name('upload.post.img');

    Route::post('/posts/create', [DraftController::class, 'store'])
        ->name('posts.store');

    Route::patch('/drafts/{draft}', [DraftController::class, 'update'])
        ->name('posts.update');

    Route::get('/drafts/{draft}', [DraftController::class, 'show'])
        ->name('posts.show');

});
