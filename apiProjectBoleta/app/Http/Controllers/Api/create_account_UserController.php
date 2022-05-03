<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\create_account_user;
use Illuminate\Http\Request;

class create_account_UserController extends Controller
{
  
    public function index()
    {
       $accountsUsers= create_account_user::all();
       return $accountsUsers;
    }

   
    public function store(Request $request)
    {
        $accountUser=new create_account_user();
        $accountUser->email=$request->email;
        $accountUser->password=$request->password;
        $accountUser->save();
    }

    
    public function show($id)
    {
      $accountUser=create_account_user::find($id);
        return $accountUser;
    }

    public function update(Request $request, $id)
    {
       $accountUser= create_account_user::findOrFail($request->id);
       $accountUser->email=$request->email;
       $accountUser->password=$request->password;
       $accountUser->save();
       return $accountUser; 
    }
    public function destroy($id)
    {
        $accountUser= create_account_user::destroy($id);
        return $accountUser;
    }
}
