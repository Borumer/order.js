const groupOrder = function(orders) {
	function titleCase(text) {
		return text.substring(0,1).toUpperCase() + text.substring(1, text.length).toLowerCase();
	}

	const pizzaOrder = (topping, crustType, size) => {

		console.log(`Order: ${titleCase(size)} ${crustType.toLowerCase()} crust pizza topped with ${topping}`);
	};

	const hotDogOrder = (topping) => {
		console.log(`Order: hot dog with ${titleCase(topping)}`)
	};

	const friesOrder = (quantity, size) => {
		console.log(`${quantity} ${size} boxes of fries`);
	}
	
	groupOrder.pizzaOrder = pizzaOrder;
	groupOrder.hotDogOrder = hotDogOrder;
	groupOrder.friesOrder = friesOrder;

	const addDrink = (name, quantity) => {

	};

	const getSubTotal = (itemCount) => {
		return 7.5 * itemCount;
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
	if (orders !== null) { // Doesn't log array that has no orders
		console.log(`\nTotal: \$${getTotal(orders.length)} \n`);
	}	
}

groupOrder(null); // Calls null function for nested function command
groupOrder(
	[
		groupOrder.pizzaOrder("pepperoni", "thick", "large"),
		groupOrder.pizzaOrder("veggies", "deep", "small"),
		groupOrder.hotDogOrder("mustard"),
		groupOrder.pizzaOrder("sausage", "Thin", "medium"),
	]
);
groupOrder(
	[
		groupOrder.hotDogOrder("ketchup"),
		groupOrder.friesOrder(2, "small")
	]
);
