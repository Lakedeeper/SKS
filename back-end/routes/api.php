<?php

use App\Models\User;
use App\Models\club;
use App\Models\club_admin;
use App\Models\sks_admin;
use App\Models\form;
use App\Models\event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\club_adminController;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\formController;
use App\Http\Controllers\eventController;
use App\Http\Controllers\sks_adminController;

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


//users
Route::get('users', function(Request $request) {
    $user = User::all();
    return $user;

});
Route::get('/users/{id}', [UserController::class, 'index']);

//clubs
Route::get('clubs', function(Request $request) {
    $club = club::all();
    return $club;

});
Route::get('/clubs/{id}', [ClubController::class, 'index']);

//clubs create
Route::post('/clubs/',[ClubController::class,'store']);
//clubs update
Route::put('/clubs/{id}',[ClubController::class, 'update']);
//clubs delete
Route::delete('/clubs/{id}',[ClubController::class, 'destroy']);

//club_admins
Route::get('club_admins', function(Request $request) {
    $club_admin = club_admin::all();
    return $club_admin;

});

Route::get('/club_admins/{id}', [club_adminController::class, 'index']);

//club_admin create
Route::post('/club_admins/',[club_adminController::class,'store']);
//clubs update
Route::put('/club_admins/{id}',[club_adminController::class, 'update']);
//clubs delete
Route::delete('/club_admins/{id}',[club_adminController::class, 'destroy']);


//sks_admin
Route::get('sks_admin', function(Request $request) {
    $sksadmin = sks_admin::all();
    return $sksadmin;

});
Route::get('/sks_admin/{id}', [sks_adminController::class, 'index']);



//forms
Route::get('forms', function(Request $request) {
    $form = form::all();
    return $form;

});

Route::get('/forms/{id}', [formController::class, 'index']);

//forms create
Route::post('/forms/',[formController::class,'store']);
//forms update
Route::put('/forms/{id}',[formController::class, 'update']);
//forms delete
Route::delete('/forms/{id}',[formController::class, 'destroy']);


//events
Route::get('events', function(Request $request) {
    $event = event::all();
    return $event;

});

Route::get('/events/{id}', [eventController::class, 'index']);

//events create
Route::post('/events/',[eventController::class,'store']);
//events update
Route::put('/events/{id}',[eventController::class, 'update']);
//events delete
Route::delete('/events/{id}',[eventController::class, 'destroy']);