console.log = function(statement) {
	const outputEl = document.querySelector("#program");
	outputEl.innerHTML += `${statement} <br>`;
}

// Get needed elements and store in constant variables
const firstForm = document.querySelector("form");
const forms = document.querySelectorAll("form");
const afterEl = document.getElementById('writeroot');

// Define changing variables
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
function orderAll() {
	let orderArr = [];
	checkNull: try {
		// Loops through all forms
		for (let i = 0; i < forms.length; i++) {
			currentForm = forms[i];
			// Loops through elements in forms
			for (let i = 0; i < currentForm.length; i++) {
				// If the user has not entered a required field don't order		
				if(currentForm.elements[i].required && currentForm.elements[i].value === "") {
					break checkNull;
				}
			}			
		}
		groupOrder(
			[
				groupOrder[forms[0].orderType.value + "Order"]({
					topping: forms[0].orderTopping.value,
					size: forms[0].size.value,
					crustType: forms[0].crustType.value
				}),
				groupOrder[forms[1].orderType.value + "Order"]({
					topping: forms[1].orderTopping.value,
					size: forms[1].size.value,
					crustType: forms[1].crustType.value
				}),
				groupOrder[forms[2].orderType.value + "Order"]({
					topping: forms[2].orderTopping.value,
					size: forms[2].size.value,
					crustType: forms[2].crustType.value
				})
			]
		);					
	}
	catch(e) {

	}	
}

function removeOrder(el) {
	el.parentNode.parentNode.removeChild(el.parentNode);
}

