const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


console.log("Les gens nés en dans l'années 70 sont");
console.log(entrepreneurs.filter(a => a.year >= '1970' && a.year < '1979'));

console.log("Les noms des entrepreneurs sont");
fullNames =  entrepreneurs.map( entrepreneurs => `${ entrepreneurs.first} ${ entrepreneurs.last}`);
console.log(fullNames);


console.log("Voici les Ages des Entrepreneurs");
ages =  entrepreneurs.map( entrepreneurs => `${ entrepreneurs.first} ${ entrepreneurs.last}: ${ 2019 - entrepreneurs.year} years old`);
console.log(ages);

alpha = fullNames.sort( entrepreneurs => `${ entrepreneurs.last}`)
console.log(alpha);


entrepreneurs.sort(function(a, b){
  var nameA=a.last, nameB=b.last
  if (nameA < nameB)
      return -1 
  if (nameA > nameB)
      return 1
  return 0
});


console.log("Voici la liste des entrepreneurs");
console.log(entrepreneurs);