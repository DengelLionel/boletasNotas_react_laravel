<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class create_account_user extends Model
{
    use HasFactory;
    protected $fillable =["password","email"];

}
