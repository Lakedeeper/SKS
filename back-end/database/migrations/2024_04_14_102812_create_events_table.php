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
        Schema::create('events', function (Blueprint $table) {
            $table->id('event_id');
            $table->timestamps();
          //  $table->integer('event_id');
         //   $table->integer('club_id');
         //   $table->integer('form_id');
            $table->string('event_name');
            $table->date('start_of_event');
            $table->date('end_of_event');
            $table->string('subject');
            $table->string('image');
            $table->string('exp');
            
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
