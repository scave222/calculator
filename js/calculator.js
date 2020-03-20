const txtResult = document.getElementById('display');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');

const button = document.getElementsByClassName('button');


button1.addEventListener('click', operator);
button2.addEventListener('click', operator);
button3.addEventListener('click', operator);
button4.addEventListener('click', operator);
button5.addEventListener('click', operator);

function operator(e){
    // Study more on elements event object consider MDN or W3School
//    console.log(e.target.value);
   let result = 0;
   let num1 = parseInt(input1.value);
   let num2 =  parseInt(input2.value);

   let operators = e.target.value;
    if(operators == "+"){
        result = num1 + num2;
    } else if(operators === "-"){
        result = num1 - num2;

    } else if(operators == "/"){
        if(num2 === 0){
            result = "Sorry you cannot divide a number by zero";
        } else {
            result = num1 / num2;
        }    
    } else if (operators == "*"){
        result = num1 * num2;

    } else if (operators == "%"){
        result = num1 % num2;
    }

    txtResult.value = result;
}