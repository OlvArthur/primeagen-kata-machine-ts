export default class MinHeap {
    public length: number;
    private data: number[]

    constructor() {
        this.data = []
        this.length = 0
    }

    insert(value: number): void {
        if(this.length === 0) this.data = [value]

        this.length++
        this.data[this.length - 1] = value
        this.heapifyUp(this.length - 1)
    }
    
    delete(): number {
        if(this.length === 0) throw Error('oh no!')

        const out = this.data[0]
        this.length--
        if(this.length === 0) {
            this.data = []
            return out
        }
        
        this.data[0] = this.data[this.length]
        this.heapifyDown(0)
        return out
    }
    private heapifyDown(idx: number): void {
        const leftIndex = this.leftChild(idx)
        const rightIndex = this.rightChild(idx)

        if(idx >= this.length || leftIndex >= this.length) return

        const leftValue = this.data[leftIndex]
        const rightValue = this.data[rightIndex]
        const currValue = this.data[idx]

        if(leftValue > rightValue && currValue > rightValue) {
            [this.data[idx], this.data[rightIndex]] = [rightValue, currValue]
            this.heapifyDown(rightIndex)
        }

        if(leftValue <= rightValue && currValue > leftValue) {
            [this.data[idx], this.data[leftIndex]] = [leftValue, currValue]
            this.heapifyDown(leftIndex)
        }
    }

    private heapifyUp(idx: number): void {
        if(idx === 0) return

        if(idx >= this.length) return

        const parentIndex = this.parent(idx)
        const parentValue = this.data[parentIndex]
        const value = this.data[idx]

        if(parentValue > value) {
            [this.data[idx], this.data[parentIndex]] = [this.data[parentIndex], this.data[idx]]
            this.heapifyUp(parentIndex)
        }
    }

    private parent(idx: number): number {
        const parentIndex = Math.floor((idx - 1)/2)

        return parentIndex
    }

    private leftChild(idx: number): number {
        const childIndex = 2*idx + 1

        return childIndex
    }

    private rightChild(idx: number): number {
        const childIndex = 2*idx + 2

        return childIndex
    }
}