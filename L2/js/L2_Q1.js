"use strict";

var state = true;

function toggleLight() {
  var image = document.getElementById("image");
  state = !state;
  image.src = state ? "img/on.jpg" : "img/off.jpg";
}

var timeLeft = 0;
var id = 0;

function startCountDown() {
  // 沒有重新整理網頁的情況下,按下 start 要 reset 狀態
  if(!state) { // reset 到開燈狀態
    state = !state;
    document.getElementById("image").src = "img/on.jpg";
  }
  clearInterval(id); // 清掉計時器
  //
  var input = document.getElementById("input").value;
  if (isNaN(input)) { // 判斷是否為數字
    alert("內容需要是數字, 發出警告!");
    return;
  }
  timeLeft = parseInt(input);
  document.getElementById("timer").innerHTML = timeLeft;
  id = setInterval(countDownTimer, 1000);
}

function countDownTimer() {  
  timeLeft = timeLeft - 1;
  if (timeLeft <= 0) {
    document.getElementById("image").src = "img/off.jpg";
    state = false;
    clearInterval(id);
  }
  document.getElementById("timer").innerHTML = timeLeft;
}

