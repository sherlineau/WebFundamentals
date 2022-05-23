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

function getAnswer() {
    var question = document.querySelector("#question");
    if(question.value == "") {
        document.querySelector("#answer").innerText = "You must ask a question";
    } else {
        // I need the ball to shake
        var image = document.querySelector("#ball");
        image.setAttribute("src", "ball.gif");
        //triggers function after a certain amount of time
        setTimeout(replace, 1200);
    }
}

function replace() {
    var image = document.querySelector("#ball");
    image.setAttribute("src", "ballStill.jpg");
    var chance = Math.floor(Math.random() * lifesAnswers.length);
    var answer = lifesAnswers[chance];
    // console.log(answer);
    //document.querySelector looks for id answer in the html file
    document.querySelector("#answer").innerText = answer;
}

