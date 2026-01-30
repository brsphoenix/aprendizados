//criar  funcoes que soma dois numeros, retorna o maior e diz se pode votar

let resultado = somar(2, 15)
let maiorNum = maior(5 , 10)
let podeVotar = votar(19)


function somar(numA, numB){

    
return numA + numB

}

function maior(numA, numB){
if(numA >numB){
    return numA
  }
else{
    return numB
   }

}

function votar(idade){
if(idade >= 18){
return"pode votar"

}
else{
    return "não pode votar"
}

}

console.log(resultado)
console.log(maiorNum)
console.log(podeVotar)



