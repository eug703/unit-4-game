var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function() {

            // empties the existing crystal divs so a new set can generate
            $(".crystals").empty();

            // random total you're supposed to guess is generated here then snet to result p tag in html
            random_result = Math.floor(Math.random() * 101) + 19;
            console.log(random_result);

            $("#result").html("Random Result: " + random_result);


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

                $(".crystals").append(crystal);
            }
            // end of for loop
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
console.log(previous);

    if(previous > random_result){
        lost--;
        console.log("You Lost");
        $("#lost").html("Losses: " + lost);
        previous = 0;
        resetAndStart();
    }

    else if( previous === random_result){
        win++;
        console.log("You Win");
        $("#win").html("Wins: " + win);
        previous = 0;
        resetAndStart();
    }

});

