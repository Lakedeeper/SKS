<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\form>
 */
class formFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return $forms = [
            [
                'event_name' => 'Makale Oturumları 7',
                'club_name' =>'',
                'event_type',
                'date_of_event',
                'number_of_participants',
                'form_id',
                'adress',
                'admin_id',
                'url',
                'image',
                'event_subject',
            ],

            [

            ],

            [

            ],

        ];
    }
}
