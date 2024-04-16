<?php

namespace App\Http\Controllers;

use App\Models\sks_admin;
use Illuminate\Http\Request;

class sks_adminController extends Controller
{
    public function index($id)
    {
        $sksadmin = sks_admin::find($id);

        if (!$sksadmin){
            return response()->json(['error' => 'SKS_admin not found'], 404);
        }
        return response()->json($sksadmin);
  
    }
}
