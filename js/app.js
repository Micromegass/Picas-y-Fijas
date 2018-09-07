//Pseudocode

// 1. Create random Number and save it variable
// 2. get value from textfield on hitting enter and save it to variable
// 3. save number in table 
// 4. if number is part of the number but not on the correct position 
//     4.1 then count Picas++
//     4.2 if not in the correct position then do not count it 
// 5. if number present and in the correct position count Fijas++
// 6. if number correct scale effect + ganaste
// 7. make it an endless game 

// Extra:
// 1. Restrict textfield to 4 numbers (change color of paragraph)
// 2. cannot be a number which repeats (3333)




// creating random number
$(document).ready(function() {

    var first = Math.floor(Math.random() * 9);
    var second = Math.floor(Math.random() * 9);
    var third = Math.floor(Math.random() * 9);
    var fourth = Math.floor(Math.random() * 9);

    var rand = [first, second, third, fourth];
    
    //shuffle until no repeating elements
    while ((rand[0] == rand[1]) || (rand[1] == rand[2]) || (rand[2] == rand[3]) || (rand[3] == rand[4]) ) {
     shuffle(rand); 
     return rand;
    } 

        console.log(rand);
        console.log(rand[0]);


});




//splitting input into array
$('#input').on('keypress', function(e) {
    if (e.which == 13) {
        var number = $(this).val();
        number = Array.from(number);
        var num = number.map(Number);
        console.log(num);
       }
});



//Fisher-Yates Algorithm to shuffle elements
function shuffle(array) {
    var i = 0,
        j = 0,
        temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}







var picas = 0;
var fijas = 0; 







