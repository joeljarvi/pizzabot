const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
let isInMenu = true;
const pizzaPrice = 80;

//STEG 1: HEJHEJ
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}!`
);

//STEG 2: NU KÖR VI PÅ
while (isInMenu) {
  const orderName = prompt(
    `Enter the name of the pizza you want to order today.`
  );

  if (!checkOrderName(orderName)) {
    alert(`Sorry, we don't have ${orderName} on our menu.`);
    isInMenu = false;
    break; // Exit the loop if the pizza is not on the menu
  }

  const orderQuantity = prompt(`How many of ${orderName} do you want?`);

  const orderTime = cookingTime(orderQuantity);
  const orderTotal = totalCost(orderQuantity);

  alert(orderTime);
  alert(
    `Great, I'll get started on your ${orderQuantity} ${orderName} right away! It will cost you ${orderTotal} kr.`
  );
  break;
}

//FUNKTIONER

function totalCost(Quantity) {
  const price = Quantity * pizzaPrice;
  return price;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 5) {
    return `The pizzas will take 20 minutes`;
  } else if (orderQuantity >= 2 && orderQuantity < 5) {
    return `The pizzas will take 15 minutes`;
  } else {
    return `The pizzas will take 10 minutes`;
  }
}

function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}
