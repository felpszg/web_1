function saudar(event){
    event.preventDefault(); //impede o reload da página

    //captura os dados do formulário
    const form = event.target;
    const nome = form.nome.value.trim();
    const idade = form.idade.value.trim();

    //mostrar a mensagem
    const mensagem = `Olá Meu nome é ${nome} e minha idade é ${idade}.`;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = mensagem; 
}