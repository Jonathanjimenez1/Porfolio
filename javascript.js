var menu=document.querySelector("#movil");
var header=document.querySelector("header");


menu.addEventListener("click", function () {
    menu.classList.toggle("fa-times");
    header.classList.toggle("activo");
   
    
});

window.onscroll = () =>{
    menu.classList.remove("fa-times");
     header.classList.remove("activo");
}

var puntero1= document.querySelector(".puntero-1");
var puntero2= document.querySelector(".puntero-2");

window.onmousemove = (e) =>{
    puntero1.style.top = e.pageY + "px";
    puntero1.style.left = e.pageX + "px";
    puntero2.style.top = e.pageY + "px";
    puntero2.style.left = e.pageX + "px";

}