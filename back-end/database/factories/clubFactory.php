<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\club>
 */
class clubFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
         return $clubs = [
            [
                'club_name' => 'bioengtec',
                'club_exp' => 'asfsa',
                'club_logo' => 'safasf',
                'club_id' => '200', 
            ],
            [
                'club_name' => 'medtek',
                'club_exp' => 'asfsa',
                'club_logo' => 'safasf',
                'club_id' => '201', 
            ],
            [
                'club_name' => 'insani değerler ve etik',
                'club_exp' => 'asfsa',
                'club_logo' => 'safasf',
                'club_id' => '202', 
            ]
        ];
        
    }
}
