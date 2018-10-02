// // IF/ELSE Statements
//
// // Write function greaterNum
// // 1) takes x and y
// // 2) if x is greater than y return x
// // 2.5) if else return y
// // 3) else x === y return same value
//
// function greaterNum (x , y) {
// if (x > y) {
//   return x
//   } else if (y > x) {
//     return y
//   } else {
//     return "Numbers are same value";
//   }
// }
//
// console.log(greaterNum(22, 55));
// console.log(greaterNum(2, 2));
// console.log(greaterNum(44, 3));
//
// //The World Translator
//
// // write a function named helloWorld
// // 1) Takes a language code,
// // 2) if english return "hello world"
// // 3) if spanish return "spanish"
// // 4) if thai return "thai"
// // 2) Defaults to english.
//
// var english = "Hello World";
// var spanish = "Hola, Mundo";
// var japanese = "Konnichiwa, Sekai";
//
// function helloWorld (lang) {
//   if (lang == "en") {
//     return english;
//   } else if (lang == "es") {
//     return spanish;
//   } else if (lang == "js") {
//     return japanese;
//   } else {
//     return english;
//   }
// }
//
// console.log(helloWorld("en"))
// console.log(helloWorld("es"))
// console.log(helloWorld("js"))
// console.log(helloWorld("dskfadjfkld"))
//
//
// // The Grade Assigner
// // write function assignGrade
// // takes a number assignment returns grade
// // if >90 return A
// // if 80-90 rturn b
// // if 70-80 return case c
// // if 60-70 return d
// // else FAULURE!!!
//
// function assignGrade (score) {
//   if (score >= 90) {
//     return "You scored an A!"
//   } else if (score >= 80) {
//     return "You scored a B!"
//   } else if (score >= 70) {
//     return "You scored a C."
//   } else if (score >= 60) {
//     return "You scored a D..."
//   } else {
//     return "You are a Failure!"
//   }
// }
//
// console.log(assignGrade(102));
// console.log(assignGrade(89));
// console.log(assignGrade(70));
// console.log(assignGrade(65.3));
// console.log(assignGrade(2));
//
// -----------------------
//
//
//
//
// //the Pluralizer
// //create a function called pluralize.
// // 1. takes 2 arguments, noun number.
// // 2. if number > 1 return number + " " + noun + "s"
//
// function pluralizer(number, noun) {
  if (number > 1) {
    if (noun == "goose") {
      return number + " " + "geese"
    } else if (noun == "child") {
      return number + " " + "children"
    }  return number + " " + noun + "s";
  } else {
    return number + " " + noun;
  }
}
//
// ALTERNATE //
function pluralizer(number, noun) {
  if (number > 1 && noun == "goose") {
      return number + " " + "geese"
  } else if (number > 1 && noun == "child") {
      return number + " " + "children"
  } else if (number > 1 && noun == "mouse") {
      return number + " " + "mice"
  } else if (number > 1) {
      return number + " " + noun + "s";
  } else {
      return number + " " + noun;
  }
}

console.log(pluralizer(3, "dog"));
console.log(pluralizer(1, "pig"));
console.log(pluralizer(20, "penguin"));
console.log(pluralizer(1, "goose"));
console.log(pluralizer(2, "goose"));
console.log(pluralizer(1, "child"));
console.log(pluralizer(10, "child"));

// Extra Credit

// // MARCO POLO EXERCISE
// function marco () {
//   console.log("Polo")
// }
//
// marco()
//
// // greater
// function greeter(name) {
//   console.log(name + " hello!")
// }
//
// greeter("Julianne")
// greeter("Eric")
//
// // oddOrEven
//
// function oddOrEven (number) {
//   if (number % 2 === 0) {
//     console.log ("Number is even.")
//   }  else if (number % 2 === 1) {
//       console.log ("Number is odd.")
//   } else {
//     console.log ("Not a whole number.")
//   }
// }
//
// oddOrEven(4)
// oddOrEven(2)
// oddOrEven(1)
// oddOrEven(4.4)
//
// // triple
//
// function triple(number) {
//   console.log(number*3)
// }
//
// triple(222)
//
// //multiply
//
// function multiply(x,y) {
//   console.log(x*y);
// }
//
// multiply(222,3);
//
// // divisibleBy
//
function divisibleBy(x, y) {
  if (x % y === 0) {
    console.log(x + " is evenly divisable by " + y + ".")
  } else {
    console.log (x + " is NOT evenly divisable by " + y + ". The remainder is " + x % y + ".")
  }
}
divisibleBy(3,3)
divisibleBy(3,2)
divisibleBy(34,17)
divisibleBy(4,17)

// //
//
// var product = {
//     name: "chair",
//     price: 14.99
// };
//
// function describeProduct (item) {
//   console.log("The product is a " + item.name + ". It costs $" + item.price + "." );
// }
// describeProduct(product);


var product = {
  name: "OledMonitor",
  price: 300.00
}

var budget = 375.00

function message(myProduct, inBudget) {
  if(inBudget) {
    return product.name + " is within budget"
  } else {
    return product.name + " is beyond budget"
  }
}


function checkBudget(myProduct, myBudget) {
  if (myBudget >= myProduct.price) {
    return message(myProduct, "inBudget");
  } else {
    return message(myProduct, false)
  }
}


console.log(checkBudget(product, budget));
