/* random10 est une fonction utilisant la fonction Math.random (renvoyant 
un nombre compris dans l'interval de 0 à 1 - 1 en étant exclus) et multiplie
le nombre 11 afin d'obtenir un nombre aléatoire compris entre 0 et 10 gr^ace
à la fonction Math.floor (qui renvoie le plus grand nombre entier inférieur
ou égal à une valeur donnée). Le résultat de Random10 est alors affiché dans 
une alert box.
*/


let random10 = Math.floor(Math.random() * 11);

alert(random10);