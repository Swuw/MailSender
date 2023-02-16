function  copyMessage(){
    let insertText = document.querySelector('.insert-text-message');
    let buttons = document.querySelectorAll('.show-message');
    let hiddenText = document.querySelectorAll('.message-hide');

    if(buttons){
        buttons.forEach((but, i) => {
            but.addEventListener('click', function (event) {
                insertText.innerText = hiddenText[i].innerText;
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    copyMessage();

});
