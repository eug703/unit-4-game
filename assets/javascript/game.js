var random_result;
var lost = "";
var win = "";


// random total you're supposed to guess is generated here then snet to result p tag in html
random_result = Math.floor(Math.random() * 101) + 19;
console.log(random_result);

$("#result").html("Random Result: " + random_result);
// for loop. the number here determines the number of crystal divs generated.
for(var i = 0; i < 4; i++){
   
    var random = Math.floor(Math.random() * 12);
    console.log(random);
   
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

     $(".crystals").append(crystal);
}
