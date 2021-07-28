/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

const myArray = [1,3,5]
 for (let i = 0; i < myArray.length / 2; i ++ ) {
       let temp = myArray[i]
       myArray[i] = myArray[myArray.length - i - 1]
       myArray[myArray.length - i - 1 ] = temp
   }
  

function ex1() {
  
}

console.log(ex1(myArray)) //expected: [5,3,1]



/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

let array = [1, 34, 65, -79, 947, 7564, 23, 1, 75 ,234, -43890]
let maxVal = array[0]
for (let i = 1; i < array.length; i ++ )
 if (array[i]> maxVal){
    maxVal = maxArray[i]
 }
console.log("the max value of my array is", maxArray)
function ex2(array) {
  // return 
}

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/
let array2 = [1, 34, 65, -79, 947, 7564, 23, 1, 75 ,234, -43890]
let minVal = array2[0]
for (let i = 1; i < array2.length; i ++ )
if (array2[i]> minVal) {
    minVal = minArray[i]
}
console.log("the min value of my array is", minArray)
function ex3(array){
  // return 
}

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
let mixedArray = [1, 56, 56, "string", {name: "Rudolf", surname: "Beppino"}, 97]
let acc = []
 for (let i = 0; i < mixedArray.length; i ++) {
   if ( typeof mixedArray [i] === "number" && mixedArray[i]%2 === 1)
   acc.push(mixedArray[i])
}

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

function ex5(array) {
  // return 
}

let mixedArray = [1, 56, 56, "string", {name: "Rudolf", surname: "Beppino"}, 97]

function ex4(array){
  for (let i = 0; i < mixedArray.length; i ++){
  if (typeof mixedArray[i] === "number" && mixedArray [i]%2 === 1){
    mixedArray.splice(i,1)
    i--
  }
}
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

function ex6(string){

  // return 
}
let string = "gwsdadikjfakfdaòf"
let result = ""
 for (let i = 0; i < string.length; i++) {
   switch (string[i]) {
     case "a": 
     case "e":
      case "i":
        case "o":
          case "u":
            break;
            result += string[i]
   }
 }
/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

function ex7(array){
  
  let increasedArray = [1, 56, "tino", 56, 97, "cat", 5, true, 34, 90]
  
   for (let i = 0; i < increasedArray.length; i ++) {
     if ( typeof increasedArray [i] === "number")
     increasedArray [i] ++
  }

}


/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

function ex8(array){
  let anotherArray =["strive", "is", "great"]
  for ( let i = 0; i < anotherArray.length; i ++)
  anotherArray[i] = anotherArray[i].length
 }


/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/

module.exports = {
  ex1,ex2,ex3,ex4,ex5,ex6,ex7,ex8
}