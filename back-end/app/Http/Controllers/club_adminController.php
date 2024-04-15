<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\club_admin;

class club_adminController extends Controller
{
    public function index()
    {
        $club = club::all();
        return response()->json($club);
  
    }
}
