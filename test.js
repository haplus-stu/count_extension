'use strict';

let textarea = document.getElementById('inputarea');

function str() {
  let str = document.getElementById("inputarea").value;
  return str.replace(/\n+/g, "");
}


function number() {
  let max = document.getElementById('max-count').value;
  let counting_number = str().length;
  if (max != '' && 10 > max - counting_number) {
    textarea.classList.add('close_max_count');
  } else if (max != '' && 10 <= max - counting_number) {
    textarea.classList.remove('close_max_count');
  }

  if (counting_number >= 0) {
    document.getElementById("counter").innerHTML = counting_number + "文字";
  }
}


function count() {
  number();
}

textarea.onkeyup = function () {
  number();
}