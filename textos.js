//Manipulação de texto
//• Contar palavras
//• Contar letras
//• Verificar palindromo


let palavra = "Eu gosto de programar"

const separa = palavra.split(" ")

console.log(separa.length)


let letras = palavra.replace(/\s+/g, "").length
console.log(letras)

let pali = "radar"

pali = pali.toLowerCase();

pali = pali.replace(/\s+/g, "");

let invertida = pali.split("").reverse().join("");





if (pali === invertida) {
    console.log("É palíndromo");
} else {
    console.log("Não é palíndromo");
}
