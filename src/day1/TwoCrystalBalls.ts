export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpsAmount = Math.floor(Math.sqrt(breaks.length))


  let i = jmpsAmount
  for(; i < breaks.length; i +=jmpsAmount) {
    if(breaks[i]) break
  }

  i -= jmpsAmount

  for(let j = 0; j < jmpsAmount && i < breaks.length; i++ , j++) {
    if(breaks[i]) return i
  }

  return -1
}