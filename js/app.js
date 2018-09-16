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

// Conditions:
// 1. Restrict textfield to 4 numbers (change color of paragraph)
// 2. cannot be a number which repeats (3333)


// creating random number and hiding table



$(document).ready(function () {

    //containers for numbers
    randNum2 = null;
    rand = [];

    //initializing game
    game();

    //creating, shuffling array and pushing to containers to make global 
    function game() {
        $('.result').hide();
        //create array
        var rand0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        //shuffle array 
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }


        //take out first 4 shuffled numbers
        var randNum = shuffleArray(rand0).slice(0, 4);

        //pushing shuffled array, first 4 numbers to global variable rand
        for (i = 0; i < randNum.length; i++) {
            rand.push(randNum[i]);
        }

        //outputing array as number
        randNum2 = randNum.join('');
        console.log(randNum2);

    }

    // making infinite game 
    $('button').on('click', function () {
        $('input').removeClass('scale');
        location.reload(true)
    });


    //splitting input into array and blocking input if number longer than 4 digits or repeating numbers
    $('#input').on('keypress', function (e) {
        if (e.which == 13) {
            var number = $(this).val();

            //wining
            if (randNum2 == number) {
                $(this).addClass('scale');
                $('.result').show();

                //otherwise errorchecking
            } else {

                //transform number to array and check for duplicates
                number = Array.from(number);
                duplicates = duplicates(number);

                if ((number.length > 4) || (number.length < 4) || (duplicates == true)) {
                    $('#errorcheck').addClass("color");

                    //when no errors transform back to number
                } else {
                    $('#errorcheck').removeClass("color");
                    var num = number.map(Number);
                    console.log(num.join(''));


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
                    //Subtract fijas // end loop to determine fijas
                    picas = picas - fijas;

                    //append picas and fijas
                    $('table').append('<tr><td>' + num.join('') + '</td>' + '<td>' + picas + '</td>' + '<td>' + fijas + '</td></tr>');

                }
            }
        }

        //check for duplicates
        function duplicates(array) {
            for (var i = 0; i < array.length; i++) {
                for (var j = i + 1; j < array.length; j++) {
                    if (array[i] === array[j]) {
                        return true;
                    }
                }
            }
        }
        //end duplicate

    }); //end of keypress function

}); //end of document ready
