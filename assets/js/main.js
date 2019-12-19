const form = document.querySelector('#form')
const resultado = peso / (altura ** 2)

// função de clicar no botão cancelar evento e mostrar evento na pagina
form.addEventListener('submit', function(e){
    event.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputaltura = e.target.querySelector('#altura')
    const peso = Number(inputPeso.value)
    const altura = Number(inputaltura.value)
  
    if (!peso){
     setResultado('peso Invalido', false)
     return
    }
    
    if(!altura){
        setResultado('Altura Invalido', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`
    setResultado(msg, true);
})


// mostrar resultado
function setResultado(msg, isValid){
    const resultadoHtml = document.querySelector('#resultado')
    resultadoHtml.innerHTML = ''
    const p = criaP()
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else{
        p.classList.add('bad')
    }
    p.innerHTML = msg
    resultadoHtml.appendChild(p)

}

// criar paragrafo
function criaP(){
    const p = document.createElement('p');
    return p
}

// calcular imc
function getImc(peso, altura){
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

// verificar nivel de imc
function getNivelImc(imc){
    const nivel = ['baixo do peso', 'peso normal', 'sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3' ]
   
    if(imc >= 39.9) { 
        return nivel[5]
    }
    
    if(imc >=34.9){
        return nivel[4]
    }

    if(imc >= 29.9){
        return nivel[3]
    }

    if (imc >= 24.9 ){
        return nivel[2] 
    }

    if (imc >= 18.5)
    {
     return nivel[1]
    } 

    if (imc < 18.5){
      return  nivel[0]
    }    
   
}


