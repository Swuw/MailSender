<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;
use App\Models\ArchiveMail;

class MailController extends Controller
{
    public function index() :View
    {

        $mailes = $this->getArchiveMails();

        return view('main-page.email',
        [
            'mailes' => $mailes
        ]);

    }

    public function getArchiveMails(): array
    {
        try {
            $mailes = ArchiveMail::latest()->take(10)->get()->toArray() ?: [
                [
                    'error' => 'Jeszcze nie masz żadnych powiadomień'
                ]
            ];
        } catch (\Exception $mailes) {
            $mailes = [
                [
                    'error' => 'Problem z podłączeniem do bazy danych!'
                ]
            ];
        }

        return $mailes;
    }

    public function updateTableContent(): View
    {
        $mailes = $this->getArchiveMails();

        return view('main-page.table-content',
            [
                'mailes' => $mailes
            ]);

    }

    public function saveMessage($request): string
    {

        try {
            $archive_mail = new ArchiveMail;
            $archive_mail->title = $request->title;
            $archive_mail->email = $request->email;
            $archive_mail->message = $request->message;
            $archive_mail->created_at = date('Y-m-d h:i:s A');
            $archive_mail->updated_at = date('Y-m-d h:i:s A');
            $archive_mail->save();
            $error = '';
        } catch (\Exception $mailes) {
            $error = 'error save';
        }

        return $error;
    }

    public function sendMail(Request $request): \Illuminate\Http\RedirectResponse
    {
        $this->validate($request, [
            'title'     =>  'required|min:5|max:200',
            'email'  =>  'required|email',
            'message' =>  'required|min:5|max:245'
        ]);

        $data = [
            'title'      =>  $request->title,
            'message'   =>   $request->message
            ];

        $error = $this->saveMessage($request);
        if(empty($error)){
            Mail::to($request->email)->send(new SendMail($data));
            $returnMessage = back()->with('success', 'Dziękuje za wysłaną wiadomość!');
        } else {
            $returnMessage = back()->with('error', 'Problem z podłączeniem do bazy danych dla tego nie możemy odesłać tego maila');
        }

        return $returnMessage;

    }

    public function deleteMail(): View
    {

        $id = $_POST['id'] ?: '';
        if($id){
            ArchiveMail::destroy($id);
        }

        return $this->updateTableContent();

    }
}
