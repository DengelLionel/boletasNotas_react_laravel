<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\director;
use Illuminate\Http\Request;

class directorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $directors=director::all();
        return $directors;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $director=new director();
        
        $director->account_user_id= $request->account_user_id;
        $director->first_name= $request->first_name;
        $director->secund_name= $request->secund_name;
        $director->first_surname= $request->first_surname;
        $director->secund_surname= $request->secund_surname;
        $director->mobile= $request->mobile;
        $director->save();
        return $director;
    }

    public function show($id)
    {
        $director=director::find($id);
        return $director;
    }
    public function update(Request $request, $id)
    {
        $director=director::findOrFail($request->id);
        $director->account_user_id= $request->account_user_id;
        $director->first_name= $request->first_name;
        $director->secund_name= $request->secund_name;
        $director->first_surname= $request->first_surname;
        $director->secund_surname= $request->secund_surname;
        $director->mobile= $request->mobile;
        $director->save();
      
        return $director;
    }
    public function destroy($id)
    {
        $director=director::destroy($id);
        return $director;
    }
}
