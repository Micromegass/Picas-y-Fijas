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



var correct = Math.floor(Math.random() * 9999);
var picas = 0;
var fijas = 0; 


$("#input").on('keypress', function(e) {

    if (e.which == 13) {

       var number = $(this).val()
    
        console.log(number);

    } else {

        console.log(correct)

    };
 });
 







