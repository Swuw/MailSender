$(document).ready(function (){

    function deleteMessage(data)
    {

        $.ajax({
            type: "POST",
            url: "/deletemail",
            data: data,
            success: function (responce) {
                $('.changing-content').remove();
                $('.table-content').append(responce);
                console.log(responce);
            },error : function(error){
                console.log(error);
            }
        })
    }

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $(document).on('click', '.delete-mail-button', function (e) {
        e.preventDefault();

        var data  = {
            "id": $(this).attr("data-id")
        }

        deleteMessage(data);
    })

})
