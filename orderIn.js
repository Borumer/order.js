const outputEl = document.querySelector("#program");

console.log = function(statement) {
	outputEl.innerHTML += `${statement} <br>`;
}

function showOrder() {
	const form = document.querySelector("form");

	groupOrder(
		[
			groupOrder[form.orderType.value + "Order"](form.orderTopping.value, form.crustType.value, form.size.value),
		]
	);
}

