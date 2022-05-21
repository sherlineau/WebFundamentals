// what is a variable ?
// Something that stores data

//Make me a variable called name and put your name as the value
var name = "Sherline";
//make sure storing proper data type into your variable, string needs ""

//Make me a variable called age and put your age as the value
var age = 25;

//pretend its your birthday and add 1 to your age
//option 1 age = age + 1;
// option 2 a+=1;
//option 3 age++;  only works for adding 1

age++;


//make me a variable called isStudent and set value to true
var isStudent = true;
//True is NOT in quotation marks
// True is NOT spelled with capital T -> lowercase same with false


//what do we call the variable type I just had you make?
//Boolean


// what is a conditional statement and why are they handy?
// Condition Statements are if/else statements, while
// check for a certain outcome, and if that outcome is true then perform an action
// conditional statements are good for only running certain actions when you want them to
// ex: if health = 0 then show a game over screen


//Write me a conditional statement that checks if your age is under 25. if it is print " wow, you're pretty young!" if not age = wisdom

if( age < 25) {
    console.log("Wow, you're pretty young!");
} else {
    console.log ("Age = wisdom");
}
// else means in ALL OTHER CASES which means we DON'T need a condition

//Write me a conditional statement that checks if you are a student.  If you are, print "Good on you for learning to code!"

if(isStudent) {
    console.log("Good on you for learning to code");
}

// The great == or === debate
// == checks for equality but does NOT account for type
// === checks for equality and DOES account for type
// third = is for checking the data type
// ex:
if (7 == "7") {
    //this would be true with double equal because value is 7
}

if (7 === "7"){
    //this does NOT run because an integer is NOT the same as a string
}

// {} curly braces
// [] square brackets
// () parentheses

//Write a for loop that starts at 0, ends at 10, and increments by 1. Inside the loop, print the value of i

for (var i = 0; i <= 10 ; i++) {
    console.log(i);
}

// Now write me a lop that starts at 20, ends at 1, and decrements by 2.  Inside the loop, print the value of i
for (var i = 20; i >= 1 ; i-=2) {  //dont forget the = since decrementing is i = i-2
    console.log(i);
}

// Make me an array with the values [3,7,10,2,4,18]
var arr = [3,7,10,2,4,18];

// Pop quiz: what index value do arrays ALWAYS start on?
// 0 

// If I wanted to grab the 2nd value in an array, how would i write that?
var value = arr[1];

//How would I grab the LAST value in an array?
var last = arr[arr.length-1];
// Make sure to minus 1 off the back of your length to make sure you're grabbing that last value

//Push the value 5 into the array you made
arr.push(5);
//This adds a 5 to the BACK of my array

// how would I REMOVE a value from the back?
arr.pop();
//this will always remove the back/last value
// There are built in features that remove from other areas of the array -> use later
// today only concern with push and pop


//Write me a for loop that traverses through the array from before and prints values at each index
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    //i is the index not the value at that index
}

//Now add to that loop some logic that checks if the value is greater than 5 and ONLY print the value if it is larger that 5
for (var i = 0; i < arr.length; i++) {
    if(arr[i] > 5) {
        console.log(arr[i]);
    }
    // we dont need an else statement because we're not doing anything after
}

// Function time! Tell me what a function is and why we use them?
// Functions can run an argument and return a value
// Functions can hold info for later to call back upon
// Functions exist so we don't need to write the same code over and over
// Functions are a block of code that does something to data
// Functions can accept different parameters to give us different answers to varying solutions

// If I write a function doAThing(value).. what is that term we use for that "value" inside the parentheses?
// parameter
// bonus: what is the purpose of a parameter?
// to pass data into the function
// it's info needed by a function to produce an output
// Often it's what will be modified or adjusted in the argument

// Write me a function that, when called, prints out "hello there!"

function message(){
    console.log("Hello there!");  //console log performs an action, does not need to return
}

message(); // don't forget to call the function 

// Now add the ability for the function to accept a name and print out

function greeting(name) {
    //add strings together
    console.log ("Hello there " + name);
    // String concatenation
    console.log(`Hello there ${name}!`);
}

greeting("Nichole");


function greeting(name) {
    // //add strings together
    // console.log ("Hello there " + name);
    // // String concatenation
    // console.log(`Hello there ${name}!`);
    return `Hello there ${name}!`;
}

console.log(greeting("Nichole"));

//Quick! Tell me the coolest thing you've learned this week!


