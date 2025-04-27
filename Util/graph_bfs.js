// // Function to find BFS of Graph from given source s
// function bfs(adj) {
//   let V = adj.length;
//   let s = 0; // source node is 0
//   // create an array to store the traversal
//   let res = [];
  
//   // Create a queue for BFS
//   // Queue stores a node to be processed and you process it by visiting their neighbors
//   let q = [];
  
//   // Initially mark all the vertices as not visited
//   let visited = new Array(V).fill(false);
  
//   // Mark source node as visited and enqueue it
//   visited[s] = true;
//   q.push(s);
  
//   // Iterate over the queue
//   while (q.length > 0) {
      
//       // Dequeue a vertex from queue and store it
//       let curr = q.shift();
//       res.push(curr);
      
//       // Get all adjacent vertices of the dequeued 
//       // vertex curr If an adjacent has not been 
//       // visited, mark it visited and enqueue it
//       for (let x of adj[curr]) {
//           if (!visited[x]) {
//               visited[x] = true;
//               q.push(x);
//           }
//       }
//   }
//   return res;
// }

// // Main execution
// let adj = 
//     [ [1,2], [0,2,3], [0,4], [1,4], [2,3]];
// let src = 0;
// let ans = bfs(adj);
// for (let i of ans) {
//     process.stdout.write(i + " ");
// }

function bfs(graph){
  let res = [];
  let queue = [];
  let visited = new Set();

  // Start at the first node in the graph
  let node = [...graph][0][0];
  visited.add(node);
  queue.push(node);

  while (queue.length > 0){
    node = queue.shift();
    let neighbors = graph.get(node);
    res.push(node);

    for (let i = 0; i < neighbors.length; i++){
      if (!visited.has(neighbors[i])){
        visited.add(neighbors[i]);
        queue.push(neighbors[i]);
      }
    }
  }
  return res;
}

let graph = new Map([["A",["B","C"]], ["B",["A","C","D"],], ["C", ["A","E"]], ["D",["B","E"]], ["E", ["C","D"]]]);
console.log(bfs(graph));

// Steps:
// Visit
// Queue
// Dequeue