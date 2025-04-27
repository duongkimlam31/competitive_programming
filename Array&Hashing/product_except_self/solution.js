function product_except_self(arr){
  let exclusion_index = 0;
  let result = []
  while (exclusion_index < arr.length){
    let tmp_product = 1;
    for (let i = 0; i < arr.length; i++){
      if (i != exclusion_index){
        tmp_product *= arr[i];
      }
    }
    result.push(tmp_product);
    exclusion_index++;
  }
  return result;
}

arr = [10,3,5,6,2]
console.log(product_except_self(arr));

arr = [12,0]
console.log(product_except_self(arr));
