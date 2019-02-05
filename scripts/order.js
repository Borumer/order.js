String.prototype.toTitleCase = function() {
	return this.substring(0, 1).toUpperCase() + this.substring(1, this.length).toLowerCase();
};

function giveDiscount(toChange) {
	return 0.80 * toChange;
}

function findSeason() {
	/*
	Courtesy of stackoverflow
	https://stackoverflow.com/a/54501026/9860982 by komieff
	*/
	const after = (target, dm) => (target.month > dm.month) 
	|| ((target.month === dm.month) && (target.day >= dm.day)) 

	const before = (target, dm) => (target.month < dm.month) 
	|| ((target.month === dm.month) && (target.day <= dm.day)) 

	const between = (target, low, high) => 
	after(target, low) && before(target, high)

	const MARCH_EQUINOX = { month: 2, day: 20 } // March Equinox is March 20
	const JUNE_SOLSTICE = { month:  5, day: 21 } // June Solstice is June 21
	const SEPTEMBER_EQUINOX = { month: 8, day: 23 } // September Equinox is September 23
	const DECEMBER_SOLSTICE = { month: 11, day: 21 } // December Solstice is December 21
	const NEW_YEAR = { month: 0, day: 1 } // New Years is January 1

	const seasons = {
	spring: d => between(d, MARCH_EQUINOX, JUNE_SOLSTICE), // Check if 
	summer: d => between(d, JUNE_SOLSTICE, SEPTEMBER_EQUINOX),
	fall: d => between(d, SEPTEMBER_EQUINOX, DECEMBER_SOLSTICE),
	winter: d => 
	between(d, DECEMBER_SOLSTICE, NEW_YEAR) ||
	between(d, NEW_YEAR, MARCH_EQUINOX)
	}

	const season = (dm, seasons) => Object.keys(seasons)
	.find(season => seasons[season](dm))

	const now = new Date(); // Current time, date, and month
	let currentSeason = season({month: now.getMonth(), day: now.getDay()}, seasons);

	return currentSeason;
}

giveDiscount();

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
		let total = 0; // Define total

		// Define constants
		const tax = getTax(mealCount, sideCount, drinkCount);
		const subTotal = getSubTotal(mealCount, sideCount, drinkCount);

		total = subTotal; // Set to value before discount and after-tax

		if (findSeason() === 'winter') {
			total = giveDiscount(total); // If it is winter discount season, give a discount
		}

		total += tax; // Add the tax

		return total.toFixed(2); // Return the final price rounded two decimal places
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

