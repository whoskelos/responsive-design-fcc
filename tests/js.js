const arr = [[1, 2], [3, 4], [5, 6, 7]];

let product = 1;
// Cambia solo el código debajo de esta línea
for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    product*= arr[i][j];
  }
}
console.log(product);

