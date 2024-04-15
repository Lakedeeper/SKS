<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index($id)
{
    $user = User::find($id);

    if (!$user) {
        return response()->json(['error' => 'User not found'], 404);
    }

    return response()->json($user);
}

    
// dashboard
    public function userprofile()
    {
        return view('userprofile');
    }
 
    public function about()
    {
        return view('about');
    }
  

}
