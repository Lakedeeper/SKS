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
            'club_name' => 'BIOENGTEC',
            'club_id' => '200',
            'club_exp' => 'Üsküdar Üniversitesi Biyoteknoloji ve Biyomühendislik Kulübü
            Biyomühendislik, biyoteknoloji ve genetik mühendisliği gibi bir çok alanda faaliyet gösteren bir öğrenci kulübüdür.',
            'club_logo' => 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0T7XEOZUtvbe9m9cufeftX2kyi65RH36oHr7NPjS-6jp7Oy2f',
            'admin_id' => '300',
        ]);

        club::create([
            'club_name' => 'medtek',
            'club_id' => '201',
            'club_exp' => 'Yapay Zeka ve Tıp Kulübümüz, sağlık alanında yapay zekanın kullanımını ve potansiyelini keşfetmek isteyen öğrencilere yönelik bir platformdur. Kulübümüzde yapay zeka uygulamalarının sağlık sektörüne etkilerini inceliyor, seminerler, atölyeler ve projeler aracılığıyla bilgi ve deneyim paylaşıyoruz.',
            'club_logo' => 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fuskudar.edu.tr%2Fassets%2Fuploads%2Fogrencikulup%2F236%2Fmedikalde-teknobilim-kulubu.png&w=128&q=75',
            'admin_id' => '301',
        ]);

        club::create([
            'club_name' => 'insani değerler ve etik',
            'club_id' => '202',
            'club_exp' => 'İnsani Değerler ve Etik Kulübümüz, toplumsal etik, adalet ve insani değerler üzerine düşünen ve bu alanlarda etkin bir rol almak isteyen öğrencilere yönelik bir platformdur. Kulübümüzde etik ikilemleri tartışıyor, toplum ve birey arasındaki ilişkileri inceliyor ve farkındalık artırıcı etkinlikler düzenliyoruz',
            'club_logo' => 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fuskudar.edu.tr%2Fassets%2Fuploads%2Fogrencikulup%2F195%2Finsani-degerler-ve-etik-kulubu.jpg&w=256&q=75',
            'admin_id' => '302',
        ]);

        club::create([
            'club_name' => 'IEEE',
            'club_id' => '203',
            'club_exp' => 'IEEE. ÜÜ. Öğrenci kulübü araştırmacı ve girişimci bireylerin bir araya gelerek vizyonlarını geliştirdiği, yıl içerisinde düzenlenen akademik çalışmalarla da kariyerlerine yön vermeyi hedefleyen gelişimi kendine amaç edinen gençleri bir araya getirmektir. Üniversitemiz öğrencilerini mezun olana kadarki süreç içerisinde geliştirdikleri projelerle iş dünyasına tanıtmak kulübün temel faaliyetlerindendir.',
            'club_logo' => 'https://media.licdn.com/dms/image/C4D0BAQEJE7RHeDmfqw/company-logo_200_200/0/1630551734924?e=2147483647&v=beta&t=u9Mxo_0x3wtRguGV6h9uxIZq6mLWCI7Kd1dnXOfLZKU',
            'admin_id' => '303',
        ]);
        
        club::create([
            'club_name' => 'Çocuk Gelişim',
            'club_id' => '204',
            'club_exp' => 'Üsküdar Üniversitesi misyon ve vizyonuna bağlı kalarak yenilikçi, akılcı ve sorumlu yaklaşımı ile kulüp üyelerinin manevi değerlerini korumak ve güçlendirmek adına Çocuk Gelişimi öğrencilerinin yanı sıra Psikoloji-Sosyoloji-Sosyal Hizmet bölümünde okumakta olan öğrencilerin katılım sağlayabileceği, Üsküdar Üniversitesi dışında kulübün tanıtımı konusunda gerekli girişimlerde bulunmak amacı ile çeşitli etkinlikler düzenlemeyi amaçlamaktadır. Kulüp etkinlikleri kurulda yer alan öğrenciler tarafından gerçekleştirilmek üzere;konferans ve seminerler, söyleşi, sosyal sorumluluk projeleri ve çocuk şenliği olmak üzere 4 ayrı birimden oluşmaktadır.',
            'club_logo' => 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fuskudar.edu.tr%2Fassets%2Fuploads%2Fogrencikulup%2F96%2Fcocuk-gelisimi-kulubu.jpg&w=256&q=75',
            'admin_id' => '304',
        ]);
        
        club::create([
            'club_name' => 'Mucizeye ilk dokunuş',
            'club_id' => '205',
            'club_exp' => 'Üsküdar Üniversitesi Ebelik bölümü öğrencileri tarafından kurulmuş ve faaliyetlerini bugün de sürdüren bir kulüptür. Ebelik mesleğinin görev ve sorumluluk alanlarını tüm öğrencilere aktarıp, toplumsal bir farkındalık oluşturulması amaçlanmıştır. Meslek hayatında daha aktif rol onamalarına zemin hazırlayacak destekleyici faaliyetlerde bulunulur.',
            'club_logo' => 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fuskudar.edu.tr%2Fassets%2Fuploads%2Fogrencikulup%2F118%2Fmucizeye-ilk-dokunus-kulubu.jpg&w=256&q=75',
            'admin_id' => '305',
        ]);

       
    }
}
