// N => #nodes
// time complexity => O(N)
// space complexity => O(N)

function dfs(head: BinaryNode<number> | null, path: number[]): number[] {
  if(head === null) return []

  // 3 recurse
  // pre
  path.push(head.value)
  
  // recurse
  dfs(head.left, path)
  dfs(head.right, path)
  // post

  return path
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  const path = dfs(head, [])
  
  return path

}