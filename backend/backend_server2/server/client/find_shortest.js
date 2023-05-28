function shortestPath(maze) {
    const rows = maze.length;
    const cols = maze[0].length;
  
    // Define the directions: up, right, down, left
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
    // Create a visited matrix to keep track of visited cells
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  
    // Create a queue for BFS
    const queue = [];
  
    // Create a parent matrix to store the parent of each cell
    const parent = Array.from({ length: rows }, () => Array(cols));
  
    // Start from the left bottom corner
    const startRow = rows - 1;
    const startCol = 0;
  
    // Add the starting cell to the queue and mark it as visited
    queue.push([startRow, startCol]);
    visited[startRow][startCol] = true;
  
    // Perform BFS
    while (queue.length > 0) {
      const [row, col] = queue.shift();
  
      // Check if we have reached the exit (left top corner)
      if (row === 0 && col === 0) {
        // Reconstruct the path from exit to start
        const path = [];
        let currentRow = 0;
        let currentCol = 0;
  
        while (currentRow !== startRow || currentCol !== startCol) {
          path.unshift([currentRow, currentCol]);
          const [prevRow, prevCol] = parent[currentRow][currentCol];
          currentRow = prevRow;
          currentCol = prevCol;
        }
  
        return path;
      }
  
      // Explore all possible directions
      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
  
        // Check if the new cell is within the maze boundaries and is a valid path
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          maze[newRow][newCol] === 0 &&
          !visited[newRow][newCol]
        ) {
          // Add the new cell to the queue and mark it as visited
          queue.push([newRow, newCol]);
          visited[newRow][newCol] = true;
          // Set the parent of the new cell to the current cell
          parent[newRow][newCol] = [row, col];
        }
      }
    }
  
    return null; // Path not found
  }
  
  // Example maze matrix
  const maze = [
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 1, 0],
  ];
  
  // Find the shortest path
  const path = shortestPath(maze);
  
  if (path) {
    console.log("Shortest path exists!");
    console.log("Path coordinates:");
    for (const [x, y] of path) {
      console.log(`(${x}, ${y})`);
    }
  } else {
    console.log("Shortest path does not exist.");
  }
  