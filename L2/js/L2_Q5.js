"use strict";

function createToDo() {
  var todo = document.createElement("div");
  var span = document.createElement("span");
  var replaceButton = document.createElement("button");
  var removeButton = document.createElement("button");

  // 處理 todo 名稱
  var input = document.getElementById("input").value;
  if(input == "") {
    input = "廢文一篇";
  }
  span.innerHTML = input;
  // 處理名稱顏色
  var option = document.getElementById("option");
  span.style.color = option.checked? "red" : "#2F4F2F";
  // 將名稱加入 todo 
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
      span.style = "text-decoration:line-through";
      span.style.color = "gray";
      this.parentNode.removeChild(replaceButton);
      this.parentNode.removeChild(this);
      // this.parentNode.parentNode.removeChild(this.parentNode);
    }
  }
  removeButton.textContent = "V";
  todo.appendChild(removeButton);

  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";
}