<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\event>
 */
class eventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return $events = [
            [
              //  'event_id'=> '1000',
                'event_name'=> 'Nasıl Tübitak 2209 Projesi Hazırlarız?',
                'start_of_event'=> '03/08/2024',
                'end_of_event' => '03/08/2024',
                'subject'=> 'Tübitak Projesi',
                'exp'=> 'Medikalde Teknobilim Kulübünün düzenlediği Nasıl Tübitak 2209 Projesi Hazırlarız? konulu etkinlik 8 Mart 2024 saat 20.30da zoom üzerinden gerçekleşecektir. ',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fnasil-tubitak-2209-projesi-nasil-hazirlariz-44491.jpg%3Ft%3D1709636597&w=828&q=75',
               // 'club_id'=> '201',
              //  'form_id' => '0',
            ],
            [
               // 'event_id'=> '1001',
                'event_name'=> 'Makale Okuma Etkinliği-3',
                'start_of_event'=> '03/13/2024',
                'end_of_event' => '03/13/2024',
                'subject'=> 'Makale',
                'exp'=> 'Mucizeye İlk Dokunuş Kulübü tarafından düzenlenen Makale Okuma Etkinliği-3 etkinliği, 13 Mart 2024 Çarşamba saat 21.00da Öğr. Gör. Meryem Koçaslan Toranın katılımıyla zoom üzerinden gerçekleştirilecektir.',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fmakale-okuma-etkinligi-3-44535.jpg%3Ft%3D1710099872&w=828&q=75',
               // 'club_id'=> '205',
                //'form_id' => '0',
            ],
            [
              //  'event_id'=> '1002',
                'event_name'=> 'Makale Oturumları - 7',
                'start_of_event'=> '03/13/2024',
                'end_of_event' => '03/13/2024',
                'subject'=> 'Makale',
                'exp'=> 'Medikalde Teknobilim Kulübü tarafından düzenlenen "Makale Oturumları - 7", 13 Mart 2024 Çarşamba saat 20.30da zoom üzerinden gerçekleşecektir. ',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fmakale-oturumlari-7-44536.jpg%3Ft%3D1710100139&w=828&q=75',
              //  'club_id'=> '201',
               // 'form_id' => '0',

            ],
            [
              //  'event_id'=> '1003',
                'event_name'=> 'Message Deneyi Önemi ve Kapsamı',
                'start_of_event'=> '03/19/2024',
                'end_of_event' => '03/19/2024',
                'subject'=> 'Message Deneyi Önemi ve Kapsamı ve Uzayda deney',
                'exp'=> 'Biyoteknoloji ve Biyomühendislik Kulübü tarafından düzenlenen "Message Deneyi Önemi ve Kapsamı" konulu etkinlik 19 Mart 2024 Salı saat 14.00da Dr. Öğr. Üyesi Cihan TAŞTANın katılımıyla gerçekleştirilecektir. ',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fmessage-deneyi-onemi-ve-kapsami-44642.jpg%3Ft%3D1710717964&w=828&q=75',
              //  'club_id'=> '200',
               // 'form_id' => '0',
            ],
            [
               // 'event_id'=> '1004',
                'event_name'=> 'Makale Oturumları - 8',
                'start_of_event'=> '03/20/2024',
                'end_of_event' => '03/20/2024',
                'subject'=> 'Makale',
                'exp'=> 'Medikalde Teknobilim Kulübü tarafından düzenlenen "Makale Oturumları - 8", 20 Mart 2024 Çarşamba saat 20.30da zoom üzerinden gerçekleşecektir. ',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fmakale-oturumlari-8-44643.jpg%3Ft%3D1710718232&w=828&q=75',
               // 'club_id'=> '201',
               // 'form_id' => '0',
            ],
            [
              //  'event_id'=> '1005',
                'event_name'=> 'İyilik İftarı',
                'start_of_event'=> '03/22/2024',
                'end_of_event' => '03/22/2024',
                'subject'=> 'İftar',
                'exp'=> 'İnsani Değerler ve Etik Kulübü tarafından düzenlenen "İyilik İftarı" 22 Mart 2024 Cuma Çarşı Yerleşke Bahçe Alanında Öğr. Gör. Uğur TUTKUNun katılımıyla gerçekleştirilecektir.',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fiyilik-iftari-44646.jpg%3Ft%3D1710719029&w=828&q=75',
              //  'club_id'=> '202',
                //'form_id' => '0',
            ],
            [
              //  'event_id'=> '1006',
                'event_name'=> 'Makale Oturumları - 9',
                'start_of_event'=> '03/27/2024',
                'end_of_event' => '03/27/2024',
                'subject'=> 'Makale',
                'exp'=> 'Medikalde Teknobilim Kulübü tarafından düzenlenen "Makale Oturumları - 9", 27 Mart 2024 Çarşamba saat 20.30da zoom üzerinden gerçekleşecektir. ',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fmakale-oturumlari-9-44717.jpg%3Ft%3D1711319669&w=828&q=75',
              // 'club_id'=> '201',
              //  'form_id' => '0',
            ],
            [
              //  'event_id'=> ' 1007',
                'event_name'=> 'Kitap Okuma Stratejileri',
                'start_of_event' => '04/15/2024',
                'end_of_event' => '04/15/2024',
                'subject'=> 'Kitap Okuma Stratejileri',
                'exp'=> 'Çocuk Gelişimi Kulübü tarafından düzenlenen "Kitap Okuma Stratejileri " konulu etkinlik 15 Nisan 2024 Pazartesi, Kevser Şenel YILMAZın katılımıyla Üsküdar Üniversitesi Çarşı Yerleşkesi Emir Nebi 1 Salonunda gerçekleştirilecektir. ',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fkitap-okuma-stratejileri-44921.jpg%3Ft%3D1713154730&w=828&q=75',
              //  'club_id'=> '204',
               // 'form_id' => '0',
            ],
            [
             //   'event_id'=> '1008',
                'event_name'=> 'Biyogirişimcilik 101',
                'start_of_event'=> '04/15/2024',
                'end_of_event' => '04/15/2024',
                'subject'=> 'Biyogirişim',
                'exp'=> 'IEEE Kulübü tarafından düzenlenen "Biyogirişimcilik - 4" etkinliği 15 Nisan 2024 Pazartesi, Merve Yıldırım CANPOLATın katılımıyla Üsküdar Üniversitesi Merkez Yerleşke A Blok 226 nolu derslikte gerçekleştirilecektir.',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fbiyogirisimcilik-101-44920.jpg%3Ft%3D1713154485&w=828&q=75',
             //   'club_id'=> '203',
              //  'form_id' => '0',
            ],
            [
               
              //  'event_id'=> '1009',
                'event_name'=> 'Atıl Samancıoğlu ile Siber Güvenlikte Kariyer',
                'start_of_event'=> '04/17/2024',
                'end_of_event' => '04/17/2024',
                'subject'=> 'Siber Güvenlik',
                'exp'=> 'IEEE Öğrenci Kolu Kulübü tarafından düzenlenen "Atıl Samancıoğlu ile Siber Güvenlikte Kariyer" adlı etkinlik 17 Nisan 2024 Çarşamba zoom üzerinden gerçekleştirilecektir. ',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fatil-samancioglu-ile-siber-guvenlikte-kariyer-44924.jpg%3Ft%3D1713155758&w=828&q=75',
              //  'club_id'=> '203',
              //  'form_id' => '0',
            ],

        ];
    }
}
