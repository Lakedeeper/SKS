<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class club_admin extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'student_id',
        'name',
        'surname',
        'password',
        'email',
        'club_name',
        'club_id',

    ];

    protected $hidden = [
        

    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

}
