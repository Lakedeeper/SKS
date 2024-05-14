<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('forms', function (Blueprint $table) {
            $table->id('form_id');
            $table->timestamps();
           // $table->integer('form_id');
            $table->string('event_name');
            $table->string('club_name');
            $table->string('event_type');
            $table->string('time');
            $table->date('start_of_event');
            $table->date('end_of_event');
            $table->integer('number_of_participants');
            $table->string('adress');
          //  $table->integer('admin_id');
            $table->string('image');
            $table->string('event_subject');
            $table->string('state');
            


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forms');
    }
};
