/* la fonction calcDistance collecte les coordonnées des points 
A et B (a1 , b1, a2, b2).
Elle calcule ensuite le carré de l'hypoténuse (gr^ace à Math.hypot), 
ce qui permet de calculer la distance exacte entre 
les deux points A et B.
Il suffit de rentrer les coordonnées, dans le bon ordre, dans la 
parenthèse de console.log(calcDistance(a1 , a2, b1, b2))
*/

function calcDistance(a1, a2, b1, b2) {
    return Math.hypot(a2 - a1, b2 - b1);
}

console.log(calcDistance(-2, 2, 2,-2));



