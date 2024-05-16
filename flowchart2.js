function dijkstra(graph, start) {
    // Initialize distances with Infinity for all vertices except the start vertex
    let distances = {};
    for (let vertex in graph) {
        distances[vertex] = vertex === start ? 0 : Infinity;
    }

    // Set of vertices whose shortest distance from the start is already determined
    let visited = new Set();

    // Priority queue to keep track of vertices and their tentative distances
    let queue = [start];

    while (queue.length > 0) {
        // Get the vertex with the smallest tentative distance from the priority queue
        let currentVertex = queue.shift();
        visited.add(currentVertex);

        // Update distances for adjacent vertices
        for (let neighbor in graph[currentVertex]) {
            if (!visited.has(neighbor)) {
                let distanceToNeighbor = distances[currentVertex] + graph[currentVertex][neighbor];
                if (distanceToNeighbor < distances[neighbor]) {
                    distances[neighbor] = distanceToNeighbor;
                    queue.push(neighbor);
                }
            }
        }
        
        // Sort the priority queue based on distances
        queue.sort((a, b) => distances[a] - distances[b]);
    }

    return distances;
}

// Example usage:
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

console.log(dijkstra(graph, 'A')); // Output:
