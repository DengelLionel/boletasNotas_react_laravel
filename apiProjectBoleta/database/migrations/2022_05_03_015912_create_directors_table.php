<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('directors', function (Blueprint $table) {
            $table->id();
            $table->foreignId("account_user_id")->constrained("create_account_users");
            $table->timestamps();
            $table->string("first_name");
            $table->string("secund_name");
            $table->string("first_surname");
            $table->string("secund_surname");
            $table->string("mobile");
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('directors');
    }
};
