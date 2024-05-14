<?php

namespace App\Http\Controllers;

use App\Models\club;
use Illuminate\Http\Request;

class ClubController extends Controller
{

    //GET
    public function index($id)
    {
        $club = club::find($id);

        if(!$club){
            return response()->json(['error' => 'Club not found'], 404);
        }

        return response()->json($club);
  
    }

    // CREATE club
    public function store(Request $request)
    {
        $validatedData = $request->validate(
            [
            'club_name' => 'required',
            'club_exp' => 'required',
            'club_logo' => 'required',

        ]);
    
        $club = club::create($validatedData);
    
        return response()->json(['message' => 'Club created successfully', 'Club' => $club]);
    }
   

    public function show($id)
    {
        $club= club::findOrFail($id);
    
        return response()->json(['Club' => $club]);
    }

    //UPDATE
    public function update(Request $request, $id)
{
    $validatedData = $request->validate([
            'club_name' => 'required',
            'club_exp' => 'required',
            'club_logo' => 'required',
 
    ]);

    $club = club::findOrFail($id);
    $club->update($validatedData);

    return response()->json(['message' => 'Club updated successfully', 'Club' => $club]);
} 

//Delete
public function destroy($id)
{
    $club = club::findOrFail($id);
    $club->delete();

    return response()->json(['message' => 'Club deleted successfully']);
} 

}