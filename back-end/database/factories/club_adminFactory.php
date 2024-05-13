<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\club_admin>
 */
class club_adminFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return $club_admins = [
            [
              //  'admin_id' => '300',
            'name' => 'Elif Yade',
            'surname' => 'Karakuş',
            'email' => 'Elif.yade@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'biontek',
          //  'club_id' => '200',
            ],
            [
            //    'admin_id' => '301',
            'name' => 'Ece',
            'surname' => 'Bal',
            'email' => 'Ece.bal@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'medtek',
           // 'club_id' => '201',
            ],
            [
            //    'admin_id' => '302',
            'name' => 'Ahmet',
            'surname' => 'Karakuş',
            'email' => 'Ahmet.karakuş@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'insani değerler ve etik',
          //  'club_id' => '202',
            ],
            [
           //     'admin_id' => '303',
            'name' => 'Murat',
            'surname' => 'Kurum',
            'email' => 'Murat.kurum@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'insani değerler ve etik',
           // 'club_id' => '203',
            ],
            [
           //     'admin_id' => '304',
            'name' => 'Ekrem',
            'surname' => 'İmamoğlu',
            'email' => 'Ekrem.imamoğlu@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'insani değerler ve etik',
           // 'club_id' => '204',
            ],
            [
            //    'admin_id' => '305',
            'name' => 'Yaman',
            'surname' => 'Koper',
            'email' => 'Yaman.koper@gmail.com',
            'password' => '8423LEKOVICCC',
            'club_name' => 'insani değerler ve etik',
           // 'club_id' => '205',
            ],
        ];
    }

    protected function data(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true),
            set: fn ($value) => json_encode($value),
        );
    } 
}
