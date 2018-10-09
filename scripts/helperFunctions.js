// Define/Redfine methods of predefined objects
console.log = function(statement) {
	const outputEl = document.querySelector("#program");
	outputEl.innerHTML += `${statement} <br>`;
};

Node.prototype.siblings = function() {
	let result = [],
    node = this.parentNode.firstChild;
	while (node) { // While node's parent's children is not the same node
	    if (node.nodeType !== 3) 
	    	result.push(node);
   		node = node.nextSibling;
	}
	result.splice(result.indexOf(this), 1);
	return result;	
};

Node.prototype.childEls = function() {
	const list_items = this.childNodes;
	let li_items = [];
	
	for (let i = 0; i < list_items.length; i++) {
		// Add all the <li> nodes to an array, skip the text nodes
		if (list_items[i].nodeType != 3) {
			li_items.push(list_items[i]);
		}
	}

	return li_items;	
};

const removeUnnecessary = function(elem) {
	const currOrderTypeEl = elem.orderType;
	const currentOrderVal = currOrderTypeEl.value;
	// Loop through select element's siblings in the current form
	for (let j = 0; j < currOrderTypeEl.siblings().length; j++) {
		let currentSibling = currOrderTypeEl.siblings()[j];
		const arr = ["SELECT", "TEXTAREA", "INPUT", "OUTPUT", "OPTGROUP", "DATALIST"];

		if (arr.includes(currentSibling.tagName) && currentSibling.nextElementSibling !== null) {
			if (!currentSibling.classList.contains(currentOrderVal)) {
				currentSibling.previousElementSibling.style.display = "none";
				currentSibling.style.display = "none";
				currentSibling.nextElementSibling.style.display = "none";
			}
			else {
				currentSibling.previousElementSibling.style.display = "inline";
				currentSibling.style.display = "inline";
				currentSibling.nextElementSibling.style.display = "block";				
			}
		}	
	}
};

function enableFields(el) {
	for (let i = 0; i < el.siblings().length; i++) {
		el.siblings()[i].disabled = false;
		submitButton.disabled = false;
	}
}

