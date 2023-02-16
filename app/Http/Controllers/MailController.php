<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\View\View;
use App\Models\ArchiveMail;

class MailController extends Controller
{
    public function index() :View
    {
        $mailes = [];
        $mailes = ArchiveMail::latest()->take(10)->get();

        return view('email',
        [
            'mailes' => $mailes
        ]);
    }

    public function sendmail(Request $request)
    {
        $this->validate($request, [
            'name'     =>  'required',
            'email'  =>  'required|email',
            'message' =>  'required'
        ]);

        $data = array(
            'name'      =>  $request->name,
            'message'   =>   $request->message
        );

        Mail::to($request->email)->send(new SendMail($data));
        $archive_mail = new ArchiveMail;
        $archive_mail->name = $request->name;
        $archive_mail->email = $request->email;
        $archive_mail->message = $request->message;
        $archive_mail->created_at = date('Y-m-d h:i:s A');
        $archive_mail->updated_at = date('Y-m-d h:i:s A');
        $archive_mail->save();
        return back()->with('success', 'Thank you for sending message!');

    }
}
