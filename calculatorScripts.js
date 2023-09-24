let display = document.querySelector(".display")
let allClear = document.querySelector(".all-clear")
let clearLast = document.querySelector(".clear-last")
let list = document.querySelectorAll(".show-display")
let calculateButton = document.querySelector(".calculate")
let body = document.body;

function showDisplay(event){
    const x = event.target.innerHTML
    
    if (display.innerHTML == 0) {
        return display.innerHTML = x
    }
       return display.innerHTML += x    
}
function calculate(){
    let result ;
    result = eval(display.innerHTML)
    display.innerHTML = result
}
function lastClear(event){
    if (display.innerHTML.length == 1) {
        display.innerHTML=0
    }else{
        display.innerHTML = display.innerHTML.substring(0 , display.innerHTML.length-1)
    }
}

list.forEach(item => {
    item.addEventListener("click" , showDisplay)
});
calculateButton.addEventListener("click" , calculate)
allClear.addEventListener("click" , () => { display.innerHTML=0 })
clearLast.addEventListener("click" , lastClear)
body.addEventListener("contextmenu" , (e)=>{
    e.preventDefault();
})