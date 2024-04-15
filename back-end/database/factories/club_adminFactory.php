<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\club_admin>
 */
class club_adminFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return   [
            'student_id' => '300',
            'name' => 'arif',
            'surname' => 'arslan',
            'email' => 'arif@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'biontek',
            'club_id' => '200',
        ];
    }

    protected function data(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true),
            set: fn ($value) => json_encode($value),
        );
    } 
}
