<script src = "https://cdn.rawgit.com/KnowledgeableKangaroo/KnowledgeableKangaroo.github.io/master/script.js"></script>
<script> 
    let sslink = document.createElement("link"); 
    sslink.href = "../css/style.css";
    sslink.rel = "stylesheet";
    sslink.type = "text/css";
    document.head.appendChild(sslink);

    let favLink = document.createElement("link");
    favLink.rel = "shortcut icon";
    favLink.type = "images/x-icon";
    favLink.href = "../images/icon.ico";
    document.head.appendChild(favLink);
</script>

# Order.js

## About ##

Order.js is the first ES6 program (through the console) I have made that is hosted on GitHub through Git workflow. The person takes an order through a function call and the price is calculated based on what they ordered and how many items. 

<object width = "900" height = "270" data = "./README.html" type = "text/html"></object>

<form action = "">
    <label for = "orderType">Enter the type of food order: </label>
    <select name = "orderType" id = "orderType" required>
        <option value = "">--Select a type--</option>
        <option value = "pizza"> Pizza </option>
        <option value = "hotDog"> Hot Dog </option>
        <option value = "fries"> Fries </option>
        <option value = "drink"> Drink </option>
    </select> <br>
    <label for = "orderTopping">Enter your topping: </label>
    <input type = "text" name = "orderTopping"> <br> 
    <label for = "crustType">Enter your crust: </label>
    <input type = "text" name = "crustType"> <br>  
    <label for = "size">Enter the size: </label>
    <input type = "text" name = "size" required> <br>  
    <label for = "quantity">Enter your quantity: </label>
    <input type = "text" name = "quantity"> <br>  
    <label for = "drink"> Enter your drink </label>
    <input type = "text" name = "drink"> <br>
    <br>

<input type = "button" value = "Order" onclick = "showOrder()" />
<input type = "button" value = "+ Add Order" onclick = "duplicateForm()" />
</form> <br>

<div id = "writeroot" style = "height: 50vh; overflow: auto;" class = "highlight"> 
    <div class = "gt" id = "program"> </div>
</div>
<script src = "../scripts/orderIn.js"> </script>
<script src = "../scripts/order.js"> </script>

[Home](https://knowledgeablekangaroo.github.io)

## Attributions ##

### Favicon ###

<a target = "_blank" title = "By Pink Sherbet Photography from USA (Cheese and Pepperoni Pizza) [CC BY 2.0 
 (https://creativecommons.org/licenses/by/2.0
)], via Wikimedia Commons" href = "https://commons.wikimedia.org/wiki/File:Cheese_and_Pepperoni_Pizza_(4825046245).jpg"><img width="512" alt = "Cheese and Pepperoni Pizza (4825046245)" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Cheese_and_Pepperoni_Pizza_%284825046245%29.jpg/512px-Cheese_and_Pepperoni_Pizza_%284825046245%29.jpg"></a>

