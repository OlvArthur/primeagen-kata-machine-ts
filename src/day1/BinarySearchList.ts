export default function bs_list(haystack: number[], needle: number): boolean {

  let low = 0
  let high = haystack.length

  while(low < high) {
    let mediumIndex = Math.floor(low + (high - low)/2)
    if(haystack[mediumIndex] === needle) return true

    if(haystack[mediumIndex] > needle) high = mediumIndex
    if(haystack[mediumIndex] < needle) low = mediumIndex + 1
  }

  return false
}