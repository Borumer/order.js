const groupOrder = function(orders) {
	let sideCount = 0;

	function titleCase(text) {
		return text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase();
	}

	const pizzaOrder = (topping, crustType, size) => {
		if (topping === "") {
			console.log(`Order: ${titleCase(size)} ${crustType.toLowerCase()} crust plain cheese pizza`);
		} else {
			console.log(`Order: ${titleCase(size)} ${crustType.toLowerCase()} crust ${topping} pizza`);
		}
		return "meal";
	};

	const hotDogOrder = (topping) => {
		console.log(`Order: Hot dog with ${topping}`);
		return "meal";
	};

	const friesOrder = (quantity, size) => {
		console.log(`Side: ${quantity} ${size} boxes of french fries`);
		return "side";
	};

	const addDrink = (name, quantity) => {
		console.log(`Side: ${quantity} ${name}`);
		return "side";
	};

	groupOrder.pizzaOrder = pizzaOrder;
	groupOrder.hotDogOrder = hotDogOrder;
	groupOrder.friesOrder = friesOrder;
	groupOrder.addDrink = addDrink;

	const getSubTotal = (itemCount) => {
		const mealCount = itemCount - sideCount; // Calculates amount of non-sides
		const costPerMeal = 7.50;
		const costPerSide = 3.50;
		const totalSideCost = sideCount * costPerSide;
		const totalMealCost = mealCount * costPerMeal;
		const subTotal = totalMealCost + totalSideCost;

		return subTotal;
	};

	const getTax = (itemCount) => {
		const tax = 0.06 * getSubTotal(itemCount);
		return tax;
	};

	const getTotal = (itemCount) => { // Adds the subtotal to the tax and return the total in dollar format
		const tax = getTax(itemCount);
		const subTotal = getSubTotal(itemCount);
		const total = subTotal + tax;
		return total.toFixed(2);
	};

	if (orders !== undefined) { // If the array contains at least 1 order, do this
		// The side count = the length of a filtered array of orders contain only the elements returning "side"
		sideCount = orders.filter(function(item) {return item === "side"; }).length;
		console.log(`\nYour total is \$${getTotal(orders.length)}. \nEnjoy your meal!\n\n`);
	}
}

groupOrder(); // Calls undefined function for nested function commands
groupOrder(
	[
		groupOrder.pizzaOrder("", "thick", "large"),
		groupOrder.pizzaOrder("vegetable", "deep", "small"),
		groupOrder.hotDogOrder("mustard"),
		groupOrder.pizzaOrder("sausage", "Thin", "medium"),
		groupOrder.friesOrder(1, "medium")
	]
);
groupOrder(
	[
		groupOrder.hotDogOrder("ketchup"),
		groupOrder.friesOrder(2, "small"),
		groupOrder.addDrink("Sprite", 1)
	]
);
