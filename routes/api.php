<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CommentController as AdminCommentController;
use App\Http\Controllers\Admin\DraftController as AdminDraftController;
use App\Http\Controllers\Admin\FeaturePostController;
use App\Http\Controllers\Admin\FeaturePostSearchController;
use App\Http\Controllers\Admin\PostController as AdminPostController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Category\NavbarCategoryController;
use App\Http\Controllers\Comment\CommentController;
use App\Http\Controllers\Comment\ReplyController;
use App\Http\Controllers\Draft\DraftController;
use App\Http\Controllers\Post\AllUserDraftsController;
use App\Http\Controllers\Post\AllUserPostsController;
use App\Http\Controllers\Post\BookmarkController;
use App\Http\Controllers\Post\LikeController;
use App\Http\Controllers\Post\PostCategoryController;
use App\Http\Controllers\Post\PostController;
use App\Http\Controllers\Post\ShowPostController;
use App\Http\Controllers\Post\UploadPostImageController;
use App\Http\Controllers\UpdateProfileController;
use App\Http\Controllers\User\FollowController;
use App\Http\Controllers\User\NotificationController;
use App\Http\Controllers\User\UserPostController;
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

Route::middleware(['auth:sanctum'])->group(function () {

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

    Route::post('/bookmarks/{post:slug}', [BookmarkController::class, 'store'])->name('bookmark.store');
    Route::delete('/bookmarks/{post:slug}', [BookmarkController::class, 'destroy'])->name('bookmark.destroy');

    Route::post('/likes/{post:slug}', [LikeController::class, 'store'])->name('like.store');
    Route::delete('/likes/{post:slug}', [LikeController::class, 'destroy'])->name('like.destroy');

    Route::post('/follow/{user:username}', FollowController::class)->name('follow');

    Route::get('/user/notification', [NotificationController::class, 'index'])
        ->name('notifications.index');

    Route::patch('/user/notification/{notification}', [NotificationController::class, 'update'])
        ->name('notifications.update');

    Route::get('/navbar/categories', [NavbarCategoryController::class, 'index']);
    Route::get('/user-posts/{user:username}', [UserPostController::class, 'index']);

    Route::get('/bookmarked-posts', [\App\Http\Controllers\User\BookmarkedPostController::class, 'index']);
    Route::get('/liked-posts', [\App\Http\Controllers\User\LikedPostController::class, 'index']);

    Route::get('/home', [\App\Http\Controllers\HomePostController::class, 'index']);

    Route::post('/posts/all-posts', AllUserPostsController::class);

    Route::post('/posts/all-drafts', AllUserDraftsController::class);

    Route::get('/posts/{post:slug}', ShowPostController::class);

    Route::get('/following-posts', [\App\Http\Controllers\Post\FollowingPostController::class, 'index']);

    Route::get('/posts/category/{category:slug}', [PostCategoryController::class, 'index']);

});

Route::get('/trending-posts', [\App\Http\Controllers\Post\TrendingPostController::class, 'index']);

// search
Route::get('/search/posts', [\App\Http\Controllers\Search\SearchPostController::class, 'index']);
Route::get('/search/users', [\App\Http\Controllers\Search\SearchUserController::class, 'index']);
Route::get('/search/categories', [\App\Http\Controllers\Search\SearchCategoryController::class, 'index']);

// admin routes
Route::prefix('admin')->middleware(['verified'])->group(function () {

    Route::apiResource('users', UserController::class);
    Route::post('users/destroy', [UserController::class, 'destroy']);

    Route::apiResource('posts', AdminPostController::class);
    Route::post('posts/destroy', [AdminPostController::class, 'destroy']);

    Route::apiResource('categories', CategoryController::class);
    Route::post('categories/destroy', [CategoryController::class, 'destroy']);

    Route::apiResource('drafts', AdminDraftController::class);
    Route::post('drafts/destroy', [AdminDraftController::class, 'destroy']);

    Route::apiResource('comments', AdminCommentController::class);
    Route::post('comments/destroy', [AdminCommentController::class, 'destroy']);

   // Feature Post
    Route::get('feature-posts-search', [FeaturePostSearchController::class, 'index']);
    Route::get('feature-post', [FeaturePostController::class, 'index']);
    Route::post('feature-post/{post:slug}', [FeaturePostController::class, 'store']);
    Route::delete('feature-post/{post:slug}', [FeaturePostController::class, 'destroy']);

});
