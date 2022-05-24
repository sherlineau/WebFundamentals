var pizzaOptions = [];

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    pizzaOptions.push(pizza);
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional","mozzarella",["pepperoni","sausage"]);
// console.log(p1);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella" ,"feta"] , ["mushrooms","olives","onions"]);
// console.log(p2);
var p3 = pizzaOven("cheese stuffed", "traditional", "extra cheese","meat lovers");
var p4 = pizzaOven("thin crust", "pesto", "mozzarella", "tomatoes");

function randomPizza(pizzaOptions) {
    chance = Math.floor(Math.random() * (pizzaOptions.length));
    answer = pizzaOptions[chance];
    return answer;
}

answer = randomPizza(pizzaOptions);
console.log(randomPizza(pizzaOptions));

