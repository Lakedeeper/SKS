<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\form;

class formController extends Controller
{
    public function index()
    {
        $club = club::all();
        return response()->json($club);
  
    }
}
