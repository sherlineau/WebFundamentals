// where we write our javascript logic

// var count = 1; not need since innerText++ increments

function counter(element){
    // count++; not need since innerText++ increments
    //we are going to tell html to update itself with whatever js tells it to update with
    // console.log(count);
    // console.log(element);
    element.innerText++;
}

// querySelector selects the ID="number" updates the innertext
function specialCounter() {
    document.querySelector("#number").innerText++;
}