const showdisplay = document.querySelector(".display")

function numbershandler (event){
    const showbox = showdisplay.innerHTML
    const number = event.target.innerText
    const oper = event.target.id
    if (showbox == 0 && oper == "a1"){
        return showdisplay.innerText+=number   
    }if (showbox == 0 && oper == "a2"){
        return showdisplay.innerText+=number
    }else if (showbox == 0 && showbox.substring(showbox.length-1) == "."){
        return showdisplay.innerText+=number
    }else if (showbox == 0){
        return showdisplay.innerHTML=number
    }
    return showdisplay.innerHTML+=number
}


function calculater(){
    let showbox = showdisplay.innerHTML 
    showdisplay.innerHTML = eval(showbox)
}


function allClear(){
    showdisplay.innerHTML = 0
}

function clearlast(){
    let showbox = showdisplay.innerHTML
    if (showbox.length === 1){
        showdisplay.innerHTML = 0
    }else {
        showdisplay.innerHTML = showbox.substring(0,showbox.length-1)
    }
}

document.querySelector(".calculate").addEventListener("click",calculater)

document.querySelector(".all-clear").addEventListener("click",allClear)
document.querySelector(".clear-last").addEventListener("click",clearlast)

const numbers = document.querySelectorAll(".show-display")

numbers.forEach(event=>{
    event.addEventListener("click",numbershandler)
})