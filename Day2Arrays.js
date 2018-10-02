var groceryList1 = ["apples", "carrots", "oatmeal"]
console.log (groceryList1)

var concatGroceryList = groceryList1.concat("granola")
console.log(concatGroceryList)

var grocerList2 = ["chips", "dip", "cookies"]
groceryList1.push("soda");
console.log(groceryList1);

var numbers1 = [1, 2, 3, 4, 5]
var numbers0 = [0];
var newNumbers1 = numbers0.concat(numbers1);

console.log(numbers1)
console.log(newNumbers1);

var numbers2 = [2, 4, 6, 8, 10]
numbers2.unshift(0);
console.log(numbers2);

var numbers3 = [2, 13, 6, 8, 4, 2]
console.log(numbers3.indexOf(2))

console.log(numbers3.lastIndexOf(2));

var chars = ["y", "a", "r", "r", "a"]
console.log(typeof(chars.toString()))
console.log(typeof(chars.join('')))

var charsReversed = chars.reverse();
console.log(charsReversed);


// GITHUB ARRAY PRACTICE

console.log(charsReversed.join("-"))

console.log(charsReversed.join(""))
