<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('password')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('headline')->nullable();
            $table->string('about_me')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('profile_pic')->default("default.jpg");
            $table->string('confirmation_code')->nullable();
            $table->string('timezone')->nullable();
            $table->boolean('active')->default(true);
            $table->boolean('confirmed')->default(false);
            $table->boolean('status')->default(true);
            $table->timestamp('password_changed_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->timestamp('last_login_at')->nullable();
            $table->boolean('mobile_notification')->default(true);
            $table->boolean('email_notification')->default(true);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('last_login_ip')->nullable();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
