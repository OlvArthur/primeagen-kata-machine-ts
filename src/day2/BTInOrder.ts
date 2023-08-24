// N => #nodes
// time complexity => O(N)
// space complexity => O(N)

function dfs(head: BinaryNode<number> | null, path: number[]): number[] {
  if(head === null) return []

  // 3 recurse
  // pre
  dfs(head.left, path)

  // recurse
  path.push(head.value)
  
  // post
  dfs(head.right, path)

  return path
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  const path = dfs(head, [])

  return path
}