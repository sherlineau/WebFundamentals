function logOut(element){
    if(element.innerText == "Log In") {
        element.innerText = "Log Out";
    } else {
        element.innerText = "Log In";
    }
}

function specialCounter() {
    document.querySelector("#number").innerText++;
}

function hide(element) {
    element.remove();
}