<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\event;

class eventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        event::create([
            'event_id' => '900',
                'event_name' => 'Makale Oturumları 9',
                'start_of_event'=> '03/27/2023',
                'end_of_event'=> '03/27/2023',
                'subject' => 'Makale oturumu',
                'exp' => 'yy',
                'image' => '',
                'club_id' => '',
        ]);

        event::create([
            'event_id' => '901',
                'event_name' => 'Message Deneyi Üzerine',
                'start_of_event'=> '03/27/2023',
                'end_of_event'=> '03/27/2023',
                'subject' => 'Message Deneyi Önemi ve Kapsamı',
                'exp' => 'yy',
                'image' => '',
                'club_id' => '',
        ]);

        event::create([
            'event_id' => '900',
                'event_name' => 'Biyogirişimcilik - 4',
                'start_of_event'=> '03/27/2023',
                'end_of_event'=> '03/27/2023',
                'subject' => 'Biyogirişimcilik - 101',
                'exp' => 'yy',
                'image' => '',
                'club_id' => '',
        ]);
    }
}
