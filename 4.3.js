/*boxNumber va générer une box demandant à l'utilisateur de donner un nombre.
arr1 crée un tableau (vide dans un premier temps).

la fonction multiRand, se basant sur le nombre fourni par l'utilisateur, va
générer une boucle qui générera un nombre aléatoire (random10) et le poussera dans le
tableau arr1 autant de fois que demandé par l'utilisateur (boxNumber).
Elle stockera ces données dans le tableau arr1.

console.log permettra d'afficher le tableau contenant les différentes données
générées par la fonction multiRand.
*/

let boxNumber = Number(prompt("Give me a number"));
let arr1 = [];

function multiRand(boxNumber) {
    for (let i=0; i<boxNumber; i++){
        random10 = Math.floor(Math.random() * 10) + 1 ;
        arr1.push(random10);
    
    }
    return arr1
    
} 

console.log(multiRand(boxNumber));

 