String.prototype.toTitleCase = function() {
	return this.substring(0, 1).toUpperCase() + this.substring(1, this.length).toLowerCase();
}

const groupOrder = function(orders) {
	let sideCount = 0;

	const pizzaOrder = (topping, crustType, size) => {
		if (topping === "") {
			console.log(`Order: ${size.toTitleCase()} ${crustType.toLowerCase()} crust plain cheese pizza`);
		} else {
			console.log(`Order: ${size.toTitleCase()} ${crustType.toLowerCase()} crust ${topping} pizza`);
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
		console.log(`Side Drink: ${quantity} ${name}`);
		return "side";
	};

	groupOrder.pizzaOrder = pizzaOrder;
	groupOrder.hotDogOrder = hotDogOrder;
	groupOrder.friesOrder = friesOrder;
	groupOrder.addDrink = addDrink;

	const getSubTotal = (itemCount) => {
		const mealCount = itemCount - sideCount; // Calculates amount of non-sides
		const costPerMeal = 7.50; // Costs in dollars per meal item
		const costPerSide = 3.50; // Cost in dollars per side item
		const totalSideCost = sideCount * costPerSide; // Total side cost = product of number of sides and cost per side
		const totalMealCost = mealCount * costPerMeal; // Total meal cost = product of number of meals and cost per meal
		const subTotal = totalMealCost + totalSideCost; // Sub total = all the item costs added together

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

	if (orders !== undefined) { // If the array is initialized, do this
		// The side count = the length of a filtered array of true booleans for each element returning "side"
		sideCount = orders.filter(function(item) {
			return item === "side";
		}).length;
		console.log(`\nYour total is \$${getTotal(orders.length)}. \nEnjoy your meal!\n\n`);
	}
}

groupOrder(); // Calls undefined function for nested function commands

function sleep(milliseconds) {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function demo(time) {
	groupOrder(
		[
			groupOrder.pizzaOrder("", "thick", "large"),
			groupOrder.pizzaOrder("vegetable", "deep", "small"),
			groupOrder.hotDogOrder("mustard"),
			groupOrder.pizzaOrder("pepperoni", "Thin", "medium"),
			groupOrder.friesOrder(1, "medium"),
			groupOrder.addDrink("Sprite", 2)
		],
	);
	await sleep(time);
	groupOrder(
		[
			groupOrder.hotDogOrder("ketchup"),
			groupOrder.friesOrder(2, "small"),
			groupOrder.addDrink("Sprite", 1)
		]
	);
}
demo(3000);