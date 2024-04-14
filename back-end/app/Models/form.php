<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class form extends Model
{
    use HasFactory;
    protected $fillable = [
        'event_name',
        'club_name',
        'event_type',
        'date_of_event',
        'number_of_participants',
        'form_id',
        'adress',
        'club_admin',
        'url',
        'image',
        'event_subject',


    ];

    
}

