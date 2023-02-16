<!DOCTYPE html>
<html>
<head>
    <title>{{ config('app.name', 'MailSender') }}</title>
    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link href="{{ mix('css/style.css') }}" rel="stylesheet">

</head>
<body>
<br />
<br />
<br />
<div class="mail-container col-6 align-self-center ">
    <table class="table table-bordered col-xl-12">
        <thead>
        <tr>
            <th class="text-center" scope="col">Do kogo</th>
            <th class="text-center" scope="col">Tytuł</th>
            <th class="text-center col-lg-2" scope="col">
                <div class="container mt-3">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                        Dodaj
                    </button>
                </div>
            </th>
        </tr>
        </thead>
        <tbody>
        @foreach($mailes as $mail)
            <tr>
                <td>{{ $mail->email }}</td>
                <td>{{ $mail->name }}</td>
                <td class="flex-around">
                    <button type="button" class="show-message" data-bs-toggle="modal" data-bs-target="#exampleModal">Show</button>
                    <button type="button" class="delete">Delete</button>
                    <div class="hide message-hide">
                        {{ $mail->message }}
                    </div>

                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>

@if ($message = Session::get('success'))
    <div class="alert alert-success alert-block align-self-center col-4">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong>{{ $message }}</strong>
    </div>
@endif


<div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header box-header">
                <h3>MailSender form:</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
            </div>
            <div class="modal-body-send">
                @if (count($errors) > 0)
                    <div class="alert alert-danger">
                        <button type="button" class="close" data-dismiss="alert">×</button>
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                <form class="sendmail-form" method="post" action="{{url('/sendmail')}}">
                    {{ csrf_field() }}
                    <div class="form-group">
                        <label>Do kogo:</label>
                        <input type="text" name="email" class="form-control" value="" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <label>Tytuł:</label>
                        <input type="text" name="name" class="form-control" value="" placeholder="Tytuł maila"/>
                    </div>
                    <div class="form-group">
                        <label>Treść maila:</label>
                        <textarea name="message" class="form-control form-control-lg" rows="15" placeholder="Treść maila w formie WYSIWYG"></textarea>
                    </div>
                    <div class="form-group flex-end">
                        <input type="submit" name="send" class="btn btn-info" value="Wyślij"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Message from email:</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <div class="insert-text-message"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Scripts -->
<script src="{{ mix('js/app.js') }}"></script>
{{--<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>--}}
</body>
</html>
