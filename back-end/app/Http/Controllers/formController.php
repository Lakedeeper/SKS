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

    // CREATE
    public function store(Request $request)
    {
        $validatedData = $request->validate([
        'event_name' => 'required',
        'club_name' => 'required',
        'event_type' => 'required',
        'start_of_event' => 'required',
        'end_of_event' => 'required',
        'number_of_participants' => 'required',
        'form_id' => 'required',
        'adress' => 'required',
        'admin_id' => 'required',
        'form_url' => 'required',
        'image' => 'required',
        'event_subject' => 'required',
        ]);
    
        $form = form::create($validatedData);
    
        return response()->json(['message' => 'Form created successfully', 'Form' => $form]);
    }
    
    public function show($id)
    {
        $form = form::findOrFail($id);
    
        return response()->json(['Form' => $form]);
    }

    //UPDATE
    public function update(Request $request, $id)
{
    $validatedData = $request->validate([
        'event_name' => 'required',
        'club_name' => 'required',
        'event_type' => 'required',
        'start_of_event' => 'required',
        'end_of_event' => 'required',
        'number_of_participants' => 'required',
        'form_id' => 'required',
        'adress' => 'required',
        'admin_id' => 'required',
        'form_url' => 'required',
        'image' => 'required',
        'event_subject' => 'required',
    ]);

    $form = form::findOrFail($id);
    $form->update($validatedData);

    return response()->json(['message' => 'Form updated successfully', 'Form' => $form]);
} 

//Delete
public function destroy($id)
{
    $form = form::findOrFail($id);
    $form->delete();

    return response()->json(['message' => 'Form deleted successfully']);
} 
}
