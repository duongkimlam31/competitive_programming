function pascal_triangle(n){
  let triangle = [];
  for (let i = 0; i < n; i++){

    let layer = [];
    for (let j = 0; j < i+1; j++){
      layer.push(-1);
    }
    layer[0] = 1;
    layer[layer.length - 1] = 1;
    
    if (i+1 > 2){
      let previous_layer = triangle[i-1];
      let j = 0;
      let k = 1;
      while (j < previous_layer.length - 1){
        layer[k] = previous_layer[j] + previous_layer[j+1];
        k++;
        j++;
      }
    }
    triangle.push(layer);
  }
  return triangle;
}

n = 1;
console.log(pascal_triangle(n));

n = 5;
console.log(pascal_triangle(n));