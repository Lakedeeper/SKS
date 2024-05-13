<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\sks_admin>
 */
class sks_adminFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return $sksadmin = [
            [
            'name' => 'Ahmet Doğukan',
            'surname' => 'Solak',
            'email' => 'Ahmet.doğukan.solak@gmail.com',
          //  'user_id' => '1001',
            ],
            [
                'name' => 'null',
                'surname' => 'null',
                'email' => 'null@gmail.com',
               // 'user_id' => '0',
                ],
        ];
    }
}
