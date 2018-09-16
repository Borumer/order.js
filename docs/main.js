var foo = document.getElementById("foo");
const xhr = new XMLHttpRequest();

xhr.open("GET", "./foo.txt", true);

xhr.onreadystatechange = function() {
	foo.innerHTML = xhr.responseText;
};
xhr.send();