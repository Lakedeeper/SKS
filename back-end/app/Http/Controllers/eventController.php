<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\event;

class eventController extends Controller
{
    public function index($id)
    {
        $event = event::find($id);

        if(!$event){
            return response()->json(['error' => 'Event not found'], 404);
        }
        return response()->json($event);
  
    }
}
