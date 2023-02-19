<?php
?>
<!DOCTYPE html>
<html>
<head>
    <title>{{ config('app.name', 'MailSender') }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link href="{{ mix('css/style.css') }}" rel="stylesheet">

</head>
<body>
