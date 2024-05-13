<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\form;

class formSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        form::create(

            [
                'event_name' => 'Makale Oturumları 9',
                'club_name' => ' medtek',
                'event_type' => 'online',
                'start_of_event' => '03/27/2023',
                'end_of_event' => '03/27/2023',
                'number_of_participants' => 100 ,
              //  'form_id' => '001',
                'adress' => 'Uskudar Universitesi',
               // 'admin_id'=> '301',
                'form_url'=>'x',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fmakale-oturumlari-9-44717.jpg%3Ft%3D1711319669&w=828&q=75',
                'event_subject'=> 'Makale oturumu',
            ]);


            form::create([
                'event_name' => 'Message Deneyi Üzerine',
                'club_name' =>'bioengtec',
                'event_type'=> 'facetoface',
                'start_of_event' => '03/19/2024',
                'end_of_event' => '03/27/2023',
                'number_of_participants'=> '80',
              //  'form_id'=> '002',
                'adress'=> 'Uskudar Universitesi',
               // 'admin_id'=> '300',
                'form_url'=>'x',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fmessage-deneyi-onemi-ve-kapsami-44642.jpg%3Ft%3D1710717964&w=828&q=75',
                'event_subject'=> 'Message Deneyi Önemi ve Kapsamı',

            ]);

            form::create([ 
                'event_name' => 'Biyogirişimcilik - 4',
                'club_name' =>'IEEE',
                'event_type' => 'facetoface',
                'start_of_event' => '04/15/2024',
                'end_of_event' => '03/27/2023',
                'number_of_participants'=> '50',
               // 'form_id'=> '003',
                'adress'=> 'Uskudar Üniversitesi Merkez Yerleşke Ablok',
               // 'admin_id'=> '303',
                'form_url'=>'x',
                'image'=> 'https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fbiyogirisimcilik-101-44920.jpg%3Ft%3D1713154485&w=828&q=75',
                'event_subject'=> 'Biyogirişimcilik - 101',

           ]);            
     }
 }

