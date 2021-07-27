/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

const { totalCars } = require("./hm")

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

function ex1() {
    const myArray = [1, 2, 3, 4, 5]
    return myArray
 }
 
 /* EXERCISE 2
 Create an object "myObject" containing exactly your "name", "surname", "email", "address" and "age".
 */
 
 const myObject = {
   name: "Dovile",
   surname: "Tumaite",
   email: "dovile.tumaite@yahoo.it",
   address: "Via Emilia 7",
   age: 25, 
 }
 
 /* EXERCISE 3
 Add to the previously created object a boolean value to rappresent wheter you have or not a driving license. Call it "hasDrivingLicense"
 */
 myObject.hasDrivingLicense = true
 /* EXERCISE 4
 Remove from the previously created object the age property.
 */
 delete myObject.age
 console.log(myObject)
 /* EXERCISE 5
 Create another object called "anotherObject" with name, surname, email address and verify that this object has a different email address than the previous one.
 */
 
 const anotherObject = {
   name: "Dovile",
   surname: "Tumaite",
   email: "dovile.tumaite@yahoo.it",
   address: "Via Emilia 7",
 }
 let findTheDifference = (anotherObject.address === myObject.address)
 console.log(findTheDifference)
 /* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
 */
const totalShoppingCart = 100
 function ex6() {

   if (totalShoppingCart <= 50)
   totalShoppingCart += 10

 }
 
 console.log(ex6(totalShoppingCart)) // expected free shipping if totalShoppingCart is higher than 50.
 
 
 /* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
 */
 
 function ex7(){
   // return

 let discount = totalShoppingCart * 0.2 
   totalShoppingCartFriday = totalShoppingCart - discount
 }
 console.log(ex7()) // expected 20% discount and free shipping if discounted price is higher than 50. Other wise, 20% discounted price and +10$ of shipping charged.
 
 /* EXERCISE 8
 Create an object representing a car with properties like "brand", "model", "licensePlate".
 After you create the first car, clone it 5 times and change the "licensePlate" for each cloned car without affecting the original one.
 */
 
 const car = {
   brand: "Ferrari",
   model: "Testa Rossa",
   licensePlate: "AB123CD",
 }
 /* wrong way: 
 let car1 = {}
 let car2 = {}
 let car3 = {}
 let car4 = {}
 let car5 = {}
 
 car1.licensePlate = "SD345FG"
 car2.licensePlate = "SD395FG"
 car3.licensePlate = "SD345FG"
 car4.licensePlate = "SD342FG"
 car5.licensePlate = "SD945FG"
 Object.assign (car1, car2, car3, car4, car5, car)
 console.log(car1, car2, car3, car4, car5)
 */
 
 let car1 = {
   brand: "Toyota",
   model: "Yaris",
   licensePlate: "AGSHDHKJ"
 }

 let car2 = {
   ...car1,
   licensePlate: "Whatever1"
 }

 let car3 = {
   ...car1,
   licensePlate: "Whatever2"
 }

 let car4 = {
   ...car1,
   licensePlate: "Whatever3"
 }

 let car5 = {
   ...car1,
   licensePlate: "Whatever4"
 }

 console.log(car1, car2, car3, car4, car5)
 
 /* EXERCISE 9
 Create a new array called "carsForRent" containing all the cars from the previous exercise.
 */
 
 const carsForRent = [
  car1, car2, car3, car4, car5
 ]
 
 /* WRITE YOUR CODE HERE */
 
 /* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
 */
 
carsForRent.pop()
 carsForRent.shift()
 console.log("removed cars from the array", carsForRent)
 /* EXERCISE 11
 Print in the console the TYPES of the car variable, of its licensePlate and brand properties.
 */
 console.log("console the types:", car.brand, car.model, car.licensePlate)
 /* WRITE YOUR CODE HERE */
 
 /* EXERCISE 12
 Create a new array called carsForSale and insert 3 cars in it.
 Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
 */
 
 const carsForSale = [
    car6 = {
     brand: "Fiat",
   model: "rgh",
   licensePlate: "AU123CD",
   },
      car7 = {
     brand: "Audi",
   model: "osf",
   licensePlate: "AT123CD",
   },
     car8 = {
     brand: "Pegeout",
   model: "pyt",
   licensePlate: "QB123CD",
   },
 ]
 totalCarsForSale = carsForSale.length
 console.log(totalCarsForSale)
 totalCarsForRent = carsForRent.length
 let totalCarsg = totalCarsForRent + totalCarsForSale

 console.log("total cars:", totalCarsg)
 
 /* EXERCISE 13
 Print in the console the data from each car in the carsForSale array.
 */
 console.log(carsForSale[0].licensePlate)
 console.log(carsForSale[2].model)

 module.exports = {
   ex1,
   myObject,
   anotherObject,
   ex6,
   ex7,
   carsForRent,
   carsForSale,
   totalCars
 }