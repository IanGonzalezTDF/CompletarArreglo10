let arregloCompletar: number[] = new Array(10);
let indice: number;
for (indice = 0; indice < 10; indice++) {
  arregloCompletar[indice] = Azar(100);
}
for (indice = 0; indice < 10; indice++) {
  console.log(
    `El numero de la posicion ${indice + 1} es: ${arregloCompletar[indice]}`
  );
}

function Azar(tope: number): number {
  return Math.floor(Math.random() * tope);
}
