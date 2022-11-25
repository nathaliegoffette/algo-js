/* In this function, length take the input of the prompt ("give me the length 
of the rectangle"), width take the input of the prompt ("give me the width of 
the rectangle").
The function surfaceCalc multiply length with width.
The result of this function is than displayed on the console.log
*/

let length=Number(prompt("Give me the length of the rectangle"));
let width=Number(prompt("Give me the width of the rectangle"));

let surfaceCalc = (length, width) => {
    return length * width;
}

console.log(surfaceCalc(length, width));
