let zodiac = document.getElementById("zodiac");
const body = document.body;

function changeBackground() {
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "red";
            break;
        case "tarus":
            body.style.backgroundColor = "yellow";
            break;
        case "gemini":
            body.style.backgroundColor = "green";
            break;
        case "cancer":
            body.style.backgroundColor = "skyblue";
            break;
        case "leo":
            body.style.backgroundColor = "pink";
            break;
        case "virgo":
            body.style.backgroundColor = "orange";
            break;
        case "libra":
            body.style.backgroundColor = "purple";
            break;
        case "scorpio":
            body.style.backgroundColor = "yellowgreen";
            break;
        case "sagittarius":
            body.style.backgroundColor = "indigo";
            break;
        case "capricorn":
            body.style.backgroundColor = "brown";
            break;
        case "aquarius":
            body.style.backgroundColor = "grey";
            break;
        case "pisces":
            body.style.backgroundColor = "magenta";
            break;
    
        default: backgroundColor = "white";
            break;
    }
    
}


let btn = document.querySelector("button");
btn.onclick = ()=>{
    console.log("btn clicked")
    changeBackground()
}