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
            'club_id' =>'1',
            'name' => 'Elif Yade',
            'surname' => 'Karakuş',
            'email' => 'Elif.yade@gmail.com',
            'password' => '8423LEKOVICCC',

    
        ]);

        club_admin::create([
            'club_id' =>'2',
            'name' => 'Ece',
            'surname' => 'Bal',
            'email' => 'Ece.bal@gmail.com',
            'password' => '8423LEKOVICCC',
        ]);

        club_admin::create([
            'club_id' =>'3',
            'name' => 'Ahmet',
            'surname' => 'Karakuş',
            'email' => 'Ahmet.karakuş@gmail.com',
            'password' => '8423LEKOVICCC',
        ]);

        club_admin::create([
            'club_id' =>'4',
            'name' => 'Murat',
            'surname' => 'Kurum',
            'email' => 'Murat.kurum@gmail.com',
            'password' => '8423LEKOVICCC',
         
        ]);

        club_admin::create([
            'club_id' =>'5',
            'name' => 'Ekrem',
            'surname' => 'İmamoğlu',
            'email' => 'Ekrem.imamoğlu@gmail.com',
            'password' => '8423LEKOVICCC',

        ]);

        club_admin::create([
            'club_id' =>'6',
            'name' => 'Yaman',
            'surname' => 'Koper',
            'email' => 'Yaman.koper@gmail.com',
            'password' => '8423LEKOVICCC',
        ]);
    }
}
