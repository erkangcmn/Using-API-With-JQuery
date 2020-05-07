/*
    PLEASE DONT'T DELETE 
    https://github.com/erkangcmn
    https://twitter.com/erkangcmn
    https://www.instagram.com/erkangcmn/
*/

/* _____________ Button Click _____________ */
$(".movie").on("click", function(){
    $(".tv").removeClass("trend-select");
    $(".movie").addClass("trend-select");
    $(".firstRow").html("");
    var url = "https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR API KEY";
    $.getJSON(url, function(data){
        var i = 0;
        
     
        $.each(data.results, function(index, value) {
            $(".firstRow").append('<div class="col-4 card content-'+i+'"></div>');
            $(".content-"+i+"").append('<div class="row no-gutters colContent-'+i+'"></div>');
            $(".colContent-"+i+"").append('<div class="col-6 col-img img-'+i+'"><div class="overviewContent overview-'+i+'"></div></div>');
            $(".colContent-"+i+"").append('<div class="col-6"><div class="card-body one one-'+i+'"><span class="title-'+i+'"></span><span class="rating-'+i+'"></span><span class="date-'+i+'"></span></div></div>');
            $.each(value, function(ind, val) {
               
                /* __________Title (movie or tv)___________ */
                if(ind == "original_title"){
                    $(".title-"+i+"").append('<h5> Title: '+ val + '</h5>');
                   
                }if(ind == "original_name"){
                    $(".title-"+i+"").append('<h5> Title: '+ val + '</h5>');
                }


            
                /* __________DATE (movie or tv)___________ */
                if(ind == "first_air_date"){
                    $(".date-"+i+"").append('<p><b>First air Date</b>: '+ val + '</p>');
                }
                if(ind == "release_date"){
                    $(".date-"+i+"").append('<p><b>Release Date</b>: '+ val + '</p>');
                }

                
                
                /* __________DATA (movie and TV)___________ */
                if(ind == "vote_average"){
                    $(".rating-"+i+"").append('<p><b>Rating</b>: '+ val + '</p>');
                }
                if(ind == "overview"){
                   
                    $(".overview-"+i+"").append("<p class='card-text actors-" + i + "'><b style='font-size:19px;'>Overview: </b>"+val+"</p>");
                }
                if(ind == "poster_path" ){
                    if(val == null){
                        $(".img-"+i+"").append("<img class='card-img-top image-" + i + "' src='img/no_photo.jpg'>");
                    }else{
                      
                        $(".img-"+i+"").append("<img class='card-img-top image-" + i + "' src='https://image.tmdb.org/t/p/w500"+val+"'>");
                    }

                }
                
            });
            i++;            
        });
    });

});


$(".tv").on("click", function(){
    $(".movie").removeClass("trend-select");
    $(".tv").addClass("trend-select");
    $(".firstRow").html("");
    var url = "https://api.themoviedb.org/3/trending/tv/day?api_key=YOUR API KEY";
    $.getJSON(url, function(data){
        var i = 0;
        
     
        $.each(data.results, function(index, value) {
            $(".firstRow").append('<div class="col-4 card content-'+i+'"></div>');
            $(".content-"+i+"").append('<div class="row no-gutters colContent-'+i+'"></div>');
            $(".colContent-"+i+"").append('<div class="col-6 col-img img-'+i+'"><div class="overviewContent overview-'+i+'"></div></div>');
            $(".colContent-"+i+"").append('<div class="col-6"><div class="card-body one one-'+i+'"><span class="title-'+i+'"></span><span class="rating-'+i+'"></span><span class="date-'+i+'"></span></div></div>');
            $.each(value, function(ind, val) {
               
                /* __________Title (movie or tv)___________ */
                if(ind == "original_title"){
                    $(".title-"+i+"").append('<h5> Title: '+ val + '</h5>');
                   
                }if(ind == "original_name"){
                    $(".title-"+i+"").append('<h5> Title: '+ val + '</h5>');
                }


            
                /* __________DATE (movie or tv)___________ */
                if(ind == "first_air_date"){
                    $(".date-"+i+"").append('<p><b>First air Date</b>: '+ val + '</p>');
                }
                if(ind == "release_date"){
                    $(".date-"+i+"").append('<p><b>Release Date</b>: '+ val + '</p>');
                }

                
                
                /* __________DATA (movie and TV)___________ */
                if(ind == "vote_average"){
                    $(".rating-"+i+"").append('<p><b>Rating</b>: '+ val + '</p>');
                }
                if(ind == "overview"){
                   
                    $(".overview-"+i+"").append("<p class='card-text actors-" + i + "'><b style='font-size:19px;'>Overview: </b>"+val+"</p>");
                }
                if(ind == "poster_path" ){
                    if(val == null){
                        $(".img-"+i+"").append("<img class='card-img-top image-" + i + "' src='img/no_photo.jpg'>");
                    }else{
                      
                        $(".img-"+i+"").append("<img class='card-img-top image-" + i + "' src='https://image.tmdb.org/t/p/w500"+val+"'>");
                    }

                }
                
            });
            i++;            
        });
    });
});


/* _____________ Content ready _____________ */
$(document).ready(function(){
    var url = "https://api.themoviedb.org/3/trending/tv/day?api_key=YOUR API KEY";
    $.getJSON(url, function(data){
        var i = 0;
        
     
        $.each(data.results, function(index, value) {
            $(".firstRow").append('<div class="col-4 card content-'+i+'"></div>');
            $(".content-"+i+"").append('<div class="row no-gutters colContent-'+i+'"></div>');
            $(".colContent-"+i+"").append('<div class="col-6 col-img img-'+i+'"><div class="overviewContent overview-'+i+'"></div></div>');
            $(".colContent-"+i+"").append('<div class="col-6"><div class="card-body one one-'+i+'"><span class="title-'+i+'"></span><span class="rating-'+i+'"></span><span class="date-'+i+'"></span></div></div>');
            $.each(value, function(ind, val) {
               

                /* __________Title (movie or tv)___________ */
                if(ind == "original_title"){
                    $(".title-"+i+"").append('<h5> Title: '+ val + '</h5>');
                   
                }if(ind == "original_name"){
                    $(".title-"+i+"").append('<h5> Title: '+ val + '</h5>');
                }


            
                /* __________DATE (movie or tv)___________ */
                if(ind == "first_air_date"){
                    $(".date-"+i+"").append('<p><b>First air Date</b>: '+ val + '</p>');
                }
                if(ind == "release_date"){
                    $(".date-"+i+"").append('<p><b>Release Date</b>: '+ val + '</p>');
                }

                
                
                /* __________DATA (movie and TV)___________ */
                if(ind == "vote_average"){
                    $(".rating-"+i+"").append('<p><b>Rating</b>: '+ val + '</p>');
                }
                if(ind == "overview"){
                   
                    $(".overview-"+i+"").append("<p class='card-text actors-" + i + "'><b style='font-size:19px;'>Overview: </b>"+val+"</p>");
                }
                if(ind == "poster_path" ){
                    if(val == null){
                        $(".img-"+i+"").append("<img class='card-img-top image-" + i + "' src='img/no_photo.jpg'>");
                    }else{
                     
                        $(".img-"+i+"").append("<img class='card-img-top image-" + i + "' src='https://image.tmdb.org/t/p/w500"+val+"'>");
                    }

                }
                
            });
            i++;            
        });
    });

});
