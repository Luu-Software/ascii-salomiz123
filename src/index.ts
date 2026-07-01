import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
  var i:number = 0
  let acumulado:string= ""
  while (i<cantidad){
    acumulado= acumulado+letra
    i=i+1
  }
  return acumulado

}


let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));


let fila:string= repetirLetra(caracter, tamaño)
while (tamaño>0) {
  console.log(fila)
  tamaño= tamaño-1
  }

