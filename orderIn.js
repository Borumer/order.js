console.log = function(statement) {
	const outputEl = document.querySelector("#program");
	outputEl.innerHTML += `${statement} <br>`;
}

const firstForm = document.querySelector("form");
let form = firstForm;
const forms = document.querySelectorAll("form");
const afterEl = document.getElementById('writeroot');

let counter = 0;
function duplicateForm() {
	const newForm = firstForm.cloneNode(true);
	const newFields = newForm.childNodes;

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
function orderAll(childEl) {
	form = childEl.parentNode;
	checkNull: try {
		// If the user has not entered a required field don't order		
		for (let i = 0; i < Object.keys(form.elements).length; i++) {
			if(form.elements[i].required && form.elements[i].value === "") {
				break checkNull;
			}
		}
	}
	catch(e) {

	}	
	console.log(forms[0].orderType);
	for (order in forms) {
		console.log(order.elements);
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
	groupOrder(orderArr);
}

