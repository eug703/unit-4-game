var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function() {

            // empties the existing crystal divs so a new set can generate
            $(".crystals").empty();
           
            // images
            var images = [
                "https://media3.giphy.com/media/N1pMn2QOtG8Q8/giphy.gif", 
                "https://media3.giphy.com/media/N1pMn2QOtG8Q8/giphy.gif", 
                "https://media3.giphy.com/media/N1pMn2QOtG8Q8/giphy.gif", 
                "https://media3.giphy.com/media/N1pMn2QOtG8Q8/giphy.gif"
        
            ];


            // random total you're supposed to guess is generated here then snet to result p tag in html
            random_result = Math.floor(Math.random() * 101) + 19;
            console.log(random_result);

            $("#result").html("Count to this number : " + random_result);


            // for loop. the number here determines the number of crystal divs generated.
            for(var i = 0; i < 4; i++){
            
                var random = Math.floor(Math.random() * 11) + 1;
                console.log(random);
                // the random function in var random is written as *11)+1 to exclude generating zeroes
            
                var crystal = $("<div>");
                    crystal.attr({
                        "class": 'crystal',
                        "data-random": random
                    });

                    crystal.css({
                        "background-image": "url('" + images[i] + "')",
                        "background-size": "cover"

                    });


                    // This shows the crystal's value while coding to make things easier. Comment out after.
                    crystal.html(random);

                $(".crystals").append(crystal);
            }
            // end of for loop

            $("#previous").html("Your running total: " + previous +" ah ah ah");
}


// start of the guts
// runs the game function
resetAndStart();

// This is called event delegation, read more into it and why its important for later
$(document).on("click", ".crystal", function() {



// $(".crystal").on("click", function () {
    var num = parseInt($(this).attr("data-random"));
    // console.log(num);
    // calls the data-random attribute of the var crystal which contains the randomly generated number for the gem
   
    previous += num;
    $("#previous").html("Your running total: " + previous +" ah ah ah");
    console.log(previous);



    if(previous > random_result){
        lost--;
        console.log("You Lost");
        $("#lost").html(lost);
        previous = 0;
        resetAndStart();
    }

    else if( previous === random_result){
        win++;
        console.log("You Win");
        $("#win").html(win);
        previous = 0;
        resetAndStart();
    }

});

