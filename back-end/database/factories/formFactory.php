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
                        'state' => 'pending',
                        'time' => '14.30',
        
                    ],
        
                ];
            }
        }