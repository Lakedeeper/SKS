<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\event>
 */
class eventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return $events = [
            [
                'event_id' => '900',
                'event_name' => 'Makale Oturumları 9',
                'date_of_event' => '03/27/2023',
                'subject' => 'Makale oturumu',
                'exp' => 'yy',
            ],
            [
                'event_id' => '901',
                'event_name' => 'Message Deneyi Üzerine',
                'date_of_event' => '03/19/2024',
                'subject' => 'Message Deneyi Önemi ve Kapsamı',
                'exp' => 'yy',
            ],
            [
                'event_id' => '900',
                'event_name' => 'Biyogirişimcilik - 4',
                'date_of_event' => '04/15/2024',
                'subject' => 'Biyogirişimcilik - 101',
                'exp' => 'yy',
            ],
        ];
    }
}
