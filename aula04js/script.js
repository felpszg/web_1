function calcular(){
    soma.value = parseInt(valor1.value) + parseInt(valor2.value);

    sub.value = parseInt(valor1.value) - parseInt(valor2.value);
    
    divisao.value = parseInt(valor1.value) / parseInt(valor2.value);
    
    mult.value = parseInt(valor1.value) * parseInt(valor2.value);
}

function saudar(){
    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value.trim();

    if(nome && idade){
        document.getElementById("mensagem").innerText = `Olá! Meu nome é ${nome} e minha idade é ${idade} anos.`
    }else{
        document.getElementById("mensagem").innerText = "Por favor, preencha todos os campos."
    }
}