"use strict";

let resetSW = false;

$("#select").click(function() {
  $("#html").select();
});

$("#convert").click(function() {
  let checkSW = new Array();
  let cb = document.op.checkBox;

  for (let i = 0; i < cb.length; i++) {
    if (cb[i].checked) {
      checkSW[i] = true;    
      console.log(cb[i].value + "が選択されました。");
      console.log(checkSW);
    } else {
      checkSW[i] = false;    
    }
  }

  let sourceText = document.getElementById("source").value;
  let result = sourceText;

  // 文字実体参照処理

  if (checkSW[0] === true) {
    result = result.replace(/"/g, "&quot;");
  }

  if (checkSW[1] === true) {
    result = result.replace(/&/g, "&amp;");
  }

  if (checkSW[2] === true) {
    result = result.replace(/</g, "&lt;");
  }

  if (checkSW[3] === true) {
    result = result.replace(/>/g, "&gt;");
  }

  // 改行処理
  if (checkSW[4] === true) {
    result = result.replace(/\n/g, "<br>\n");
  }
  
  console.log(result);
  $("#html").val(result);

});

$("#reset").click(function() {
  // 値を設定
  $("#source").val("");
  $("#html").val("");
});

