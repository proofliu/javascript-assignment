"use strict";

function createToDo() {
  var todo = document.createElement("div");
  var span = document.createElement("span");
  var replaceButton = document.createElement("button");
  var removeButton = document.createElement("button");

  var input = document.getElementById("input").value;
  if(input == "") {
    input = "廢文一篇";
  }
  span.innerHTML = input;
  todo.appendChild(span);

  replaceButton.onclick = function() {
    var input = document.getElementById("input").value;
    if( input == "" ) {
      alert("你並沒有輸入任何文字");
      return;
    }
    this.parentNode.firstChild.innerHTML = input;
    document.getElementById("input").value = "";
  }
  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);

  removeButton.onclick = function() {
    var sure = window.confirm("是否確定完成？");
    if(sure) {
      this.parentNode.parentNode.removeChild(this.parentNode);
    }
  }
  removeButton.textContent = "V";
  todo.appendChild(removeButton);

  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";
}