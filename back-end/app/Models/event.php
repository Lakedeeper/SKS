<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;

class event extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'event_name',
        'start_of_event',
        'end_of_event',
        'subject',
        'exp',
        'image',
        'club_id',
        'form_id',
    ];

    protected function data(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true),
            set: fn ($value) => json_encode($value),
        );
    } 
}
