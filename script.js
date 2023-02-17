var body = document.body;
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

var buttonDiv = document.createElement("div"); 
var textBox = document.createElement("input");
var submitBtn = document.createElement("button");
buttonDiv.appendChild(textBox);
buttonDiv.appendChild(submitBtn);
submitBtn.textContent = "Add New Grocery Item"
body.appendChild(buttonDiv);

var newPos = document.getElementsByTagName("ul")[0];
newPos.appendChild(inputEl);

var addEl = document.createElement("li");
var userInput = textBox.value;
var addText = document.createTextNode(userInput);

submitBtn.addEventListener("click", addItem)

function addItem(){
    var addPos = document.getElementsByTagName("ul")[0];
    var addEl = document.createElement("li");
    var userInput = textBox.value;
    var addText = document.createTextNode(userInput);
    //console.log(userInput);
    addEl.appendChild(addText);

    console.log(addPos);
    addPos.appendChild(addEl);

}


