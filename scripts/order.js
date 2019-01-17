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

		return mealCount;	
	};

	const hotDogOrder = ({quantity, condiments}) => {
		quantity = Math.round(parseInt(quantity));
		mealCount += quantity;
		console.log(`Order: ${quantity} hot dogs with ${condiments}`);
		return mealCount;
	};

	const friesOrder = ({quantity, size}) => {
		quantity = Math.round(parseInt(quantity));
		sideCount += quantity;
		console.log(`Side: ${quantity} ${size} boxes of french fries`);
		return sideCount;
	};

	const addDrink = ({name, quantity}) => {
		quantity = Math.round(parseInt(quantity));
		sideCount += quantity;
		console.log(`Side Drink: ${quantity} ${name}`);
		return sideCount;
	};

	const burgerOrder = ({condiments, quantity}) => {
		quantity = Math.round(parseInt(quantity));
		mealCount += quantity;
		console.log(`Order: ${quantity} burgers with ${condiments}`)
		return mealCount;
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
		const mealCount = orders.reduce((av, cv) => {
			if (cv.mealCount) {
				return cv.mealCount + av;
			}
		});
		const sideCount = orders.reduce((av, cv) => {
			if (cv.sideCount) {
				return cv.sideCount + av;
			}
		});
		// The side count = the length of a filtered array of true booleans for each element returning "side"
		console.log(`\nYour total is \$${getTotal(mealCount, sideCount)}. \nEnjoy your meal!\n\n`);
	}
}
 
groupOrder(); // Calls undefined function for nested function commands

