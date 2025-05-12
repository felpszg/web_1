function saudacao(nome){
    return "ola "+ nome + " seja bem vindo!!!!!"
}
console.log(saudacao("Felipe"));

function conta(num1,num2){
    console.log("soma: ", num1+num2);
    console.log("subtração: ", num1-num2);
    console.log("multiplicação: ", num1*num2);
    console.log("divisão: ", num1/num2);
    console.log("resto da divisão: ", num1%num2);
    console.log("potenciação: ", num1 ** num2);
}
conta(2,3)