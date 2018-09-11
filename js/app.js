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


// creating random number and hiding table
$(document).ready(function () {

    var first = Math.floor(Math.random() * 9);
    var second = Math.floor(Math.random() * 9);
    var third = Math.floor(Math.random() * 9);
    var fourth = Math.floor(Math.random() * 9);

    var rand = [first, second, third, fourth];

    //shuffle until no repeating elements with Fisher-Yates
    while ((rand[0] == rand[1]) || (rand[1] == rand[2]) || (rand[2] == rand[3]) || (rand[3] == rand[4])) {
        shuffle(rand);
        return rand;
    }
    console.log(rand.join(''));



    //splitting input into array and blocking input if number longer than 4 digits or repeating numbers
    $('#input').on('keypress', function (e) {
        if (e.which == 13) {
            var number = $(this).val();

            if (rand.join('') == number) {
                alert('you win');
            } else {

                number = Array.from(number);
                if (((number.length > 4) || (number[0] == number[1]) || (number[1] == number[2]) || (number[2] == number[3]) || (number[3] == number[4]))) {

                    $('#errorcheck').addClass("color");

                } else {
                    $('#errorcheck').removeClass("color");
                    var num = number.map(Number);
                    console.log(num.join(''));

                    $('table').append('<tr><td>' + num.join('') + '</tr> </td>');


                    //loop to determine picas
                    var picas = 0;
                    for (i = 0; i < number.length; i++) {
                        for (j = 0; j < rand.length; j++) {

                            if ((number[i] == rand[j])) {
                                picas = picas + 1;
                            }
                        }
                    }
                    //end loop to determine picas



                    //loop to determine fijas
                    var fijas = 0;
                    for (i = 0; i < number.length; i++) {
                        if (number[i] == rand[i]) {
                            fijas = fijas + 1;
                        }
                    }

                    picas = picas - fijas;
                    alert(picas);
                    //  alert(fijas);
                    // end loop to determine fijas

                }

            }
        }
    });




    //Fisher-Yates Algorithm to shuffle elements
    function shuffle(array) {
        var m = array.length,
            t, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }



});



