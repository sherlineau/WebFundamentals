// The Math Library
// Predict what each of the following will return. Can we predict the variable random?

var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
//lowest integer possible closest to value, 1.8 returns 1, 1.2 returns 1 -> round down
console.log(floor);
//highest integer  closest to value -> round up
console.log(ceiling);
// logs any number (decimals included) -> random decimal number between 0-1 (1 is excluded)
console.log(random);


// Dice Roller
// Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.

function d6() {
    var roll = Math.random();
    // your code here
    result = Math.floor((Math.random() * 6)+1);

    return result;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


// Consult the Oracle
// Using the following array, write a function that will answer all of our questions by randomly choosing a response

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

//method 1
// function randomanswer() {
//     //using Math.ceil(math.floor(math.random * 6)); has a tiny chance of return 0 which we do not want
//     var answerIndex = Math.floor(Math.random() * Math.floor(lifesAnswers.length)); 
//     var answer = lifesAnswers[answerIndex];
//     return answer;
// }

// var random = randomanswer();
// console.log(random);

// method 2
function oracle(arr) {
    chance = Math.floor(Math.random() * (arr.length));

    answer = arr[chance];
    return answer;
}

// answer = oracle(lifesAnswers);
console.log(oracle(lifesAnswers));