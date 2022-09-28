let overlay=document.querySelector(".overlay")
let popbox=document.querySelector(".popup-box")
let ul=document.querySelector(".h_menu")

ul.addEventListener('click',removeBox)


overlay.addEventListener('click',removeBox)
function popup(){
    document.querySelector(".popup-box").classList.toggle("active-popbox") 
    document.querySelector(".overlay").classList.toggle("active-overlay")   
}

function removeBox(){
    popbox.classList.remove("active-popbox") 
    overlay.classList.remove("active-overlay") 
}
window.onresize=function(){
    console.log(window.innerWidth)
    if(window.innerWidth>550){
    removeBox()
    }
}
