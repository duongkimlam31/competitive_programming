function unitConversion(conversions){
  let graph = new Map();
  for (let i = 0; i < conversions.length; i++){
    let source = conversions[i][0];
    if (!graph.has(source)){
      graph.set(source,[[conversions[i][1], conversions[i][2]]]);
    }
    else{
      let tmp = graph.get(source);
      tmp.push([conversions[i][1], conversions[i][2]]);
    }
  }


  let queue = [];
  let visited = new Set();
  let res = new Array(conversions.length+1);
  res.fill(-1);

  let node = 0;
  visited.add(node);
  queue.push(node);
  res[0] = 1;

  while (queue.length > 0){
    let node = queue.shift();

    if (graph.has(node)){
      let neighbors = graph.get(node);

      for (let i = 0; i < neighbors.length; i++){
        let neighbor = neighbors[i][0];
        if (!visited.has(neighbor)){
          res[neighbor] = (res[node] * neighbors[i][1]) % (10**9 + 7);
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
  return res;

}

conversions = [[0,1,2],[1,2,3]];
console.log(unitConversion(conversions));
conversions = [[0,1,2],[0,2,3],[1,3,4],[1,4,5],[2,5,2],[4,6,3],[5,7,4]];
console.log(unitConversion(conversions));