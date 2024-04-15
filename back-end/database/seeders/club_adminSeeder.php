<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\club_admin;


class club_adminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        club_admin::create([
            'student_id' => '300',
            'name' => 'arif',
            'surname' => 'arslan',
            'email' => 'arif@gmail.com',
            'club_name' => 'biontek',
            'club_id' => '200',
    
        ]);
    }
}
