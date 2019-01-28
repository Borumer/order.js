String.prototype.toTitleCase = function() {
	return this.substring(0, 1).toUpperCase() + this.substring(1, this.length).toLowerCase();
};

function groupOrder(orders) {

	const pizzaOrder = ({size, crustType, topping, quantity}) => {
		quantity = Math.round(parseInt(quantity));

		if (topping === "") {
			print(`Order: ${quantity} ${size.toTitleCase()} ${crustType.toLowerCase()} crust plain cheese pizza`);
		} else {
			print(`Order: ${quantity} ${size.toTitleCase()} ${crustType.toLowerCase()} crust ${topping} pizza`);
		}

		return {mealCount: quantity};	
	};

	const hotDogOrder = ({quantity, condiments}) => {
		quantity = Math.round(parseInt(quantity));

		print(`Order: ${quantity} hot dogs with ${condiments}`);
		return {mealCount: quantity};
	};

	const friesOrder = ({quantity, size}) => {
		quantity = Math.round(parseInt(quantity));

		print(`Side: ${quantity} ${size} boxes of french fries`);
		return {sideCount: quantity};
	};

	const addDrink = ({name, quantity}) => {
		quantity = Math.round(parseInt(quantity));

		print(`Drink: ${quantity} ${name}`);
		return {drinkCount: quantity};
	};

	const burgerOrder = ({condiments, quantity}) => {
		quantity = Math.round(parseInt(quantity));

		print(`Order: ${quantity} burgers with ${condiments}`)
		return {mealCount: quantity};
	};

	groupOrder.pizzaOrder = pizzaOrder;
	groupOrder.hotDogOrder = hotDogOrder;
	groupOrder.friesOrder = friesOrder;
	groupOrder.drinkOrder = addDrink;
	groupOrder.burgerOrder = burgerOrder;

	const getSubTotal = (mealCount, sideCount, drinkCount) => {
		const costPerMeal = 7.50; // Costs in dollars per meal item
		const costPerSide = 3.50; // Cost in dollars per side item
		const costPerDrink = 1.50; // Cost in dollars per drink item
		const totalSideCost = sideCount * costPerSide; // Total side cost = product of number of sides and cost per side
		const totalMealCost = mealCount * costPerMeal; // Total meal cost = product of number of meals and cost per meal
		const totalDrinkCost = drinkCount * costPerDrink; // Total drink cost = product of number of drinks and cost per drink
		const subTotal = totalMealCost + totalSideCost + totalDrinkCost; // Sub total = all the item costs added together

		return subTotal;
	};

	const getTax = (mealCount, sideCount, drinkCount) => {
		const tax = 0.06 * getSubTotal(mealCount, sideCount, drinkCount);
		return tax;
	};

	const getTotal = (mealCount, sideCount, drinkCount) => { // Adds the subtotal to the tax and return the total in dollar format
		const tax = getTax(mealCount, sideCount, drinkCount);
		const subTotal = getSubTotal(mealCount, sideCount, drinkCount);
		const total = subTotal + tax;
		return total.toFixed(2);
	};
	
	if (typeof orders === 'object') { // If the array is initialized, do this
		let mealCount = orders.reduce((av, cv) => {
			if (cv.hasOwnProperty('mealCount')) {
				return {mealCount: av.mealCount + cv.mealCount};
			}
			return {mealCount: av.mealCount + 0};
		}, {mealCount: 0}).mealCount;
		mealCount = isNaN(mealCount) ? 0 : mealCount;
		let sideCount = orders.reduce((av, cv) => {
			if (cv.hasOwnProperty('sideCount')) {
				return {sideCount: cv.sideCount + av.sideCount};
			}
			return {sideCount: av.sideCount + 0};
		}, {sideCount: 0}).sideCount;
		sideCount = isNaN(sideCount) ? 0 : sideCount;
		let drinkCount = orders.reduce((av, cv) => {
			if (cv.hasOwnProperty('drinkCount')) {
				return {drinkCount: cv.drinkCount + av.drinkCount};
			}
			return {drinkCount: av.drinkCount + 0};
		}, {drinkCount: 0}).drinkCount;
		drinkCount = isNaN(drinkCount) ? 0 : drinkCount;

		const total = getTotal(mealCount, sideCount, drinkCount);
		print(`\nYour total is \$${total}. \nEnjoy your meal!\n\n`);
	}
}
 
groupOrder(); // Calls undefined function for nested function commands

