<?php

namespace App\Http\Controllers;
use App\Models\club;

use Illuminate\Http\Request;

class ClubController extends Controller
{
    public function index()
    {
        $club = club::all();
        return response()->json($club);
  
    }
}
