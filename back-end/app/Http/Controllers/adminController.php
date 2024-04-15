<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\user;
use Illuminate\Support\Facades\Auth;

class adminController extends Controller
{
    public function profilepage()
    {
        return view('profile');
    }
}
