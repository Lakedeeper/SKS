<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
  
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
