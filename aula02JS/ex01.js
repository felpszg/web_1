let x =10;
const y = 20;
var z = 30;

if(true){
    let x =100; //diferenla do x de fora
    var z = 300; //sobrescreve o z de fora
    console.log("dentro do bloco: ", x, y, z);
}
console.log("fora do bloco: ", x, y, z);