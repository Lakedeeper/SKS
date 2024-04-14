<?php

namespace Database\Seeders;

use App\Models\club;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class clubSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        club::create([
            'club_name' => 'biontek',
            'club_id' => '200',
            'club_exp' => 'asda',
            'club_logo' => 'asfasf',
        ]);

        club::create([
            'club_name' => 'medtek',
            'club_id' => '201',
            'club_exp' => 'asda',
            'club_logo' => 'asfasf',
        ]);

        club::create([
            'club_name' => 'insani değerler ve etik',
            'club_id' => '202',
            'club_exp' => 'asda',
            'club_logo' => 'asfasf',
        ]);

       
    }
}
