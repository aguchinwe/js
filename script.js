document.querySelector('.dice').style.display = 'none';
document.querySelector('#spin').style.display = 'none';

var generated = document.querySelector('#span');
generated.textContent = ' ';

 var input = document.querySelector('.input').value;
 var input_1 = document.querySelector('.input-1').value;
 var inputG = input + ' ' + input_1;

    //function declaration for the number input
// function numberInput(input){
//   document.querySelector('.dice').style.display = 'none';
//         var roll = 0;
//         //random generate the numbers
//         var turn = Math.floor(Math.random() * 6) + 1;
      
//         var dicer = document.querySelector('.dice');
//          //dicer.style.display = 'block';
//          dicer.src = './images/dice-' + turn + '.jpg';

//          roll += turn;

//          input = roll;
//          return input;        
// }


 
//function declaration for color
//   var color = ['red', 'black'];
// function colorInput(input_1){
//   //random generate the colors
//  input_1 = color[Math.floor(Math.random() * color.length)];

//  return input_1;
// }


function between(input, min, max){
  return input >=  min && input <= max;
}


//get the input from user
document.querySelector('#submit').addEventListener('click', function(){
        var input = document.querySelector('.input').value;
        var input_1 = document.querySelector('.input-1').value;
        var inputG = input + ' ' + input_1;
        var response = document.querySelector('.empty-1');
          response.innerHTML = inputG;
        var color = ['red', 'black'];  
         if(input == '' && input_1 == ''){
            alert('this cant be empty');

        } else if(Number(input) && !Number(input_1)){ 
         
            if( between(input, 1, 6)  && color.includes(input_1)){
              
              document.querySelector('#spin').style.display = 'block';
                
                
                     //input = roll;
      
                document.querySelector('#spin').addEventListener('click', function(){
                 var roll = 0;
                        //random generate the numbers
                  var turn = Math.floor(Math.random() * 6) + 1;
                      
                     roll += turn;
                     //input = roll;
                      var dicer = document.querySelector('.dice');       
                  dicer.style.display = 'block';
                         //connect the spin to the dice
                         dicer.src = './images/dice-' + turn + '.jpg';

                         var color = ['red', 'black'];
                         //function colorInput(input_1){
                           //random generate the colors
                          randomColor = color[Math.floor(Math.random() * color.length)];
                         
                         // return input_1;
                        // }
                         
                        //colorInput(input_1);
                        generated = roll + ' ' + randomColor;
                        document.querySelector('#span').textContent = generated;
                        //console.log(generated)
                        // if(input == roll){
                        //     console.log('whoops');
                        //  }  else{
                        //    console.log('wheew');
                        //  }      
                         if(input == roll && input_1 == randomColor){
                          document.querySelector('.result').textContent = 'congrats you won';
                       }  else{
                        document.querySelector('.result').textContent = 'please try again';
                       }        
                });
               
            }
            
            else{
              alert('Oops!!! you filled the wrong details')
            }
                   document.querySelector('.input').value = '';
                    document.querySelector('.input-1').value = '';

       }
       
       else{
            alert('please choose a number and a color');
        };




  localStorage.clear(); 
  localStorage.setItem('input', input);
  localStorage.setItem('input_1', input_1);
  //localStorage.getItem('input');
  //localStorage.getItem('input_1');
  // if(localStorage.getItem(input) != numberInput(input) && localStorage.getItem(input_1) != colorInput(input_1)){
  //   //console.log('try again');
  // }  else{
  //   console.log('winner');
  // }  
        
});


//localStorage.setItem('input_1', 'input_1.value');
 
// function result(){
//   if(input === numberInput(input) && input_1 === colorInput(input_1)){
//    console.log('winner!!!');
// }else {
//   console.log('you have tried, try again');
// }
// result();
// }

// if(generated === inputG){
//           console.log('winner');
//          }else{
//            console.log('try again');
//          }


//check if the input from user is equall to the generated number
//if(turn === input.value){
   // window.alert('WINNER!!! YOUR BET IS GOOD.')
//}
//if yes then write winner,if no then write loser


/**
 * This handles the range
 */

// function range(start, count) {
//     return Array.apply(0, Array(count))
//       .map((element, index) => index + start);
//   }
 // console.log(range(color))



