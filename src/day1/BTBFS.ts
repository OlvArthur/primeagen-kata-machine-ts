import SinglyLinkedList from "./SinglyLinkedList"

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  // const queue = [head] => ArrayList - O(n²) 
  const queue = new SinglyLinkedList<BinaryNode<number>>() // => LinkedList - O(n)

  queue.append(head)

  while(queue.length) {
    const node = queue.shift() as BinaryNode<number>

    if(node.value === needle){
      return true
    }

    if(node?.left) queue.push(node?.left)
    if(node?.right) queue.push(node?.right)
  }

  return false
}