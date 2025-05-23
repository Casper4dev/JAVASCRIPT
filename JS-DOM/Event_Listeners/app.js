function welcome (){
    const container = document.querySelector(".box");
    const h1 = document.querySelector(".box > h1");
    h1.textContent = "Welcome User";
    h1.style.color = "red";
}


const btn = document.querySelector(".content button");

btn.onclick = function(){
    alert("Button clicked");
}

function hoverMe(){
    btn.style.backgroundColor = "yellow";
}

btn.addEventListener('mousehover', hoverMe);
btn.addEventListener('mouseout', ()=>{
    this.style.backgroundColor ="red";
});