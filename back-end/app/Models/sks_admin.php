<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;

class sks_admin extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'surname',
        'email',
        'password',
        'user_id',
    ];
    protected $guarded = [
        'name',
        'surname',
        'password',
        'user_id',

    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        
    ];
}

