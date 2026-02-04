// criar um array de numeros, filtrar numeros pares, 
// somar os numeros ímpares, encontrar o maior valor


let numeros = [ 1,2,3,4,5,6,7,8,9,10]


for (let i = 0; i < numeros.length ; i++){

    console.log(numeros[i])
}


for (let par = 0; par < numeros.length; par++){


if (numeros[par] % 2 === 0){

    console.log(numeros[par])
}
else{}
}
let soma = 0
for (let imparSoma = 0; imparSoma < numeros.length; imparSoma++){

if (numeros[imparSoma] %2 !== 0){
soma = soma + numeros[imparSoma]
console.log(soma)
}

}


let maior = numeros[0];

for (let n = 0; n < numeros.length; n++){

if (numeros[n] > maior){
    maior = numeros[n]

}

}
console.log(maior)