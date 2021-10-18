<?php

use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Comment\CommentController;
use App\Http\Controllers\Comment\ReplyController;
use App\Http\Controllers\Draft\DraftController;
use App\Http\Controllers\Post\AllUserDraftsController;
use App\Http\Controllers\Post\AllUserPostsController;
use App\Http\Controllers\Post\PostController;
use App\Http\Controllers\Post\ShowPostController;
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

    Route::patch('/drafts/{draft}', [DraftController::class, 'update'])
        ->name('drafts.update');

    Route::get('/drafts/{draft}', [DraftController::class, 'show'])
        ->name('drafts.show');

    Route::delete('/drafts/{draft}', [DraftController::class, 'destroy'])
        ->name('drafts.destroy');

    Route::post('/posts/create', [DraftController::class, 'store'])
        ->name('posts.store');

    Route::post('/posts', [PostController::class, 'store'])
        ->name('posts.store');

    Route::get('/post/{post:slug}/edit', [PostController::class, 'show'])
        ->name('post.show');

    Route::patch('/post/{post:slug}/edit', [PostController::class, 'edit'])
        ->name('post.edit');

    Route::patch('/post/{post:slug}', [PostController::class, 'update'])
        ->name('post.update');

    Route::delete('/posts/{post:slug}', [PostController::class, 'destroy'])
        ->name('posts.destroy');

    Route::post('/comments/{post:slug}', [CommentController::class, 'store'])
        ->name('comment.store');

    Route::delete('/comments/{comment}', [CommentController::class, 'destroy'])
        ->name('comment.destroy');

    Route::post('/replies/{post:slug}', [ReplyController::class, 'store'])
        ->name('reply.store');


    Route::post('/posts/all-posts', AllUserPostsController::class);

    Route::post('/posts/all-drafts', AllUserDraftsController::class);

    Route::get('/posts/{post:slug}', ShowPostController::class);

});

