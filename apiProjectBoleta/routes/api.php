<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\create_account_UserController;
use App\Http\Controllers\Api\directorController;
use App\Models\director;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::controller(create_account_UserController::class)->group(function(){
    Route::get("/accounts","index");
    Route::post("/account","store");
    Route::get("/account/{id}","show");
    Route::put("/account/{id}","update");
    Route::delete("/account/{id}","destroy");
});
Route::controller(directorController::class)->group(function(){
    Route::get("/directors","index");
    Route::post("/director","store");
    Route::get("/director/{id}","show");
    Route::put("/director/{id}","update");
    Route::delete("/director/{id}","destroy");
});
