<!DOCTYPE html>
<html>
<head>
    <title>{{ config('app.name', 'MailSender') }}</title>
{{--    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>--}}
    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link href="{{ mix('css/style.css') }}" rel="stylesheet">

</head>
<body>
<br />
<br />
<br />
<div class="container box">
    <h3 align="center">MailSender form:</h3><br />
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
    @if ($message = Session::get('success'))
        <div class="alert alert-success alert-block">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>{{ $message }}</strong>
        </div>
    @endif
    <form method="post" action="{{url('/sendmail')}}">
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
            <input type="submit" name="send" class="btn btn-info" value="Wyślij" />
        </div>
    </form>

</div>
</body>
</html>
