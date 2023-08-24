// N => #elements 
// time complexity => O(log n)
// space complexity => O(1)

export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0
  let hi = haystack.length

  
  while(lo < hi) {
    const middleIndex = Math.floor(lo + (hi - lo)/2)
    const middleValue = haystack[middleIndex]

    if(middleValue === needle) return true

    if(middleValue < needle) {
      lo = middleIndex + 1
      continue
    }

    hi = middleIndex
  }

  return false
}