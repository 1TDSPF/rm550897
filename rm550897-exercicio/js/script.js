// // DIFERENÇA ENTRE LET/VAR/CONST
// // var nome = "Kayque";
// // if(nome == "Kayque"){
// //     let nome = "Denise";
// // }
// // console.log(nome);

// //  Recuperando um elemento button que está no index.html
// //  const btn  = document.getElementById("meu-btn");
 
// //  //Atrelando um evento de click ao button que foi recuperado.
// //  btn.addEventListener("click" , function(){

// //     //Função Matemática - Math
// //     //randon = gera números aleatórios enre 0 e 1. Ex: 0.232323;
// //     //floor  = arredonda o número para baixo.
// //     //ceil   = arredonda o número para cima.
// //     //round  = arredonda o número aleatóriamente.
// //     let r,g,b;

// //     r = Math.round(Math.random() *255);
// //     g = Math.round(Math.random() *255);
// //     b = Math.round(Math.random() *255);

// //     //Adicionando um atributo ao elemeno button
// //     // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
// //     this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

// //  } );


// // //DESAFIO
// // //Recupere o elemento tit-sec e atrele a ele um evento de mmouse a sua escolha.
// // // Altere a cor de fundo e a cor do texto quando o evento ocorer.
// // // const h2Element = document.getElementById("meu-tit");
// // // // console.log(h2Element);

// // // h2Element.addEventListener("click", function(){
// // //     this.setAttribute("style", `background-color:#ff0000;color:#fff;`);
// // // });

// // const h2Element = document.querySelector("h2");
// // // console.log(h2Element);

// // h2Element.addEventListener("click", function(){
// //     this.setAttribute("style", `background-color:#ff0000;color:#fff;`);
// // });


// //Declarando um array
// let frutas = ["maçã","laranja","banana","uva","kiwi","caqui"];
// //Imprimindo o array
// console.log(frutas);
// //Para verificar o tamanho do array utilizamos a propriedade length
// console.log("Tamanho do Array " + frutas.length);
// //Imprimindo um item especifico do array.
// console.log("Pegando um dos itens do Array : " + frutas[0]);
// console.log("Pegando um dos itens do Array : " + frutas[1]);
// console.log("Pegando um dos itens do Array : " + frutas[2]);
// console.log("Pegando um dos itens do Array : " + frutas[3]);
// console.log("Pegando um dos itens do Array : " + frutas[4]);
// console.log("Pegando um dos itens do Array : " + frutas[5]);

// //Iterando o array com estruturas de repetição:
// //forEach
// frutas.forEach( (fruta)=>{
//     console.log("Pegando um dos itens do Array com forEach: " + fruta);
// } );

// //Adicionado um item ao final do array com o método push(item);
// frutas.push("melão");
// console.table(frutas);

// //Adicionando um item no inicio do array com o metodo unshift(item);
// frutas.unshift("melancia");
// console.table(frutas);

// //Removendo um item do final do array com o metodo pop();
// frutas.shift();
// console.table(frutas);

// //Removendo um iten do inicio do array com o metodo pop();
// frutas.shift();
// console.table(frutas);

// //Localizando um determinado item dentro do arra com o metodo indexOf(item);
// //let indice = frutas.indexOf("banana");
// //console.log("INDICE ONDE FOI LOCALIZADO O ITEM : " + indice);
// //console.log("ITEM QUE FOI LOCALIZADO NO ARRAY : " +  frutas[indice]);

// //Utilizando os metodos, slice(indiceItem, quantidadeRemocoes) para remover um item do array passando sua localizacao atraves do indice.
// //Localizando um determinando item dentro do array com o metodo indexOf(item);
// let indice = frutas.indexOf("banana");
// console.log("ITEM QUE ESTAVA NO LOCAL ANTES DA REMOCAO : " + frutas[indice]);
// frutas.splice(indice,2);
// console.log("ITEM QUE FICOU NO LOCAL APOS A REMOCAO : " + frutas[indice])