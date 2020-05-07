/*
    PLEASE DONT'T DELTE 
    https://github.com/erkangcmn
    https://twitter.com/erkangcmn
    https://www.instagram.com/erkangcmn/
*/
$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        $(".firstRow").html("");
        $(".trending").html("");
    

        var clickItem = $(this).val();
        var newItem =$(this).val();
        var selectVal = $('.selectVal').val();
        var url = "https://api.themoviedb.org/3/search/"+selectVal+"?api_key=YOUR API KEY&query="+newItem;
    
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
        $(this).val("");
    }

   
});

$("button").click(function(){
    $(".firstRow").html("");
    $(".trending").html("");

    var clickItem = $("input[type = 'text']").val();
    var newItem =$("input[type = 'text']").val();
    var selectVal = $('.selectVal').val();
    var url = "https://api.themoviedb.org/3/search/"+selectVal+"?api_key=YOUR API KEY&query="+newItem;

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

                
                
                /* __________DATA (movie or tv)___________ */
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
    $("input[type = 'text']").val("");
});
