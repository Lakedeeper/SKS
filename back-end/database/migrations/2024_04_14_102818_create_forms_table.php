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
            $table->id();
            $table->timestamps();
            $table->integer('form_id');
            $table->string('event_name');
            $table->string('club_name');
            $table->string('event_type');
            $table->date('date_of_event');
            $table->integer('number_of_participants');
            $table->string('adress');
            $table->string('club_admin');
            $table->string('form_url');
            $table->string('image');
            $table->string('subject');
            


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