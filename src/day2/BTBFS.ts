// N => #nodes
// time complexity => LinkedList (shift: O(1)) : O(N) , ArrayList (shift:O(N)): O(N²)
// space complexity => O(N)

import SinglyLinkedList from "./SinglyLinkedList"

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const queue = new SinglyLinkedList<BinaryNode<number>>()
  queue.append(head)
  // const queue = [head]

  while(queue.length) {
    const node = queue.shift() as BinaryNode<number>

    if(node.value === needle) return true

    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
  }

  return false
}