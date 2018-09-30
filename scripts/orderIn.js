// Get needed elements and store in constant variables
const firstForm = document.querySelector("form");
const forms = document.getElementsByTagName("form"); // Stores nodeList of all the orders the user filled out
const afterEl = document.getElementById('writeroot'); // Store element that is put after the last order form
const formsParent = document.getElementById("forms"); // Stores div that contains the form elements and input buttons
// Define changing variables
let counter = 1;
console.log(siblings(formsParent))
// Define functions called in input buttons in forms
function duplicateForm() {
	const newForm = firstForm.cloneNode(true);
	const newFields = newForm.elements;
	counter++;
	for (let i = 0; i < newFields.length - 1; i++) {
		newFields[i].value = "";
		newFields[i].name = firstForm[i].name;
		newFields[i].onchange = firstForm[i].onchange;
	}
	formsParent.insertBefore(newForm, afterEl);
}
function orderFood() {
	checkNull: try {
		let arr = [];
		// Loops through all forms
		for (let i = 0; i < counter; i++) {
			let currentForm = forms[i];
			// Loops through elements in forms
			for (let j = 0; j < currentForm.length; j++) {
				let currentElement = currentForm.elements[j];
				// If the user has not entered a required field don't order		
				if(currentElement.required && currentElement.value === "") {
					break checkNull;
				}
			}
			arr.push(groupOrder[currentForm.orderType.value + "Order"](
			{
					topping: currentForm.orderTopping.value,
					size: currentForm.size.value,
					crustType: currentForm.crustType.value,
					quantity: currentForm.quantity.value,
					name: currentForm.drink.value
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
function enableFields(el) {
	for (let i = 0; i < el.siblings().length; i++) {
		siblings(el)[i].disabled = false;
	}
}
console.log(siblings(document.querySelector("form").firstChild));

