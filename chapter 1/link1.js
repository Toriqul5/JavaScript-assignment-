// 1 // Here is the variable called carName, assign the value Volvo to it.

 let carName = "volvo" ; 
 console.log(carName)


 // 2 // 1st Variable Name, Then 2nd Variable Values & 3rd Variable Name And Values Both! 

 let firstName = "John";  
 let lastName = "Doe";  
 let age = 35 ;
 console.log(age)


// 3 // Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 
x = 10;
y = 5;
x = x*y
 console.log(x) 

 // 4 // Here is describe the correct data type

let length = 16; // number type. 
 let lastName = "Johnson"; // string type. 

 const x = {
   firstName: "John",  
   lastName: "Doe"
 };    // object type  




// 5 //  Execute the function named myFunction.
 
  function myFunction() {
     alert("Hello World!");
   }
  myFunction();
  

  // 6 // access the object to alert("John is 50").
 const person = {
     name:"john",
     age:50,
 }
 alert(person.name + "is" + person.age)



// 7 //The <button> element is "onclick"
{/* <button on click=""> Click me. </button>   */}


// 8 //  Alert the number of items in an array

 const cars = ["Volvo", "Jeep", "Mercedes"];
 alert(cars.length);

//Change the first item of Brand to "Ford".

	 const Brand = ["Volvo", "Jeep", "Mercedes"]; 
     Brand[0] = "Ford"
     alert(Brand)



// 9 //   Math method a random number.
    let random = Math.random();
    console.log(random)



 //  Math method to return the largest number of 10 and 20.
 let max = Math.max(10,20);
 console.log(max)

 //  Math method to get the square root of 9.
 let square = Math.sqrt(9);
 console.log(square)


 // 10 // comparison operator to alert true, when x is greater than y. 
 x = 10;
 y = 5;
 alert(x>y)


//ternary operator // 
let age = 18;
let message = age < 18 ? "Too young" : "Old enough";
alert(message)
