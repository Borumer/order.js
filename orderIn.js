const outputEl = document.querySelector("#program");

console.log = function(statement) {
	outputEl.innerHTML += `${statement} <br>`;
}

function showOrder() {
	const form = document.querySelector("form");
	checkNull: try {
		for (let i = 0; i < Object.keys(form.elements).length; i++) {
			if(form.elements[i].required && form.elements[i].value === "") {
				break checkNull;
			}
		}
		groupOrder(
			[
				groupOrder[form.orderType.value + "Order"](form.orderTopping.value, form.crustType.value, form.size.value),
			]
		);
	}
	catch(e) {

	}
}

function duplicateForm() {
	
}

