let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

for (let i = 0; i < btn.length; i++) {
 
    btn[i].addEventListener("click", function () {
      if (this.innerHTML == "=") {
        if(value.innerHTML != ""){
          value.innerHTML = eval(value.innerHTML);
        }
       
        else{
          alert("please enter value...")
        }
      
      } else if (this.innerHTML == "Del") {
        value.innerHTML = value.innerHTML.substring(0,value.innerHTML.length-1);
      }

       else if (this.innerHTML == "Clear") 
       {
          value.innerHTML = "";
       }
          else{
            value.innerHTML += this.innerHTML;
          }
    });
  }
  

toggleBtn.onclick = function () {
  body.classList.toggle("dark");
};