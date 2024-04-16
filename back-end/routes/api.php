<?php

use App\Models\User;
use App\Models\club;
use App\Models\club_admin;
use App\Models\sks_admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\club_adminController;
use App\Http\Controllers\ClubController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['middleware' => 'cors'], function () {
    Route::get('public-post-list', [PostController::class, 'postList']);
});



Route::get('users', function(Request $request) {
    $user = User::all();
    return $user;

});
Route::get('/users/{id}', [UserController::class, 'index']);

Route::get('clubs', function(Request $request) {
    $club = club::all();
    return $club;

});
Route::get('/clubs/{id}', [ClubController::class, 'index']);

Route::get('club_admins', function(Request $request) {
    $club_admin = club_admin::all();
    return $club_admin;

});

Route::get('/club_admins/{id}', [club_adminController::class, 'index']);

Route::get('sks_admin', function(Request $request) {
    $sks_admin = sks_admin::first();
    return $sks_admin;

});


