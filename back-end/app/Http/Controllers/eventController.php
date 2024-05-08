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


     // CREATE
     public function store(Request $request)
     {
         $validatedData = $request->validate([
             'event_id' => 'required',
             'event_name' => 'required',
             'start_of_event' => 'required',
             'end_of_event' => 'required',
             'subject' => 'required',
             'exp' => 'required',
             'image' => 'required',
             'club_id' => 'required',
             'form_id' => 'required',
         ]);
     
         $event = event::create($validatedData);
     
         return response()->json(['message' => 'Event created successfully', 'Club' => $event]);
     }
     
     public function show($id)
     {
        $event= event::findOrFail($id);
     
         return response()->json(['Event' => $event]);
     }
 
     //UPDATE
     public function update(Request $request, $id)
 {
     $validatedData = $request->validate([
        'event_id' => 'required',
        'event_name' => 'required',
        'start_of_event' => 'required',
        'end_of_event' => 'required',
        'subject' => 'required',
        'exp' => 'required',
        'image' => 'required',
        'club_id' => 'required',
        'form_id' => 'required',
     ]);
 
     $event = event::findOrFail($id);
     $event->update($validatedData);
 
     return response()->json(['message' => 'Event updated successfully', 'Event' => $event]);
 } 
 
 //Delete
 public function destroy($id)
 {
    $event = event::findOrFail($id);
    $event->delete();
 
     return response()->json(['message' => 'Event deleted successfully']);
 } 
 
}
