// Create a new element and store it in a variable.
var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);

var textBox = document.createElement("input");
var submitBtn = document.createElement("button");

var inputEl = document.createElement("li");
inputEl.appendChild(textBox);
inputEl.appendChild(submitBtn);
submitBtn.textContent = "Add New Grocery Item"

var newPos = document.getElementsByTagName("ul")[0];
newPos.appendChild(inputEl);

function addItem(){
    var addEl = document.createElement("li");
    var userInput = textBox.value;
    var addText = document.createTextNode(userInput);
    console.log(userInput);
    addEl.appendChild(addText);

    var addPos = document.getElementsByTagName("ul")[1];
    addPos.append(addEl);
    console.log(addEl);

}

submitBtn.onclick = addItem();
