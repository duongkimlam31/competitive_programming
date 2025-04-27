function minSumTriangle(triangle){
  let memoization = new Map([["0,0",0]]);
  function minSumTriangleHelper(triangle, row, col){
    if (memoization.has(row+","+col)){
      return memoization.get(row+","+col);
    }
    else{
      let minPath = Infinity;
      if (col < triangle[row].length - 1){
        minPath = Math.min(minPath, minSumTriangleHelper(triangle,row-1,col) + triangle[row-1][col]);
      }
      if (col > 0){
        minPath = Math.min(minPath, minSumTriangleHelper(triangle,row-1,col-1) + triangle[row-1][col-1]);
      }
      memoization.set(row+","+col, minPath);
      return memoization.get(row+","+col);
    }
  }
  let minPath = Infinity;
  for (let i = 0; i < triangle[triangle.length-1].length; i++){
    minSumTriangleHelper(triangle,triangle.length-1,i)
    minPath = Math.min(minPath, minSumTriangleHelper(triangle,triangle.length-1,i) + triangle[triangle.length-1][i]);
  }
  return minPath;
}

triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
console.log(minSumTriangle(triangle));

triangle = [[-10]]
console.log(minSumTriangle(triangle));


triangle = [[-1],[2,3],[1,-1,-3]];
console.log(minSumTriangle(triangle));