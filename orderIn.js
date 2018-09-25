console.log = function(statement) {
	const outputEl = document.querySelector("#program");
	outputEl.innerHTML += `${statement} <br>`;
}

let form = document.querySelector("form");
const forms = document.querySelectorAll("form");

function showOrder(childEl) {
	form = childEl.parentNode;
	checkNull: try {
		// If the user has not entered a required field don't order		
		for (let i = 0; i < Object.keys(form.elements).length; i++) {
			if(form.elements[i].required && form.elements[i].value === "") {
				break checkNull;
			}
		}
		groupOrder[form.orderType.value + "Order"](
			{
				topping: form.orderTopping.value, 
				crustType: form.crustType.value,
				size: form.size.value,
				quantity: form.quantity.value,
				name: form.drink.value
			}
		);
	}
	catch(e) {

	}
}

const firstForm = document.querySelector("form");
const newForm = firstForm.cloneNode(true);
const newFields = newForm.childNodes;
const afterEl = document.getElementById('writeroot');

let counter = 0;
function duplicateForm() {
	counter++;
	newForm.id = '';
	newForm.style.display = 'block';
	for (let i = 0; i < newFields.length; i++) {
		const theName = newFields[i].for;
		if (theName)
			newFields[i].for = theName + counter;
	}
	afterEl.parentNode.insertBefore(newForm, afterEl);
}

let orderArr = [];
function orderAll() {

	for (order in forms) {
		orderArr.push(groupOrder[order.orderType.value + "Order"](
			{
				topping: order.topping.value,
				crustType: order.crustType.value,
				size: order.size.value,
				quantity: order.quantity.value,
				name: order.name.value
			}
		));
	}
}

