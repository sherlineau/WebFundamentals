// How to swap variables

var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);
//what do we expect to get back?

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
console.log(fruit2 + " and " + fruit1);
//what do we get back this time?



//while loops
var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}



//Reversing an array
//write a function to reverse an array given 
//["a","b","c","d","e"]   =  ["e", "d", "c", "b", "a"];

var arr = ["a","b","c","d","e"];

function Reverse(array) {
    for (var i = 0; i < arr.length/2; i++) {
        var temp = arr[arr.length-1-i];
        arr[arr.length-1-i] = arr[i];
        arr[i] = temp
    }
    console.log(arr);
}

reversed = Reverse(arr);
arr1 = [1,2,3,4,5];
