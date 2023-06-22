let name = document.getElementById("name");
let tags = document.querySelector(".tags");

function addName() {
    if (name.value==="") {
        return null;
    }
    let div = document.createElement("div");
    div.setAttribute("class","tag");
    div.innerText = `Hey I am ${name.value}`;
    tags.append(div);
}


let btn = document.querySelector("button")
btn.onclick = ()=>{
    addName();
}


// let tag = document.querySelector(".tag");
// tag.onclick = ()=>{
//     tag.style.display = "none"
// }