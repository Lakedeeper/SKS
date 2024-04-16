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
                'start_of_event'=> '03/27/2023',
                'end_of_event'=> '03/27/2023',
                'subject' => 'Makale oturumu',
                'exp' => 'yy',
                'image' => '',
                'club_id' => '',
                'form_id' => '',
            ],
            [
                'event_id' => '901',
                'event_name' => 'Message Deneyi Üzerine',
                'start_of_event'=> '03/27/2023',
                'end_of_event'=> '03/27/2023',
                'subject' => 'Message Deneyi Önemi ve Kapsamı',
                'exp' => 'yy',
                'image' => '',
                'club_id' => '',
                'form_id' => '',
            ],
            [
                'event_id' => '900',
                'event_name' => 'Biyogirişimcilik - 4',
                'start_of_event'=> '03/27/2023',
                'end_of_event'=> '03/27/2023',
                'subject' => 'Biyogirişimcilik - 101',
                'exp' => 'yy',
                'image' => '',
                'club_id' => '',
                'form_id' => '',
            ],
        ];
    }
}
