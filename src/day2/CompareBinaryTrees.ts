// N => #nodes
// time complexity => O(N)
// space complexity => O(1)


function compareTrees(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  if(a === null && b === null) return true

  if(a === null || b === null) return false

  if(a.value !== b.value) return false

  const leftTreesAreEqual = compareTrees(a.left, b.left)
  const rightTreesAreEqual = compareTrees(a.right, b.right)

  return leftTreesAreEqual && rightTreesAreEqual
}

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  return compareTrees(a, b)
}