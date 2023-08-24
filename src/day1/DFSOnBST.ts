function search(curr: BinaryNode<number> | null, needle: number): boolean {
  if(!curr) return false

  if(curr.value === needle) return true

  if(curr.value < needle) return search(curr.right, needle)
  
  return search(curr.left, needle)
}


export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  const found = search(head, needle)

  return found
  // const stack = [head]

  // while(stack.length) {
  //   const node = stack.pop() as BinaryNode<number>

  //   if(node.value === needle) return true

  //   if(node.right) stack.push(node.right)
  //   if(node.left) stack.push(node.left)
  // }

  // return false


}