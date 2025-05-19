const soma = function(a,b){
    return a + b;
}
console.log (soma(5,9));


const pessoa = {
    nome: "felipe",
    idade: 18,
    email: "grayy.fefe@gmail.com",
    saudar: function(){
    return "Oi, meu nome  "+this.nome+" e esse é meu email:"+this.email+ ".";
    }
}

console.log(pessoa.nome);
console.log(pessoa.saudar());