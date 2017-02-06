//Create GLOBAL variable below here on line 2

//Feature Set 1 - Road to success
var global_result;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);

                //Feature Set 1 - Road to success
                global_result = result;
                console.log('global_result: ' + global_result);

                //Feature Set 2 - Exploring for images
                var first_movie_info = result.feed.entry[0];
                console.log('first_movie_info: ' + first_movie_info);
                var first_movie_img = result.feed.entry[0]['im:image'];
                console.log('first_movie_img: ' + first_movie_img);
                var first_movie_third_img = result.feed.entry[0]['im:image'][2];
                console.log('first_movie_third_img: ' + first_movie_third_img);

                //Feature Set 3 - Adding the Images & Feature Set 4 -Title the Images
                var third_img_from_movies = [];
                var movie_title_director = [];
                for (var i = 0; i < result.feed.entry.length; i++) {
                    third_img_from_movies = result.feed.entry[i]['im:image'][2].label;
                    console.log('third_img_from_movies: ' + third_img_from_movies);
                    $('#main').append($('<img>').attr('src', third_img_from_movies));
                    movie_title_director = result.feed.entry[i].title.label;
                    console.log('movie_title_director: ' + movie_title_director);
                    $('#main').append($('<h1>').html(movie_title_director));
                }
            }
        });
        console.log('End of click function');
    });
});