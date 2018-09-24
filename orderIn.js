const outputEl = document.querySelector("#program");

console.log = function(statement) {
	outputEl.innerHTML += `${statement} <br>`;
}

function showOrder() {
	const form = document.querySelector("form");

	checkNull: try {
		for (let i = 0; i < Object.keys(form.elements).length; i++) {
			// If the user has not entered a required field don't order
			if(form.elements[i].required && form.elements[i].value === "") {
				break checkNull;
			}
		}
		groupOrder(
			[
				groupOrder[form.orderType.value + "Order"](
					{
						topping: form.orderTopping.value, 
						crustType: form.crustType.value,
						size: form.size.value,
						quantity: form.quantity.value,
						name: form.drink.value
					}
				),
			]
		);
	}
	catch(e) {

	}
}

let counter = 0;
const firstForm = document.querySelector("form");
const newForm = firstForm.cloneNode(true);
const newFields = newForm.childNodes;
const afterEl = document.getElementById('writeroot');

function duplicateForm() {
	counter++;
	newForm.id = '';
	newForm.style.display = 'block';
	for (let i = 0; i < newFields.length; i++) {
		const theName = newFields[i].name;
		if (theName)
			newFields[i].name = theName + counter;
	}
	afterEl.parentNode.insertBefore(newForm, afterEl);
}

