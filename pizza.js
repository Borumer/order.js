const groupOrder = function(orders) {

	const pizzaOrder = (topping, crustType, size) => {
		console.log(`Order: ${size} ${crustType} crust pizza topped with ${topping}`);
	};

	const hotDogOrder = (topping) => {
		console.log(`Order: hot dog with ${topping}`)
	};

	groupOrder.pizzaOrder = pizzaOrder;
	groupOrder.hotDogOrder = hotDogOrder;

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

	console.log(`Total: \$${getTotal(orders.length)}`);
}

groupOrder([]);
groupOrder(
	[
		groupOrder.pizzaOrder("pepperoni", "Thick", "large"),
		groupOrder.pizzaOrder("veggies", "deep", "small"),
		groupOrder.hotDogOrder("mustard"),
		groupOrder.pizzaOrder("sausage", "Thin", "medium"),
	]
);
