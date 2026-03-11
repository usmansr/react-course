function A_Maps_Practice() {
  /*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
  const nums = [1, 2, 3, 4, 5];
  // -->       [1, 4, 9, 16, 25]
  const squareNums = nums.map((num) => {
    return num * num;
  });

  console.log(squareNums);

  /*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

  const names = ["alice", "bob", "charlie", "danielle"];
  // -->        ["Alice", "Bob", "Charlie", "Danielle"]
  const capitalaizedNames = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
  });
  console.log(capitalaizedNames);

  /*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
  // -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
const wraps = pokemon.map((pokemon) => {
    return  "<p>" + pokemon + "</p>"
});
console.log(wraps);
}


A_Maps_Practice();
