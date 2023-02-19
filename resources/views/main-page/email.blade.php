@include('main-page.header')
<br>
<div class="mail-container col-6 align-self-center ">
    <table class="table table-bordered col-xl-12">
        <thead>
        <tr>
            <th class="text-center col-lg-4" scope="col">Do kogo</th>
            <th class="text-center col-lg-4" scope="col">Tytuł</th>
            <th class="text-center col-lg-2" scope="col">
                <div class="container mt-3">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                        Dodaj
                    </button>
                </div>
            </th>
        </tr>
        </thead>
        <tbody class="table-content">
            @include('main-page.table-content')
        </tbody>
    </table>
</div>

@if ($message = Session::get('success'))
    <div class="alert alert-success alert-block align-self-center col-4">
        <button type="button" class="close close-alert" data-dismiss="alert">X</button>
        <strong>{{ $message }}</strong>
    </div>
@elseif($message = Session::get('error'))
    <div class="alert has-error alert-block align-self-center col-4">
        <button type="button" class="close close-alert" data-dismiss="alert">X</button>
        <strong>{{ $message }}</strong>
    </div>
@endif
@if (count($errors) > 0)
    <div class="alert alert-danger col-4">
        <button type="button" class="close close-alert" data-dismiss="alert">X</button>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
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
                @include('main-page.sendmail-form')
            </div>
        </div>
    </div>
</div>
@include('main-page.modal')

@include('main-page.footer')
