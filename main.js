/* Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. You can assume that words in the input string will be separated by only one space.

Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that words in the input string will be separated by only one space. */


function letterCapitalize(str){
  var c = []; // each character
  var seperate = str.split(" ");
  for(var i =0; i<seperate.length; i++){
    c.push(seperate[i][0].toUpperCase()+seperate[i].slice(1))
  }
  return c.join(" ");
}
console.log(letterCapitalize("hi my name is anthony"));


function WordCount(str) {
  var counter = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i] == " ") { // if a space is found in str
      counter++; // add 1 to total so far
  }
}
  counter++;
  return counter; // add 1 to counter to account for extra space since 1 space = 2 words
}

console.log(WordCount("hi my name is anthony"));
