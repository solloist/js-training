let second = document.querySelector("#second");
second.addEventListener("keyup", foo);

function foo(){
    let a = document.querySelector("#first").value;
    let b = document.querySelector("#second").value;
    let p = document.createElement("p");
    p.textContent = `${Number(a) + Number(b)}`;
    let div = document.querySelector("#par");
    div.appendChild(p);
    second.removeEventListener("keyup", foo);
}