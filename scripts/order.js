String.prototype.toTitleCase = function() {
	return this.substring(0, 1).toUpperCase() + this.substring(1, this.length).toLowerCase();
};

function groupOrder(orders) {
	let sideCount = 0;
	let mealCount = 0;

	const pizzaOrder = ({size, crustType, topping, quantity}) => {
		quantity = Math.round(parseInt(quantity));
		mealCount += quantity;
		if (topping === "") {
			console.log(`Order: ${quantity} ${size.toTitleCase()} ${crustType.toLowerCase()} crust plain cheese pizza`);
		} else {
			console.log(`Order: ${quantity} ${size.toTitleCase()} ${crustType.toLowerCase()} crust ${topping} pizza`);
		}
		console.log(`Meal Count after ordering ${quantity} pizzas: ${mealCount}`);
		console.log(`Current item count: ${itemCount()}`);		
	};

	const hotDogOrder = ({quantity, condiments}) => {
		quantity = Math.round(parseInt(quantity));
		mealCount += quantity;
		console.log(`Order: ${quantity} hot dogs with ${condiments}`);
		console.log(`Meal Count after ordering hot dog: ${mealCount}`);
		console.log(`Current item count: ${itemCount()}`);
	};

	const friesOrder = ({quantity, size}) => {
		quantity = Math.round(parseInt(quantity));
		sideCount += quantity;
		console.log(`Side: ${quantity} ${size} boxes of french fries`);
		console.log(`Side Count after ordering fries: ${sideCount}`);
		console.log(`Current item count: ${itemCount()}`);
	};

	const addDrink = ({name, quantity}) => {
		quantity = Math.round(parseInt(quantity));
		sideCount += quantity;
		console.log(`Side Drink: ${quantity} ${name}`);
		console.log(`Side Count after ordering a drink: ${sideCount}`);
		console.log(`Current item count: ${itemCount()}`);
	};

	const burgerOrder = ({condiments, quantity}) => {
		quantity = Math.round(parseInt(quantity));
		mealCount += quantity;
		console.log(`Order: ${quantity} burgers with ${condiments}`)
		console.log(`Meal Count after ordering burger: ${mealCount}`);
		console.log(`Current item count: ${itemCount()}`);
	};

	groupOrder.pizzaOrder = pizzaOrder;
	groupOrder.hotDogOrder = hotDogOrder;
	groupOrder.friesOrder = friesOrder;
	groupOrder.drinkOrder = addDrink;
	groupOrder.burgerOrder = burgerOrder;

	const getSubTotal = (mealCount, sideCount) => {
		const costPerMeal = 7.50; // Costs in dollars per meal item
		const costPerSide = 3.50; // Cost in dollars per side item
		const totalSideCost = sideCount * costPerSide; // Total side cost = product of number of sides and cost per side
		const totalMealCost = mealCount * costPerMeal; // Total meal cost = product of number of meals and cost per meal
		console.log(`Side Count: ${sideCount}`);
		const subTotal = totalMealCost + totalSideCost; // Sub total = all the item costs added together

		return subTotal;
	};

	const getTax = (mealCount, sideCount) => {
		const tax = 0.06 * getSubTotal(mealCount, sideCount);
		return tax;
	};

	const getTotal = (mealCount, sideCount) => { // Adds the subtotal to the tax and return the total in dollar format
		const tax = getTax(mealCount, sideCount);
		const subTotal = getSubTotal(mealCount, sideCount);
		const total = subTotal + tax;
		return total.toFixed(2);
	};
	
	if (typeof orders === 'object') { // If the array is initialized, do this
		// The side count = the length of a filtered array of true booleans for each element returning "side"
		console.log(`\nYour total is \$${getTotal(mealCount, sideCount)}. \nEnjoy your meal!\n\n`);
	}

	function itemCount() {
		return sideCount + mealCount;
	}
}



groupOrder(); // Calls undefined function for nested function commands

