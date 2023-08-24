// N => #elements
// time complexity => O(N*logN)
// space complexity => O(1)

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi]

  let idx = lo - 1
  for(let i = lo; i < hi; i++) {
    if(arr[i] < pivot) {
      idx++
      [arr[idx], arr[i]] = [arr[i], arr[idx]]
    }
  }

  idx++
  [arr[idx], arr[hi]] = [pivot, arr[idx]]

  return idx
}

function qs(arr: number[], lo: number, hi: number): void {
  if(lo >= hi) return
  
  const pivotIndex = partition(arr, lo, hi)

  qs(arr, lo, pivotIndex - 1 )
  qs(arr, pivotIndex + 1, hi)
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1)
}