<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\club>
 */
class clubFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
         return $clubs = [
            [
                'club_name' => 'BIOENGTEC',
                'club_exp' => 'Üsküdar Üniversitesi Biyoteknoloji ve Biyomühendislik Kulübü
                Biyomühendislik, biyoteknoloji ve genetik mühendisliği gibi bir çok alanda faaliyet gösteren bir öğrenci kulübüdür.',
                'club_logo' => 'blob:https://web.whatsapp.com/9a87265b-57ef-41be-9bcb-5be605012931',
                'club_id' => '200', 
            ],
            [
                'club_name' => 'medtek',
                'club_exp' => 'Yapay Zeka ve Tıp Kulübümüz, sağlık alanında yapay zekanın kullanımını ve potansiyelini keşfetmek isteyen öğrencilere yönelik bir platformdur. Kulübümüzde yapay zeka uygulamalarının sağlık sektörüne etkilerini inceliyor, seminerler, atölyeler ve projeler aracılığıyla bilgi ve deneyim paylaşıyoruz.',
                'club_logo' => 'blob:https://web.whatsapp.com/6764a91c-036c-460b-bf4d-b1acb9f10b62',
                'club_id' => '201', 
            ],
            [
                'club_name' => 'insani değerler ve etik',
                'club_exp' => 'İnsani Değerler ve Etik Kulübümüz, toplumsal etik, adalet ve insani değerler üzerine düşünen ve bu alanlarda etkin bir rol almak isteyen öğrencilere yönelik bir platformdur. Kulübümüzde etik ikilemleri tartışıyor, toplum ve birey arasındaki ilişkileri inceliyor ve farkındalık artırıcı etkinlikler düzenliyoruz',
                'club_logo' => 'blob:https://web.whatsapp.com/0fb6aa3a-e64c-4094-b85b-2e31557b9095',
                'club_id' => '202', 
            ]
        ];
        
    }
}
