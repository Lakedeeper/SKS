<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\form;

class formController extends Controller
{
    public function index($id)
    {
        $form = form::find($id);

        if(!$form){
            return response()->json(['error' => 'Form not found'], 404);
        }
        return response()->json($form);
  
    }
}
