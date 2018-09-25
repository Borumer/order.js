console.log = function(statement) {
	const outputEl = document.querySelector("#program");
	outputEl.innerHTML += `${statement} <br>`;
}

// Get needed elements and store in constant variables
const firstForm = document.querySelector("form");
const forms = document.querySelectorAll("form");
const afterEl = document.getElementById('writeroot');

// Define changing variables
let form = firstForm;
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

function orderAll(childEl) {
	let orderArr = [];
	form = childEl.parentNode;
	checkNull: try {
		// If the user has not entered a required field don't order		
		for (let i = 0; i < Object.keys(form.elements).length; i++) {
			if(form.elements[i].required && form.elements[i].value === "") {
				break checkNull;
			}
		}
		for (order in forms) {
			orderArr.push(groupOrder[order.orderType.value + "Order"]);
		}
		for (let i = 0; i < orderArr.length; i++) {
			orderArr[i](
				{
					topping: order.topping.value,
					crustType: order.crustType.value,
					size: order.size.value,
					quantity: order.quantity.value,
					name: order.name.value
				}
			)
		}
	}
	catch(e) {

	}	
}

function removeOrder(el) {
	el.parentNode.parentNode.removeChild(el.parentNode);
}

