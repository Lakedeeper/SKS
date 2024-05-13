<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;

class form extends Model
{
    use HasFactory;
    protected $fillable = [
        'event_name',
        'club_name',
        'event_type',
        'start_of_event',
        'end_of_event',
        'number_of_participants',
       // 'form_id',
        'adress',
      //  'admin_id',
        'image',
        'event_subject',
        'state',


    ];
    protected function data(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true),
            set: fn ($value) => json_encode($value),
        );
    } 
    
}

