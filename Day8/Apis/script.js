async function getFacts(){
    var response = await fetch("https://cat-fact.herokuapp.com/facts");
    var facts = await response.json();
    var rand = Math.floor(Math.random() * facts.length);
    console.log(facts);
    document.querySelector("#fact").innerText = facts[rand].text;
}

getFacts();


async function dogFacts() {
    var res = await fetch("https://dog-api.kinduff.com/api/facts");
    var dfact = await res.json();
    console.log(dfact);
}

dogFacts();