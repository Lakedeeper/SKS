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
           // 'admin_id' => '300',
            'name' => 'Elif Yade',
            'surname' => 'Karakuş',
            'email' => 'Elif.yade@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'biontek',
            //'club_id' => '200',
    
        ]);

        club_admin::create([
           // 'admin_id' => '301',
            'name' => 'Ece',
            'surname' => 'Bal',
            'email' => 'Ece.bal@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'medtek',
            //'club_id' => '201',
        ]);

        club_admin::create([
            //'admin_id' => '302',
            'name' => 'Ahmet',
            'surname' => 'Karakuş',
            'email' => 'Ahmet.karakuş@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'insani değerler ve etik',
            //'club_id' => '202',
        ]);

        club_admin::create([
            //'admin_id' => '303',
            'name' => 'Murat',
            'surname' => 'Kurum',
            'email' => 'Murat.kurum@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'insani değerler ve etik',
            //'club_id' => '203',
        ]);

        club_admin::create([
            //'admin_id' => '304',
            'name' => 'Ekrem',
            'surname' => 'İmamoğlu',
            'email' => 'Ekrem.imamoğlu@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'insani değerler ve etik',
            //'club_id' => '204',
        ]);

        club_admin::create([
            //'admin_id' => '305',
            'name' => 'Yaman',
            'surname' => 'Koper',
            'email' => 'Yaman.koper@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'insani değerler ve etik',
            //'club_id' => '205',
        ]);
    }
}
