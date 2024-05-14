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

     // CREATE
     public function store(Request $request)
     {
         $validatedData = $request->validate([
         'name' => 'required',
         'surname' => 'required',
         'password' => 'required',
         'email' => 'required',
         'club_name' => 'required',
         ]);
     
         $clubadmin = club_admin::create($validatedData);
     
         return response()->json(['message' => 'Club_admin created successfully', 'Club_admin' => $clubadmin]);
     }
     
     public function show($id)
     {
         $clubadmin = club_admin::findOrFail($id);
     
         return response()->json(['Club_admin' => $clubadmin]);
     }
 
     //UPDATE
     public function update(Request $request, $id)
 {
     $validatedData = $request->validate([
        'name' => 'required',
        'surname' => 'required',
        'password' => 'required',
        'email' => 'required',
        'club_name' => 'required',
     ]);
 
     $clubadmin = club_admin::findOrFail($id);
     $clubadmin->update($validatedData);
 
     return response()->json(['message' => 'Club_admin updated successfully', 'Club_admin' => $clubadmin]);
 } 
 
 //Delete
 public function destroy($id)
 {
     $clubadmin = club_admin::findOrFail($id);
     $clubadmin->delete();
 
     return response()->json(['message' => 'Club_admin deleted successfully']);
 } 
 
}