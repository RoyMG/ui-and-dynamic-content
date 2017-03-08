var list = document.querySelector("ul");
var addButton = document.querySelector("button");

function addTask() {
    var newItem = prompt("Enter a new task to the list!");
    console.log(newItem);
    while(newItem == ""){
        newItem = prompt("Enter a new task to the list!");
    }
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(newItem));
    list.appendChild(item);
}

function test() {
    list.removeChild(itemClick);
    //remove timeout
    timeID = window.clearTimeout(timeID);
}

function deleteItem(ev) {
    var itemClick = ev.target;
    console.log(itemClick.tagName);
    if (itemClick.tagName == "LI") {
        itemClick.className += " deleteItem";

        //	list.removeChild(itemClick);
        function test() {
            list.removeChild(itemClick);
            //remove timeout
            timeID = window.clearTimeout(timeID);
        }
        var timeID = window.setTimeout(test, 1800);
    }
}

list.addEventListener("click", deleteItem, false);
addButton.addEventListener("click", addTask, false);