<?php
?>
    @foreach($mailes as $mail)
    <tr class="changing-content">
        @if(!empty($mail['email']))
        <td>{{ $mail['email'] }}</td>
        <td>{{ $mail['title'] }}</td>
        <td class="flex-around">
            <button type="button" class="show-message" data-bs-toggle="modal" data-bs-target="#exampleModal">Show</button>
            <button type="button" class="delete-mail-button delete" data-id="{{ $mail['id'] }}">Delete</button>
            <div class="hide message-hide">
                {{ $mail['message'] }}
            </div>
        </td>
        @elseif($mail['error'])
        <td class="font-weight-bold"> {{ $mail['error'] }}</td>
        <td></td>
        <td></td>
        @endif
    </tr>
    @endforeach
