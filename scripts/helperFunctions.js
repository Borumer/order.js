// Define/Redfine methods of predefined objects
console.log = function(statement) {
	const outputEl = document.querySelector("#program");
	outputEl.innerHTML += `${statement} <br>`;
}

const siblings = function(el) {
	let result = [],
    node = el.parentNode.firstChild;
	while (node) { // While node's parent's children is not the same node
	    result.push(node);
   		node = node.nextSibling;
	}
	result.splice(result.indexOf(el), 1);
	return result;	
};

