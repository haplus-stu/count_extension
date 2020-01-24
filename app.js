'use strict';
function str() {
   let str = document.getElementById("inputarea").value;
   return str.replace(/\n+/g,"");
  }


 function number() { 
  let counting_number = str().length;
  if(counting_number >= 0){
    document.getElementById("counter").innerHTML = counting_number+"文字";
 }
}


function count(){
  number();
}
