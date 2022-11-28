function askTvSerie(){

let Name = prompt("Give me the name of your favorite TV Serie ?");
let Prod = prompt("What's the year of production of this serie ?");
let castMembers = prompt("What are the name of the cast members ? You can give several (with a coma between)");
    
let askTvSerie = {
    name: Name,
    prod: Prod,
    castMembers: castMembers,
  
}

console.log(askTvSerie);
}

askTvSerie();

