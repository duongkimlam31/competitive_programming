// function dfsRec(adj, visited, s, res)
// {
//     visited[s] = true;
//     res.push(s);

//     // Recursively visit all adjacent vertices that are not
//     // visited yet
//     for (let i = 0; i < adj.length; i++) {
//         if (adj[s][i] === 1 && !visited[i]) {
//             dfsRec(adj, visited, i, res);
//         }
//     }
// }

// function DFS(adj)
// {
//     let visited = new Array(adj.length).fill(false);
//     let res = [];
//     dfsRec(adj, visited, 0, res); // Start DFS from vertex 0
//     return res;
// }

// function addEdge(adj, s, t)
// {
//     adj[s][t] = 1;
//     adj[t][s] = 1; // Since it's an undirected graph
// }

// // Driver code
// let V = 5;
// let adj = Array.from(
//     {length : V},
//     () => new Array(V).fill(0)); // Adjacency matrix

// // Define the edges of the graph
// let edges =
//     [ [ 1, 2 ], [ 1, 0 ], [ 2, 0 ], [ 2, 3 ], [ 2, 4 ] ];

// // Populate the adjacency matrix with edges
// edges.forEach(([ s, t ]) => addEdge(adj, s, t));

// let res = DFS(adj); // Perform DFS
// console.log(res.join(" "));


function dfs(graph){
  let visited = new Set();
  let res = [];

  function dfsHelper(graph, node){
    if (!visited.has(node)){
      visited.add(node);
      res.push(node);
      let neighbors = graph.get(node);
      for (let i = 0; i < neighbors.length; i++){
        dfsHelper(graph,neighbors[i]);
      }
    }
  }

  let node = [...graph][0][0];
  dfsHelper(graph, node);
  return res;

}

let graph = new Map([["A",["B","C"]], ["B",["A","C","D"],], ["C", ["A","E"]], ["D",["B","E"]], ["E", ["C","D"]]]);
console.log(dfs(graph));