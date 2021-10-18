<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->longText('content');

            $table->unsignedBigInteger('user_id');

            $table->unsignedBigInteger('post_id');

            $table->unsignedBigInteger('comment_id')
                ->nullable();
            $table->timestamps();


//            $table->foreign('user_id')->references('id')->on('users')->onDelete('CASCADE');
//            $table->foreign('post_id')->references('id')->on('posts')->onDelete('CASCADE');
            $table->foreign('comment_id')->references('id')->on('comments')->onDelete('CASCADE');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
