// let words;
// const input = document.getElementById("numOfWords");
// const container = document.querySelector(".container");

// const generateWord = (n)=>{
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let text ="";

//     for(let i=0; i<n; ++i){
//         let random = (Math.random()*(letters.length-1)).toFixed(0)
//         text += letters[random].toLowerCase();
//     }
//     return text;
// }


// function generatePara() {
//     words = Number(input.value);
//     let ranText ="";
//     let para = document.createElement('p');
    
//     for(let i=0; i<words;++i){
//         const randomNumber = (Math.random()*15).toFixed(0);
//         ranText += generateWord(randomNumber)+" ";
//     }
//     para.innerText += "ranText";
//     para.setAttribute("class","paras");

//     container.append(para);
// }

// const btn = document.querySelector("button");
// btn.onclick = ()=>{
//     generatePara();
// }









let container = document.querySelector(".container");
const input = document.getElementById("numOfWords");
const btn = document.querySelector("button");


function generateWord(n) {
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let text = ""
    
    for(let i=0; i<n; ++i){
        let random = (Math.random()*(letter.length-1)).toFixed(0);
        text += letter[random].toLowerCase();
    }
    return text;
}



function generatePara() {
    const word = Number(input.value);
    let data = ""

    for(let i=0; i<word; ++i){
        let random = (Math.random()*15).toFixed(0);
        data += generateWord(random)+" ";
    }


    let para = document.createElement("p");
    para.setAttribute("class","paras");
    para.innerText = data;
    container.appendChild(para);
}

btn.onclick = ()=>{
    generatePara();
    // generateWord(10)
}