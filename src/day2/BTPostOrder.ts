// N => #nodes
// time complexity => O(N)
// space complexity => O(N)

function dfs(head: BinaryNode<number> | null, path: number[]): number[] {
  if(head === null) return []

  // 3 recurse
  // pre
  
  // recurse
  dfs(head.left, path)
  dfs(head.right, path)
  
  // post
  path.push(head.value)

  return path
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  const path = dfs(head, [])
  
  return path
}