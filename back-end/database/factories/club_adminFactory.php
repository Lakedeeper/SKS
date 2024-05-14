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
              'club_id' =>'1',
              'name' => 'Elif Yade',
              'surname' => 'Karakuş',
              'email' => 'Elif.yade@gmail.com',
              'password' => '8423LEKOVICCC',
            ],
            [
              'club_id' =>'2',
              'name' => 'Ece',
              'surname' => 'Bal',
              'email' => 'Ece.bal@gmail.com',
              'password' => '8423LEKOVICCC',
            ],
            [
              'club_id' =>'3',
              'name' => 'Ahmet',
              'surname' => 'Karakuş',
              'email' => 'Ahmet.karakuş@gmail.com',
              'password' => '8423LEKOVICCC',
            ],
            [
              'club_id' =>'4',
              'name' => 'Murat',
              'surname' => 'Kurum',
              'email' => 'Murat.kurum@gmail.com',
              'password' => '8423LEKOVICCC',
            ],
            [
              'club_id' =>'5',
              'name' => 'Ekrem',
              'surname' => 'İmamoğlu',
              'email' => 'Ekrem.imamoğlu@gmail.com',
              'password' => '8423LEKOVICCC',
            ],
            [
              'club_id' =>'6',
              'name' => 'Yaman',
              'surname' => 'Koper',
              'email' => 'Yaman.koper@gmail.com',
              'password' => '8423LEKOVICCC',
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
