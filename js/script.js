
var allProducts =document.querySelectorAll(".product li")
var div1 =document.querySelector("#div1")
var btn = document.querySelector("#showprice")
var div2 = document.querySelector("#div2")
var totalprice=0
  
allProducts.forEach(function (item) {
      item.onclick = function (){
          div1.innerHTML += item.textContent + "--- "
          totalprice +=  +(item.getAttribute ("price"))
          

          if(div1 != ""){
            btn.style.display = "block"
            btn.style.width = "150px"
            btn.style.hight = "60px"
            btn.style.fontsize = "23px"
            btn.style.color= "white"
            btn.style.backgroundColor = "blue"
            btn.style.borderRadius = "5px"
            
          }
      }
  })
btn.onclick=function(){
  div2.innerHTML= totalprice}

  