let min = prompt("Please enter a minimum number");
let max = prompt("Please enter a maximum number");
let current = prompt("Please enter a third number between the two others");

if ((min < current) && (current < max)) {
    console.log(current);
} 

else if (min > max) { 
    alert('Minimum number is too big !');
}

else {
    alert('There might be a mistake !');
}

