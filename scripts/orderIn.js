// Define/Redfine methods of predefined objects
console.log = function(statement) {
	const outputEl = document.querySelector("#program");
	outputEl.innerHTML += `${statement} <br>`;
}

// Get needed elements and store in constant variables
const firstForm = document.querySelector("form");
const forms = document.getElementsByTagName("form"); // Stores nodeList of all the orders the user filled out
const afterEl = document.getElementById('writeroot'); // Store element that is put after the last order form
const formsParent = document.getElementById("forms"); // Stores div that contains the form elements and input buttons
// Define changing variables
let counter = 1;

// Define functions called in input buttons in forms
function duplicateForm() {
	const newForm = firstForm.cloneNode(true);
	const newFields = newForm.elements;
	counter++;
	for (let i = 0; i < newFields.length - 1; i++) {
		newFields[i].value = "";
		newFields[i].name = firstForm[i].name;
	}
	formsParent.insertBefore(newForm, afterEl);
}
function orderFood() {
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
		let arr = [];
		for (let i = 0; i < counter; i++) {
			arr.push(groupOrder[forms[i].orderType.value + "Order"](
			{
					topping: forms[i].orderTopping.value,
					size: forms[i].size.value,
					crustType: forms[i].crustType.value,
					quantity: forms[i].quantity.value,
					name: forms[i].drink.value
			}
			));
		}
		groupOrder(arr);				
	}
	catch(e) {console.log(e)}	
}
function displaySubmitMessage() {
	formsParent.innerHTML = `<p style = "text-align: center; color: black; font-family: 'Times New Roman'; font-size: 2em;"> Order submitted. Thank you for ordering! </p>`;
	formsParent.scrollIntoView({ 
	  behavior: 'smooth' 
	});	
}
function orderAll() {
	orderFood();
	displaySubmitMessage();
}
function removeOrder(el) {
	// Call remove method on element to remove
	el.parentNode.parentNode.removeChild(el.parentNode);
}

