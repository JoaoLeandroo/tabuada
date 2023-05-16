const inputNumber = document.querySelector(".inputNumber");
const button = document.querySelector(".entrada-numbers button");
const buttonReset = document.querySelector(".reset")
let saidaDados = document.querySelector(".saida-resultado");

button.onclick = function() {

    if(inputNumber.value === ''){
        alert("Campo Vazio, insira um valor valido!")
    }else if(inputNumber.value < 1 || inputNumber.value > 10){
        alert("Os valores devem ser entre 1 e 10.")
    }else{
        saidaDados.innerHTML = ''
        saidaDados.style.backgroundColor = '#8000FF'
        for(let i=1; i <= 10; i++) {
            saidaDados.innerHTML += `${inputNumber.value} x ${i} = ${inputNumber.value*i}</br>`
        }
        buttonReset.style.display = 'block'
    }
}

buttonReset.onclick = function() {
    saidaDados.innerHTML = '';
    inputNumber.value = ''
    saidaDados.style.backgroundColor = 'transparent'
    buttonReset.style.display = 'none'
}