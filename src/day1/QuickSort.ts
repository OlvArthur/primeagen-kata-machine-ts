function partition(arr: number[],lo: number, hi: number): number {
  let pivot = arr[hi]
  let index = lo - 1

  for(let i =lo; i < hi; i++) {
    if(arr[i] <= pivot) {
      index++
      [arr[index], arr[i]] = [arr[i], arr[index]]
    }
  }

  index++
  [arr[index], arr[hi]] = [arr[hi], arr[index]]

  return index
}

function qs(arr: number[], lo: number, hi: number): void {
  if(lo >= hi) return

  const pivotIndex = partition(arr, lo, hi)

  qs(arr, lo, pivotIndex - 1)
  qs(arr, pivotIndex + 1, hi)
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1)
}