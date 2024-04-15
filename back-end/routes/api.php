<?php

use App\Models\User;
use App\Models\club;
use App\Models\club_admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::get('users', function(Request $request) {
    $user = User::all();
    return $user;

});

Route::get('clubs', function(Request $request) {
    $club = club::all();
    return $club;

});

Route::get('club_admins', function(Request $request) {
    $club_admin = club_admin::all();
    return $club_admin;

});

