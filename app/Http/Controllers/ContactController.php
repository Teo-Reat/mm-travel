<?php

namespace App\Http\Controllers;

use App\Mail\ContactCreated;
use App\Mail\ContactWelcome;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $this->validate($request, [
            'tel' => 'required',
            'email' => 'required|email'
        ]);
        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->tel,
            'created_at' => new \DateTime(),
        ];
        DB::table('contacts')->insert($data);
        Mail::send(new ContactCreated($data));
        Mail::send(new ContactWelcome($data));
        return redirect('/');
    }
}
