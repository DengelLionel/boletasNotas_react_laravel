<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class director extends Model
{
    use HasFactory;

    protected $fillable=["account_user_id","first_name","secund_name","first_surname","secund_surname","mobile"];
    public function create_account_user(){
        return $this->belongsTo(create_account_user::class);
    }
}
