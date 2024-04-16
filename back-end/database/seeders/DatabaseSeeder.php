<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        

        \App\Models\User::factory()->create([
            'name' => 'emir haktan',
            'email' => 'emir@gmail.com',
            'password' => 'emir123',
            'student_number' => '210209035'
            
         ]);

        $this->call([
            UserSeeder::class,
            clubSeeder::class,
            club_adminSeeder::class,
            sks_adminSeeder::class,
            club_adminSeeder::class,
            formSeeder::class,
            eventSeeder::class,
            
        ]);
    }
}
