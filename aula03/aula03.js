"use strict";

if (true) {
    var nome = "Rosemere";
}
 console.log(nome); // esta linha imprime "Rosemere" 
 // porque a variável foi declarada com var, que tem escopo 
 // de função ou global, não de bloco.

 /* 
quando usamos let ou const, a variável tem escopo de bloco, ou seja, só existe dentro do bloco onde foi declarada.
Se tentarmos acessar uma variável declarada com let ou const fora do bloco, receberemos um erro de referência.
Exemplo:*/

if (true) {
    let nomeLet = "Rosemere Let";
    const nomeConst = "Rosemere Const";
}   
//console.log(nomeLet); // Isso causaria um erro de referência, pois nomeLet não está definido fora do bloco if.
// console.log(nomeConst); // Isso também causaria um erro de referência, pois nomeConst não está definido fora do bloco if.

const curso = "JavaScript";
// curso = "Python"; // Isso causaria um erro, pois não podemos reatribuir uma variável declarada com const. Uma vez declarada, ela não pode ser alterada.