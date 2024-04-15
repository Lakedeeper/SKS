<?php

namespace App\Http\Controllers;

use App\Models\sks_admin;
use Illuminate\Http\Request;

class sks_adminController extends Controller
{
    public function index()
    {
        $club = club::all();
        return response()->json($club);
  
    }
}
