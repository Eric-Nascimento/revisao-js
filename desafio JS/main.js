alert("Hello World!")

alert("Digite dois números para fazermos a adição entre eles:")
let n1 = (Number (prompt("Digite o primeiro número:")))
let n2 = (Number (prompt("Digite o segundo número:")))

let soma = n1 + n2;

alert(`A soma de ${n1} e ${n2} é: ${soma}!`)



let variavel = prompt("Digite uma variavel:");


if (typeof parseFloat(variavel) === `number` && !isNaN(variavel)){
    alert(`Você digitou ${variavel}, o tipo de dado inserido é um número!`);
}else{
    alert(`Você digitou ${variavel}, o tipo de dado inserido não é um número!`);
}




let variavel2 = prompt("Digite alguma coisa de novo:")

if (typeof parseFloat(variavel2) === `number` && !isNaN(variavel2)){
    alert(`Você digitou ${variavel2}, o tipo de dado inserido não é uma string!`)
}else{
    alert(`Você digitou ${variavel2}, o tipo de dado inserido é uma string!`)
}


let variavel3 = prompt("Digite alguma coisa novamente:");

variavel3 = variavel3.toLocaleLowerCase();

if(variavel3 === `false` || variavel3 === `true`){
    alert(`Você digitou ${variavel3}, o tipo de dado inserido é um boolean!`);
}else{
    alert(`Você digitou ${variavel3}, o tipo de dado inserido não é um boolean!`);
}


alert("Digite dois números para fazermos a subtração entre eles:")

 n1 = (Number (prompt("Digite o primeiro número:")))
 n2 = (Number (prompt("Digite o segundo número:")))

let sub = n1 - n2;

alert(`A subtração de ${n1} - ${n2} é: ${sub}!`)



alert("Digite dois números para fazermos a multiplicação entre eles:")

 n1 = (Number (prompt("Digite o primeiro número:")))
 n2 = (Number (prompt("Digite o segundo número:")))

let mult = n1 * n2;

alert(`A multiplicação de ${n1} por ${n2} é: ${mult}!`)


alert("Digite dois números para fazermos a divisão entre eles:")

 n1 = (Number (prompt("Digite o primeiro número:")))
 n2 = (Number (prompt("Digite o segundo número:")))

let div = n1 / n2;

alert(`A divisão de ${n1} por ${n2} é: ${div.toFixed(2)}!`)


alert("Digite um número para sabermos se ele é par:")

let n = (Number (prompt("Digite o número:")))

if(n % 2 === 0){
    alert("É um número par")
}else{
    alert("Não é um número par")
}




alert("Digite um número para sabermos se ele é impar:")

n = (Number (prompt("Digite o número:")))

if(n % 2 !== 0){
    alert("É um número impar")
}else{
    alert("Não é um número impar")
}
