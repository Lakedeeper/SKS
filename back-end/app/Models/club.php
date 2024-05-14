<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasOne;

class club extends Model
{
    use HasApiTokens, HasFactory;

    protected $fillable = [
        'club_name',
        'club_exp',
        'club_logo',

    ];

    public function admin()
    {
        return $this->hasOne(club_admin::class);
    }





    protected function data(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true),
            set: fn ($value) => json_encode($value),
        );
    } 

   
}
