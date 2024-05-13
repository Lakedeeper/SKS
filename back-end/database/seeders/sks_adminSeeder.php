<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\sks_admin;

class sks_adminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        sks_admin::create([
            'name' => 'Ahmet Doğukan',
            'surname' => 'Solak',
            'password' => '8423LEKOVICCC',
            'email' => 'Ahmet.doğukan.solak@gmail.com',
           // 'user_id' => '1001',
        ]);

        sks_admin::create([
            'name' => 'null',
            'surname' => 'null',
            'email' => 'null@gmail.com',
           // 'user_id' => '0',
            ]);
    }
}
