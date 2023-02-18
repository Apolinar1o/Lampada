const img = document.getElementById("img")
const botao = document.getElementById("botao")
function ACENDER(value) {
   
    if (botao.textContent === "turn on the lights") {
        img.src = "./img/pic_bulbon.gif"
        botao.textContent = "turn of the lights"
    } else {
        img.src = "./img/pic_bulboff.gif"
        botao.textContent = "turn on the lights"
    }
    
}