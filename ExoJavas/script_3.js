
let space = " "
let symbole = "#"

floors = prompt("How many floors do you want?");

function pyramid(floors) {
  for(let count = 1; count <= floors; count++){
    console.log(`${space.repeat(floors-count)}${symbole.repeat(count)}`);
  }
}

pyramid(floors);