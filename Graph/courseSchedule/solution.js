// Disconnected directed graph problem

function dfs(graph, node, visited, checked) {
  if (checked.has(node)) {
    return true;  // already checked, no cycle
  }
  if (visited.has(node)) {
    return false;  // cycle detected
  }

  let neighbors = graph.get(node) || new Set();
  for (const neighbor of neighbors) {
    visited.add(node);
    if (!dfs(graph, neighbor, visited, checked)) {
      return false;
    }
    visited.delete(node);
  }

  checked.add(node);  // mark as checked
  return true;
}

function courseSchedule(numCourses, prerequisites){
  if (prerequisites.length == 0){
    return true;
  }
  let graph = new Map();
  for (let i = 0; i < prerequisites.length; i++){
    let prerequisite = prerequisites[i];
    let to_take = prerequisite[0];
    let complete = prerequisite[1];
    if (!graph.has(complete)){
      let tmp = new Set();
      tmp.add(to_take);
      graph.set(complete,tmp);
    }
    else{
      let tmp = graph.get(complete);
      tmp.add(to_take);
    }
  }
  let checked = new Set();
  let visited = new Set();
  
  for (const [key,val] of graph){
    let visited = new Set();
    if (!dfs(graph, key, visited, checked)){
      return false;
    }
  }
  return true;
}

numCourses = 2, prerequisites = [[1,0]];
console.log(courseSchedule(numCourses, prerequisites));

numCourses = 2, prerequisites = [[1,0],[0,1]]
console.log(courseSchedule(numCourses, prerequisites));

numCourses = 5, prerequisites = [[1,4],[2,4],[3,1],[3,2]];
console.log(courseSchedule(numCourses, prerequisites));

numCourses = 20, prerequisites = [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]];
console.log(courseSchedule(numCourses, prerequisites));