<?php
?>
<form class="sendmail-form" method="post" action="{{url('/sendmail')}}">
    {{ csrf_field() }}
    <div class="form-group">
        <label>Do kogo:</label>
        <input type="text" name="email" class="form-control email-input" value="" placeholder="Email"/>
        <small></small>
    </div>
    <div class="form-group">
        <label>Tytuł:</label>
        <input type="text" name="title" class="form-control title-input" value="" placeholder="Tytuł maila"/>
        <small></small>
    </div>
    <div class="form-group">
        <label>Treść maila:</label>
        <textarea name="message" class="form-control form-control-lg text-input" rows="15" placeholder="Treść maila w formie WYSIWYG"></textarea>
        <small></small>
    </div>
    <div class="form-group flex-end">
        <input type="submit" name="submit" class="btn btn-info form-send-btn" value="Wyślij"/>
    </div>
</form>
