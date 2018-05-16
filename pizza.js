const groupOrder = function(orders) {

	let sideCount = 0;

	function titleCase(text) {
		return text.substring(0,1).toUpperCase() + text.substring(1, text.length).toLowerCase();
	}

	const pizzaOrder = (topping, crustType, size) => {
    if (topping === "") {
			console.log(`Order: ${titleCase(size)} ${crustType.toLowerCase()} crust plain cheese pizza`);
		}
		else {
			console.log(`Order: ${titleCase(size)} ${crustType.toLowerCase()} crust ${topping} pizza`);
		}
	};
  
	const hotDogOrder = (topping) => {
		console.log(`Order: Hot dog with ${topping}`);
	};

	const friesOrder = (quantity, size) => {
		console.log(`Side: ${quantity} ${size} boxes of french fries`);
		return "fries";
	}
	
	const addDrink = (name, quantity, size) => {
    console.log(`Drink: ${quantity} ${size} ${name}`);
		sideCount++;
		return "drink";
	};
		
	groupOrder.pizzaOrder = pizzaOrder;
	groupOrder.hotDogOrder = hotDogOrder;
	groupOrder.friesOrder = friesOrder;
 	groupOrder.addDrink = addDrink;
	
	const getSubTotal = (itemCount) => {
		const mealCount = itemCount - sideCount;
		const costPerMeal = 7.50;
		const costPerSide = 3.50;
		const totalSideCost = sideCount * costPerSide;
		const totalMealCost = mealCount * costPerMeal;

		return totalMealCost + totalSideCost;
	};

	const getTax = (itemCount) => {
		const tax = 0.06 * getSubTotal(itemCount);
		return tax;
	};

	const getTotal = (itemCount) => {
		const tax = getTax(itemCount);
		const subTotal = getSubTotal(itemCount);
		const total = subTotal + tax;
		return total.toFixed(2);
		
	};
  
	var sides = ["fries", "drink"];
	if (orders !== undefined) { // If orders array is given
		for (let i = 0; i < orders.length; i++) {
			if(orders[i] === sides[i]) {sideCount++;}
		}
		console.log(`\nYour total is \$${getTotal(orders.length)}. \nEnjoy your meal!\n\n`);
	}
};

groupOrder(); // Calls undefined function for nested function commands
groupOrder(
	[
		groupOrder.pizzaOrder("pepperoni", "thick", "large"),
		groupOrder.addDrink("Sprite", 1),
		groupOrder.pizzaOrder("veggies", "deep", "small"),
		groupOrder.hotDogOrder("mustard"),
		groupOrder.pizzaOrder("sausage", "Thin", "medium"),
		groupOrder.friesOrder(1, "medium")
	]
);
groupOrder(
	[
		groupOrder.hotDogOrder("ketchup"),
		groupOrder.friesOrder(2, "small")
	]
);
