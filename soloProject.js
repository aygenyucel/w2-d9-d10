// JS Basics

const { ConstructionOutlined } = require("@mui/icons-material");
const { getDisplayName } = require("@mui/utils");
const { Console } = require("console");
const { getRandomValues } = require("crypto");

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/

console.log("\n----------------------EXERCISE A----------------------");

let test = "testString";

console.log(test);

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/

console.log("\n----------------------EXERCISE B----------------------");

let sum = 0;

for (let i = 10; i <= 20; i++) {
  sum += i;
}

// function sumAll(min, max) {
//   return ((max - min + 1) * (min + max)) / 2;
// }

// sum = sumAll(10, 20);

console.log("sum:", sum);

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/

console.log("\n----------------------EXERCISE C----------------------");

let random = Math.random() * 20;

console.log("Random number between 0 and 20:", random);

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/

console.log("\n----------------------EXERCISE D----------------------");

let me = {
  name: "aygen",
  surname: "yucel",
  age: "24",
};

console.log("oject me:", me);

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/

console.log("\n----------------------EXERCISE E----------------------");

delete me.age;
//delete me["age"];

console.log("object me after deleting age:", me);

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/

console.log("\n----------------------EXERCISE F----------------------");

let skills = ["html", "css", "javascript", "react"];

me.skills = skills;

console.log("object me after adding skills array:", me);

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

console.log("\n----------------------EXERCISE G----------------------");

me.skills.pop();

console.log(
  "Object me after deleting the last skills from skills property:",
  me
);

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/

console.log("\n----------------------EXERCISE 1----------------------");

function dice() {
  return Math.floor(Math.random() * 6 + 1);
}

console.log(dice());

// // Another sample: between 6 and 14 (include)
// let sample = Math.floor(Math.random() * 9 + 6);

// console.log("integer number between 6 and 14:", sample);

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/

console.log("\n----------------------EXERCISE 2----------------------");

function whoIsBigger(number1, number2) {
  if (number1 > number2) {
    return number1;
  }
  return number2;
}

console.log("whoIsBigger function exp number 8 and 16:", whoIsBigger(8, 16));

/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/

console.log("\n----------------------EXERCISE 3----------------------");

function splitMe(str) {
  let words = str.split(" ");

  //Capitalizing the first letter of all words
  for (let i = 0; i < words.length; i++) {
    let capitalizedWord = "";
    capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = capitalizedWord;
  }

  return words;
}

console.log("splitMe exp:", splitMe("I love coding"));

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

console.log("\n----------------------EXERCISE 4----------------------");

function deleteOne(s, b) {
  if (b === true) {
    return s.slice(1);
    //s.shift();
  } else {
    let strSplit = s.split("");
    strSplit.pop();
    s = strSplit.join("");
    return s;
  }
}

console.log("deleteOne function exp:", deleteOne("Coding example", true));

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/

console.log("\n----------------------EXERCISE 5----------------------xx");

function onlyLetters(str) {
  str = str.replace(/[0-9]/g, "");
  return str;
}

console.log(onlyLetters("I have 4 dogs"));

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/

console.log("\n----------------------EXERCISE 6----------------------");

function isThisAnEmail(x) {
  var re = /\S+@\S+\.\S+/; //!!!!!! regular expression !!!!!!
  return re.test(x);
}

console.log("check if it's email or not:", isThisAnEmail("gfjkhgsdj@fghr.co"));

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/

console.log("\n----------------------EXERCISE 7----------------------");

function whatDayIsIt() {
  var days = ["Sun", "Mon", "Tues", "Wed", "Thrus", "Fri", "Sat"];
  let currentDate = new Date();
  let dayNumber = currentDate.getDay();
  return days[dayNumber];
}

console.log("what day is it:", whatDayIsIt());

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/

console.log("\n----------------------EXERCISE 8----------------------");

function rollTheDices(num) {
  let diceSum = 0;
  let diceValues = [];
  for (let i = 0; i < num; i++) {
    let val = dice();
    diceValues.push(val);
    diceSum += val;
  }
  let rollTheDicesObject = { sum: diceSum, values: diceValues };
  return rollTheDicesObject;
}

console.log("rollTheDices function exp:", rollTheDices(3));

/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/

console.log("\n----------------------EXERCISE 9----------------------");

//the date parameter must be in yy-mm-dd format!
function howManyDays(date) {
  //first we need to find current date
  let currentDate = new Date();

  date = new Date(date);

  // To calculate the no. of days between two dates

  var differenceDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));

  return differenceDays;
}

console.log("howManyDays exp", howManyDays("2022-10-01"));

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/

console.log("\n----------------------EXERCISE 10----------------------");

function isTodayMyBirthday() {
  let date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; //the months starts from 0(january:0, february:1) so we add +1
  if (day === 12 && month === 1) {
    return true;
  } else {
    return false;
  }
}
console.log("is today my birthday?", isTodayMyBirthday());

// JS Arrays & Objects

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },

  {
    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },

  {
    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/
console.log("\n----------------------EXERCISE 11----------------------");

function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}

console.log(
  "deleteProp exp:",
  deleteProp({ name: "aygen", surname: "yucel" }, "surname")
);

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/

console.log("\n----------------------EXERCISE 12----------------------");

function oldestMovie() {
  let oldestYear = movies[0].Year;
  let movieIndex = 0;
  for (let i = 0; i < movies.length - 1; i++) {
    if (movies[i + 1].Year < oldestYear) {
      oldestYear === movies[i + 1].Year;
      movieIndex = [i + 1];
    }
  }
  console.log(
    "oldest movie is:",
    movies[movieIndex].Title,
    "\nyear:",
    movies[movieIndex].Year
  );
}

oldestMovie();

/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/

console.log("\n----------------------EXERCISE 13----------------------");

function countMovies() {
  let count = 0;
  for (let movie of movies) {
    count++;
  }
  return count;
}

console.log("Count of movies:", countMovies());

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/

console.log("\n----------------------EXERCISE 14----------------------");

function onlyTheTitles() {
  let movieTitle = [];
  for (let movie of movies) {
    movieTitle.push(movie.Title);
  }
  return movieTitle;
}
console.log("title of movies array:", onlyTheTitles());

/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/

console.log("\n----------------------EXERCISE 15----------------------");

function onlyInThisMillennium() {
  let thisMillennium = [];
  for (let movie of movies) {
    if (movie.Year >= 2000) {
      thisMillennium.push(movie);
    }
  }
  return thisMillennium;
}
console.log("only this millenium movies:", onlyInThisMillennium());

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/

console.log("\n----------------------EXERCISE 16----------------------");

function getMovieById(id) {
  for (let movie of movies) {
    if (movie.imdbID === id) {
      return movie;
    }
  }
  return "this id doesn't exist!";
}

console.log("Get movie by its id:", getMovieById("tt2395427"));

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/

console.log("\n----------------------EXERCISE 17----------------------");

function sumAllTheYears() {
  let sum = 0;
  for (let movie of movies) {
    sum += movie.Year;
  }
  return sum;
}

console.log("Sum of years of all movies: ", sumAllTheYears());

/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/

console.log("\n----------------------EXERCISE 18----------------------");

function searchByTitle(str) {
  let arr = [];
  for (let movie of movies) {
    let title = movie.Title;
    if (title.includes(str)) {
      arr.push(movie);
    }
  }
  return arr;
}

console.log(searchByTitle("Avengers"));

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/

console.log("\n----------------------EXERCISE 19----------------------?????");

// function searchAndDivide(str){
//     let match = [];
// }

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/

console.log("\n----------------------EXERCISE 20----------------------");

function removeIndex(number) {
  let newMovies = movies;
  newMovies.splice(number - 1, 1);
  return newMovies;
}
console.log("removeIndex example:", removeIndex(2));

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/

/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****

*/

/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/

/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */
