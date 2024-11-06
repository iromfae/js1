function find_edit(){
    const item  = document.getElementById('new')
    console.log(item.innerText)
    item.innerHTML="<b>Alpatova</b>"
}
function find_edit1(){
    const item  = document.getElementById('new1')
    console.log(item.innerText)
    item.innerHTML="<b>Elizaveta</b>"
}
function find_edit2(){
    const item  = document.getElementById('new2')
    console.log(item.innerText)
    item.innerHTML="<b>Alexeevna</b>"
}
function find_edit3(){
    const item  = document.getElementById('new3')
    console.log(item.innerText)
    item.innerHTML="<b>31.11.1931</b>"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)
const node_for_click1 = document.getElementById("for_click")
node_for_click1.addEventListener("click",find_edit1)
const node_for_click2 = document.getElementById("for_click")
node_for_click2.addEventListener("click",find_edit2)
const node_for_click3 = document.getElementById("for_click")
node_for_click3.addEventListener("click",find_edit3)