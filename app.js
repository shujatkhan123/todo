
var a = document.getElementById("main");
var b = document.getElementById("inp")

function num(){

    var newElement = document.createElement("P");
    var text = document.getElementById("inp").value
    text = document.createTextNode(text);
    newElement.appendChild(text);
    a.appendChild(newElement)


    var ebtn = document.createElement("BUTTON");
    var etext = document.createTextNode("Edit")
    ebtn.appendChild(etext)
    ebtn.setAttribute("onclick", "editTodo(this)");
    a.appendChild(ebtn);
    b.value = ""
    newElement.appendChild(ebtn)

    
    var dbtn = document.createElement("BUTTON");
    var dtext = document.createTextNode("delete");
    dbtn.appendChild(dtext);
    dbtn.setAttribute("onclick","deleteTodo(this)")
    newElement.appendChild(dbtn);

    ebtn.className = "ebtn"
    dbtn.className = "dbtn"
    newElement.className = "new"
}


function deleteTodo(e){
    e.parentNode.remove()
}


function editTodo(e){

    e.parentNode.firstChild.nodeValue = prompt("Enter a Value")

}

function removeAll(){

    a.innerHTML = ""
}





