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

     $('.result').hide();

     //create array
     var rand = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
     rand = shuffleArray(rand).slice(0, 4).join('');
     console.log(rand);

    
    
    //splitting input into array and blocking input if number longer than 4 digits or repeating numbers
    $('#input').on('keypress', function (e) {
        if (e.which == 13) {
            var number = $(this).val();

            if (rand == number) {
                $(this).addClass('scale');
                $('.result').show();
                
                $('button').on('click', function () {
                    $('input').removeClass('scale');
                });


            } else {

                number = Array.from(number);
                duplicates = duplicates(number);
                
                if ((number.length > 4) || (number.length < 4) || (duplicates == true)) {
                    $('#errorcheck').addClass("color");

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


