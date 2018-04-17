"use strict";

function validate() {
  // div, p 內容用 .innerHTML 取得
  // input 內容用 .value 取得
  var code = document.getElementById("nric").value;
  if (code == "") {
    alert("內容是空的, 發出警告!");
  } else if (!isNaN(code)) { // is not a number
    alert("內容不能是數字, 發出警告!");
  } else if (code.length != 10) {
    alert("內容的長度不正確, 發出警告!");
  } else {
    switch(code[1]){
      case '1':
        document.getElementById("result").innerHTML = "身分證字號為男";
        break;
      case '2':
        document.getElementById("result").innerHTML = "身分證字號為女";
        break;
      default:
        document.getElementById("result").innerHTML = "見鬼了，你是間諜吧";
    }
  }
}