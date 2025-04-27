function countCells(grid, pattern) {
  let m = grid.length;
  let n = grid[0].length;
  let highlight_cells_1 = new Set();
  let string_length = m*n;
  
  let l = 0;
  let h = pattern.length;
  
  
  while (h <= string_length){
    let tmp_l = l;
    let col = tmp_l % n;
    let row = Math.floor(tmp_l / n);
    let tmp_string = "";

    let indices = [];

    for (let i = 0; i < pattern.length; i++){
      indices.push(JSON.stringify([row,col]));
      tmp_string += grid[row][col];
      tmp_l++;
      col = tmp_l % n;
      row = Math.floor(tmp_l / n);
    }

    if (tmp_string == pattern){
      for (let i = 0; i < indices.length; i++){
        if (!highlight_cells_1.has(indices[i])){
          highlight_cells_1.add(indices[i]);
        }
      }
    }
    l++;
    h++;
  }
  
  l = 0;
  h = pattern.length;
  let highlight_cells_2 = new Set();

  while (h <= string_length){
    let tmp_l = l;
    let col = Math.floor(tmp_l / m);
    let row = tmp_l % m;
    let tmp_string = "";

    let indices = [];

    for (let i = 0; i < pattern.length; i++){
      indices.push(JSON.stringify([row,col]));
      tmp_string += grid[row][col];
      tmp_l++;
      col = Math.floor(tmp_l / m);
      row = tmp_l % m;
    }

    if (tmp_string == pattern){
      for (let i = 0; i < indices.length; i++){
        if (!highlight_cells_2.has(indices[i])){
          highlight_cells_2.add(indices[i]);
        }
      }
    }
    l++;
    h++;
  }

  let cnt = 0;
  for (let val of highlight_cells_1){
    if (highlight_cells_2.has(val)){
      cnt++;
    }
  }
  return cnt;
}

grid = [["a","a","c","c"],["b","b","b","c"],["a","a","b","a"],["c","a","a","c"],["a","a","c","c"]], pattern = "abaca";
console.log(countCells(grid, pattern));

grid = [["c","a","a","a"],["a","a","b","a"],["b","b","a","a"],["a","a","b","a"]], pattern = "aba";
console.log(countCells(grid, pattern));

grid = [["a"]], pattern = "a";
console.log(countCells(grid, pattern));