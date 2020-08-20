//CONSTANTS
const addTask_div = document.getElementById("add");
const clearAll_div = document.getElementById("clear");
const taskList_ul = document.querySelector("list");
//
//RUNS AT START
createX()
removeTask()
//
// ADD TASKS
function addTask() {
    var txt;
    var task = prompt("Please enter task:", "");
    txt = task;
    var li = document.createElement("li");
    var t = document.createTextNode(txt);
    li.appendChild(t);
    document.getElementById("list").appendChild(li);
}
//
// REMOVE TASKS
function removeTask() {
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
//
// CLEAR ALL TASKS
function clear() {
    document.getElementById("list").innerHTML = "";
}
//
// CREATING X
function createX() {
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}
function createSingleX() {
    var myNodelist = document.getElementsByTagName("LI");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[myNodelist.length-1].appendChild(span);
}
//
//ON BUTTON CLICK
addTask_div.addEventListener('click', function() {
    addTask()
    createSingleX()
    removeTask()
})
//ON TRASH CLICK
clearAll_div.addEventListener('click', function() {
    clear()
})
function myFunction() {
    console.log("nice")
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
//