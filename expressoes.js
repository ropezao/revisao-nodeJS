// A expressão de função contuma ficar mais curta,
// No segumdo exemplo foi chamada a função como se fosse uma variavel, apresentando um erro, fazendo a leitura antes da declaração(Hoisting)

const divisao = function(n1, n2){return n1 / n2 }   // Primeiro exemplo 
console.log(divisao(50, 2))


//console.log(divisao(50, 2))                   // Segundo exemplo 
//const divisao = function(n1, n2){return n1 / n2 }