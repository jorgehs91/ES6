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
// function test(valueA,valueB = 4){
//     return valueA + valueB;
// }
// console.log(test(5))

//###################################
// Listar Registros com ForOF
// var list = ["test",34,{name:"Jorge"}];

// for (var i in list){
//     // console.log(list[i]);
// }
// for (var i of list){
//     console.log(i);
// }

//###################################
// Trabalhando com Herança
// class People{
//     constructor(name,email,phone){
//         this.name = name;
//         this.email = email;
//         this.phone = phone;
//     }
//     toString(){
//         return `Name: ${this.name}
//         Email: ${this.email}
//         Phone: ${this.phone}`;
//     }
// }
// class Client extends People{
//     constructor(id,name,email,phone){
//         super(name,email,phone);
//         this.id = id;
//     }
//     toString(){
//         return `
//         id: ${this.id}
//         ${super.toString()}`;
//     }
// }
// var test = new Client(5,'Jorge','jorgehs_lol@hotmail.com','99709809');
// console.log(test.toString());

//###################################
//Set data structure
// let color = new Set();
// color.add("red").add("blue").add("red");

// if(color.size === 2 && color.has("red")){
//     for(let key of color.values())
//         console.log(key);
// }
// console.log(color.values());

//###################################
//Formatação de números
// var number = 1234141.34;
// var En = new Intl.NumberFormat('en-US').format(number);
// var De = new Intl.NumberFormat('de-DE').format(number);
// console.log(En);
// console.log(De);

//####################################
//Formatando Moedas
// var USD = new Intl.NumberFormat('en-US', { style:'currency', currency:'USD' });
// var BRL = new Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL' });

// console.log(USD.format(2212121.44));
// console.log(BRL.format(43424.22));

//####################################
//Formatando Datas
// var US = new Intl.DateTimeFormat("en-US");
// var BR = new Intl.DateTimeFormat("pt-BR");

// console.log(US.format(new Date("1991-07-29")));
// console.log(BR.format(new Date("1991-07-29")));

//####################################
//Busca em Strings
