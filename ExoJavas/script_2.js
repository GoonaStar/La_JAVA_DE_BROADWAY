


nb = prompt("De quel nombre veut tu calculer la factorielle ?");

function factorielle(nb) {
  let total = nb;
  while (nb > 1){
  total = total * (nb - 1);
 nb --
  }
  return total;
}

console.log(factorielle(nb));

	