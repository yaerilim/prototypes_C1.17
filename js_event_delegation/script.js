// Answer the questions here:

// - What do you think is going to happen?
//nothing
// - What happened?
//nothing
// - Why?
//Becuase the 5th button was made after console.log($(this).text());???
//========== Write your code below ===========//

$(document).ready(function() {
    $('#list button').on('click', function () {
        console.log($(this).text());
    });

    $('#list').append("<li><button style='margin-top: 10px'>Delegated Button#5 Handler</button></li>");

    $('#list button').on('click', function () {
        console.log($(this).text());
    });

    $('#list').append("<li><button id='google'>Open Google!</button></li>");

    $('#list').on('click', '#google', function() {
        if($(event.target).attr('id') !== undefined){
            window.open("http://www.google.com", '_blank');
        }
    });
});