<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\club_admin;

class club_adminController extends Controller
{
    public function index($id)
    {
        $clubadmin = club_admin::find($id);

        if (!$clubadmin){
            return response()->json(['error' => 'User not found'], 404);
        }
        return response()->json($clubadmin);
  
    }
}
