// Y => #rows, X => #columns, N => X * Y 
// time complexity => O(N)
// space complexity => O(N)

const dir = [
  [1,0],
  [-1,0],
  [0,1],
  [0,-1]
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  // base cases
  
  // 1. off the maze
  if(
    curr.x < 0 || curr.x >= maze[0].length ||
    curr.y < 0 || curr.y >= maze.length
  ) {
    return false
  }
  
  // 2. hit a wall
  if(maze[curr.y][curr.x] === wall)  return false
    
  // 3. find the end
  if(curr.x === end.x && curr.y === end.y) {
    path.push(curr)
    return true
  }

  // 4. reach a point we have seen
  if(seen[curr.y][curr.x]) return false


  // 3 recurse
  // pre
  seen[curr.y][curr.x] = true
  path.push(curr)
  // recursion
  for(let i = 0; i < dir.length; i++) {
    const [x,y] = dir[i]
    const foundEnd = walk(maze, wall, {
      x: curr.x + x,
      y: curr.y + y
    }, end, seen, path)

    if(foundEnd) return true
  }

  // post
  path.pop()

  return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = []
  const path: Point[] = []

  for(let i =0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false))
  }
  
  walk(maze,wall,start, end, seen, path)

  return path
}