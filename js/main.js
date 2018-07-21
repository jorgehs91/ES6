"use strict";

//###################################
// // Classe JS
// class Color{
//     constructor(codeColor,nameColor){
//         this.codeColor = codeColor;
//         this.nameColor = nameColor;
//     };
//     getColor(){
//         return {codeColor:this.codeColor, nameColor:this.codeColor};
//     };
// }

// let red = new Color("red","Red");

// console.log(red.getColor());

//###################################
// // String Template
// let name = "Jorge";
// let age = 27;
// let text = `
//     Nome: ${name}
//     Idade: ${age}
// `;
// console.log(text);

//###################################
// Valores Default -- define um valor default para o parametro
// na declaração da função
function test(valueA) {
    var valueB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    return valueA + valueB;
}
console.log(test(5));
