<?php

namespace App\Http\Controllers;
use App\Models\club;

use Illuminate\Http\Request;

class ClubController extends Controller
{
    public function index($id)
    {
        $club = club::find($id);

        if(!$club){
            return response()->json(['error' => 'Club not found'], 404);
        }

        return response()->json($club);
  
    }
}
