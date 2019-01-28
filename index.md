<script src = "https://cdn.jsdelivr.net/gh/KnowledgeableKangaroo/KnowledgeableKangaroo.github.io/script.js"></script>

# Singh Catering Services

## About ##

Order.js is the first ES6 program (through the console) I have made that is hosted on GitHub through Git workflow. The person takes an order through a function call and the price is calculated based on what they ordered and how many items. 

<object width = "900" height = "270" data = "README.html" type = "text/html"></object>
<div id = "forms" style = "border-color: rgba(27, 63, 68, 0.2); border-width: 1px; border-style: inset; padding: 2%; margin: 2%">
    <form>
        <label for = "orderType">Enter the type of food order: </label>
        <select onchange = "enableFields(this); removeUnnecessary(this.parentNode);" name = "orderType" id = "orderType" required>
            <option value = "">--Select a type--</option>
            <option value = "pizza"> Pizza </option>
            <option value = "hotDog"> Hot Dog </option>
            <option value = "fries"> Fries </option>
            <option value = "drink"> Drink </option>
            <option value = "burger"> Burger </option>
        </select> <br>
        <label for = "orderTopping">Enter your topping: </label>
        <select class = "pizza" disabled id = "orderTopping" name = "orderTopping">
            <option value = "">--Select a Topping--</option>
            <option value = "pepperoni"> Pepperoni </option>
            <option value = "mushroom"> Mushroom </option>
            <option value = "veggie"> Vegetable </option>
            <option value = "sausage"> Sausage </option>
            <option value = "anchovy"> Anchovy </option>
            <option value = "sun-dried"> Sun Dried Tomatoes </option>
            <option value = "fresh-basil"> Fresh Basil </option>
            <option value = ""> None </option>
        </select> <br>
        <label for = "crustType">Enter your crust: </label>
        <input class = "pizza" disabled type = "text" name = "crustType"> <br>  
        <label for = "size">Enter the size: </label>
        <input class = "pizza fries drink" disabled type = "text" name = "size"> <br>  
        <label for = "quantity">Enter your quantity: </label>
        <input class = "pizza hotDog fries drink burger" disabled type = "number" name = "quantity" min = "1" max = "30" value = "1"> <br>  
        <label for = "drink">Enter your drink: </label>
        <input class = "drink" disabled type = "text" name = "drink"> <br>
        <label for = "condiments">Enter your condiments: </label>
        <select class = "hotDog burger fries" disabled name = "condiments" id = "condiments">
            <option value = "">--Select a condiment--</option>
            <option value = "Ketchup"> Ketchup </option>
            <option value = "Mustard"> Mustard </option>
            <option value = "Relish"> Relish </option>
            <option value = "Chili"> Chili </option>
        </select> <br>
        <label for="doneness">How do you want your patty cooked? </label>
        <span>Rare</span>
        <input disabled type="range" class = "burger" name="doneness" id="doneness" value="3" min="1" max="5">
        <span>Well-Done</span> <br>
        <input type = "button" value = "Remove Order" onclick = "removeOrder(this)">
    </form>
    <input id = "writeroot" type = "button" value = "+ Add Order" onclick = "duplicateForm()" />
    <input id = "finish-order" disabled type = "button" value = "Finish Order" onclick = "orderAll()">
</div>
<div style = "height: 50vh; overflow: auto;" class = "highlight"> 
    <div class = "gt" id = "program"> </div>
</div>

<script src = "scripts/helperFunctions.js"></script>
<script src = "scripts/orderIn.js"></script>
<script src = "scripts/order.js"></script>

[Home](https://knowledgeablekangaroo.github.io)

## Attributions ##

### Favicon ###

<a target = "_blank" title = "By Pink Sherbet Photography from USA (Cheese and Pepperoni Pizza) [CC BY 2.0 
 (https://creativecommons.org/licenses/by/2.0
)], via Wikimedia Commons" href = "https://commons.wikimedia.org/wiki/File:Cheese_and_Pepperoni_Pizza_(4825046245).jpg"><img width="512" alt = "Cheese and Pepperoni Pizza (4825046245)" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Cheese_and_Pepperoni_Pizza_%284825046245%29.jpg/512px-Cheese_and_Pepperoni_Pizza_%284825046245%29.jpg"></a>

