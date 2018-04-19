const groupOrder = function(orders) {

	let takeOrder = (topping, crustType, size) => {
		console.log(`Order: ${size} ${crustType} crust pizza topped with ${topping}`);
	};

	groupOrder.takeOrder = takeOrder;

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
		groupOrder.takeOrder("pepperoni", "Thick", "large"),
		groupOrder.takeOrder("veggies", "deep", "small"),
		groupOrder.takeOrder("sausage", "broolykn style", "medium"),
		groupOrder.takeOrder("sausage", "Thin", "medium"),
	]
);
