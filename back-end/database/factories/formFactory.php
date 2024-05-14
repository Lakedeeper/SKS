<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\form>
 */
class formFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        
                return $forms = [
                    [
                        'event_name' => 'Makale Oturumları 9',
                        'club_name' => ' medtek',
                        'event_type' => 'online',
                        'start_of_event' => '2023-03-27',
                        'end_of_event' => '2023-03-27',
                        'number_of_participants' => 100 ,
                      //  'form_id' => '001',
                        'adress' => 'Uskudar Universitesi',
                       // 'admin_id'=> '301',
                        
                        'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fmakale-oturumlari-9-44717.jpg%3Ft%3D1711319669&w=828&q=75',
                        'event_subject'=> 'Makale oturumu',
                        'state' => 'pending',
                        'time' => '16.00',
                    ],
        
                    [
                        'event_name' => 'Message Deneyi Üzerine',
                        'club_name' =>'bioengtec',
                        'event_type'=> 'facetoface',
                        'start_of_event' => '2024-03-19',
                        'end_of_event' => '2024-03-19',
                        'number_of_participants'=> '80',
                     //   'form_id'=> '002',
                        'adress'=> 'Uskudar Universitesi',
                     //   'admin_id'=> '300',
                    
                        'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fmessage-deneyi-onemi-ve-kapsami-44642.jpg%3Ft%3D1710717964&w=828&q=75',
                        'event_subject'=> 'Message Deneyi Önemi ve Kapsamı',
                        'state' => 'pending',     
                        'time' => '13.00',   
                    ],
        
                    [ 
                        'event_name' => 'Biyogirişimcilik - 4',
                        'club_name' =>'IEEE',
                        'event_type' => 'facetoface',
                        'start_of_event' => '2024-05-14',
                        'end_of_event' => '2024-05-14',
                        'number_of_participants'=> '50',
                      //  'form_id'=> '003',
                        'adress'=> 'Uskudar Üniversitesi Merkez Yerleşke Ablok',
                      //  'admin_id'=> '305',
                        'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fbiyogirisimcilik-101-44920.jpg%3Ft%3D1713154485&w=828&q=75',
                        'event_subject'=> 'Biyogirişimcilik - 101',
                        'state' => 'clubOnay',
                        'time' => '14.30',
        
                    ],
                    [
                       'event_name' => 'Nörodejeneratif Hastalıklar Zİrvesi',
                        'club_name' =>'Nörobilim Klübü',
                        'event_type' => 'facetoface',
                        'start_of_event' => '2024-05-18',
                        'end_of_event' => '2024-05-18',
                        'number_of_participants'=> '75',
                      //  'form_id'=> '003',
                        'adress'=> 'Uskudar Üniversitesi Merkez Yerleşke Bblok',
                      //  'admin_id'=> '305',
                        'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fnorodejeneratif-hastaliklar-zirvesi-45188.jpg%3Ft%3D1715551632&w=828&q=75',
                        'event_subject'=> 'Nörodejeneratif Hastalıklar',
                        'state' => 'clubOnay',
                        'time' => '10.00',
                    ],
                    [
                      'event_name' => 'Yapay Zekada Fizyoterapi',
                       'club_name' =>'Fizyoterapi Klübü',
                       'event_type' => 'facetoface',
                       'start_of_event' => '2024-04-25',
                       'end_of_event' => '2024-04-25',
                       'number_of_participants'=> '45',
                     //  'form_id'=> '003',
                       'adress'=> 'Uskudar Üniversitesi Merkez Yerleşke Cblok',
                     //  'admin_id'=> '305',
                       'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fyapay-zekada-fizyoterapi-44993.jpg%3Ft%3D1713763512&w=828&q=75',
                       'event_subject'=> 'Yapay Zeka',
                       'state' => 'published',
                       'time' => '12.45',
                   ],
                   [
                    'event_name' => 'Kan da Sen Ol Can da',
                     'club_name' =>'Kızılay Klübü',
                     'event_type' => 'facetoface',
                     'start_of_event' => '2024-05-07',
                     'end_of_event' => '2024-05-07',
                     'number_of_participants'=> '120',
                   //  'form_id'=> '003',
                     'adress'=> 'Uskudar Üniversitesi Merkez Yerleşke Dblok',
                   //  'admin_id'=> '305',
                     'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fkan-da-sen-ol-can-da-45111.jpg%3Ft%3D1714949328&w=828&q=75',
                     'event_subject'=> 'Kan Bağışı',
                     'state' => 'published',
                     'time' => '14.45',
                 ],
                 [
                  'event_name' => 'Psikolojide Deney Hayvanı Kullanımı:Laboratuvar Gezisi',
                   'club_name' =>'Pozitif Psikoloji Klübü',
                   'event_type' => 'facetoface',
                   'start_of_event' => '2024-05-07',
                   'end_of_event' => '2024-05-07',
                   'number_of_participants'=> '35',
                 //  'form_id'=> '003',
                   'adress'=> 'Uskudar Üniversitesi Merkez Yerleşke Ablok',
                 //  'admin_id'=> '305',
                   'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fpsikolojide-deney-hayvanlari-kullanimi-laboratuvar-gezisi-45112.jpg%3Ft%3D1714949507&w=828&q=75',
                   'event_subject'=> 'deney hayvanları ve etik',
                   'state' => 'publish',
                   'time' => '11.45',
               ],
               [
                'event_name' => 'Sanat Terapisi " Kil Atölyesi"',
                 'club_name' =>'pozitif psikoloji kulübü',
                 'event_type' => 'facetoface',
                 'start_of_event' => '2024-05-03',
                 'end_of_event' => '2024-05-03',
                 'number_of_participants'=> '150',
               //  'form_id'=> '003',
                 'adress'=> 'Uskudar Üniversitesi Güney Yerleşke ',
               //  'admin_id'=> '305',
                 'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fsanat-terapisi-kil-atolyesi-45072.jpg%3Ft%3D1714429194&w=828&q=75',
                 'event_subject'=> 'Psikoloji',
                 'state' => 'publish',
                 'time' => '14.00',
             ],
                ];
            }
        }