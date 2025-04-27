function validSudoku(board){
  let rows = new Map();
  let cols = new Map();
  let blocks = new Map();

  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[i].length; j++){
      if(board[i][j] != "."){
        if (rows.has(i)){
          let seen = rows.get(i);
          if (seen.has(board[i][j])){
            return false;
          }
          seen.add(board[i][j])
        }
        else{
          let seen = new Set();
          seen.add(board[i][j]);
          rows.set(i, seen);
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[i].length; j++){
      if (board[i][j] != "."){
        if (cols.has(j)){
          let seen = cols.get(j);
          if (seen.has(board[i][j])){
            return false;
          }
          seen.add(board[i][j])
        }
        else{
          let seen = new Set();
          seen.add(board[i][j]);
          cols.set(j, seen);
        }
      }
    }
  }
  
  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[i].length; j++){
      let r = Math.floor(i/3);
      let c = Math.floor(j/3);
      let block_num = r*3 + c;
      if (board[i][j] != "."){
        if (!blocks.has(block_num)){
          let seen = new Set();
          seen.add(board[i][j]);
          blocks.set(block_num, seen);
        }
        else{
          let seen = blocks.get(block_num);
          if (seen.has(board[i][j])){
            return false;
          }
          seen.add(board[i][j]);
        }
      }
    }
  }
  return true;
}

board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.log(validSudoku(board));

board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.log(validSudoku(board));
