<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class student extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'name',
        'surname',
        'email',
        'password',
        

    ];

    protected $hidden = [
        'name',
        'surname',
        'password',
        'email',
        

    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
