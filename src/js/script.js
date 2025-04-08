// // DECLARAÇÔES DE VARIÁVEIS

// var nome ="Fiap";
// console.log(nome)

// let idade = 20;
// console.log(idade)

// const sobrenome = "Tavares";
// console.log(sobrenome)

// // undefined
// let aula;
// console.log(aula)
// // null
// let valor = null;
// console.log(valor)
// // Objeto
// let exemplo1={};
// // Array
// let exemplo2=[];


// // TIPOS DE VARIAVEIS
// let exemplo3  = 10;
// console.log(typeof exemplo3)

// // CONVERSÕES

// // float => inteiro -- parseInt

// let numFloat = 123.456;
// console.log(parseInt(numFloat));

// // String =--> float -- parseFloat

// let numString = "547.987"
// console.log(parseFloat(numString))

// // float --> String -- toString

// let numFloat2 = 554.665;
// console.log(numFloat2.toString());


// let numInt = 100;
// console.log(numInt.toString())


// // MÉTODOS PARTE 1

// // length --> verifica o tamanho da string

// let frase = "O mundo da tecnologia";
// console.log(frase.length)

// // indexOf --> retorna um trecho de um texto

// let texto = "Programação sustentável"
// console.log(texto.indexOf("g"))

// // slice -->  retorna parte de um texto, apontando o inicio e o final

// let info = "processamento de ponta";
// console.log(info.slice(15,20))

// // OPERADORES ARITIMÉTICOS

// const num1 = 10;
// const num2 = 20;

// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1/num2)

// //OPERADORES LÓGICOS 

// const num3 = 20;
// const num4 = 30;

// console.log(num3 > num4)
// console.log(num3 < num4 && num4 < 50)
// console.log(num3 > num4 || num4 > num3)
// console.log(num3 == num4 || num4 <= num3)

// Operadoares de comparação


// const num5 = 20;
// const num6 = 30;

// console.log(num5 == num6);
// console.log(num5 === num6);
// console.log(num5 != num6);

// Estrutura condicional

// let valor = 100;

// if(valor == 100){
//     console.log("Valor é igual")
// }

// if(valor == 100)
//     {
//         console.log("Valor é igual")
//     }else
//     {
//         console.log("Valor não é igual")
//     }


//     let idade = 14;

//     if(idade < 14)
//         {
//          console.log("Não pode entrar")
//         } else if(idade >= 14 && idade < 18)
//             {
//                 console.log("Pode entrar")
//             } else 
//             {
//                 console.log("Você não tem idade para isso")
//             }


// // condição ternária "?" é o if e ":" o else

// let valor2 =300;
// let resultado = valor2 == 300 ? "Certo" : "Errado";
// console.log(resultado) 

//SWITCH CASE

let time = "Corinthians";

switch(time){
    case "Corinthians":
        console.log("Melhor time do mundo")
        break;
        case "São Paulo":
            console.log("Não é time")
            break;
            case "Palmeiras":
                console.log("Não tem mundial")
                break;
            default:
                console.log("Nenhuma das opções")    
}


// // Laço de repetição

// for(let i=0;i<10;i++)
//     {
//      console.log("O valor de I é: ", i)
//     }

// let w = 0;

// while(w <= 10)
//     {
// console.log("O valor de w é: " ,w )
// w++;
//     }

//     let z = 10;

//     do{
//         console.log("Do while é: ", z);
//         z++;
//     }while(z <= 100)


        function saudacao(nome)
        {
        console.log("Seja bem vindo, " , nome)
        console.log(`Seja bem vindo ${nome}`)
        }

        saudacao("Jejeh")

        function semaforo(){
            let sinal = "amarelo";
            console.log(`O semáforo está: ${sinal}`)
        }
        semaforo();