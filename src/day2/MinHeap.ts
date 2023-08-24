// N => #elements, h => height of Heap, log N <= h <= N 

export default class MinHeap {
    public length: number;
    private data: number[]

    constructor() {
        this.length = 0
        this.data = []
    }

    insert(value: number): void { // time O(h)
        // append
        // heapifyUp inserted node
        this.data[this.length] = value
        this.length++

        this.heapifyUp(this.length - 1)
    }
    delete(): number { // time O(h)
        if(this.length === 0) return -1

        this.length--
        if(this.length === 0) {
            const out = this.data[0]
            this.data = []
            return out
        }

        // remove head
        // put tail at head

        const tail = this.data.pop() as number

        const out = this.data[0]
        this.data[0] = tail
        // heapifyDown head
        this.heapifyDown(0)

        return out
    }

    private heapifyDown(idx: number): void {
        if(idx >= this.length - 1) return

        const leftChildIdx = this.getLeftChildIdx(idx)
        const leftChildValue = this.data[leftChildIdx]

        const rightChildIdx = this.getRightChildIdx(idx)
        const rightChildValue = this.data[rightChildIdx]
        
        const currValue = this.data[idx]

        if(leftChildValue < rightChildValue && leftChildValue < currValue ) {
            [this.data[leftChildIdx], this.data[idx]] = [this.data[idx], this.data[leftChildIdx]]
            this.heapifyDown(leftChildIdx)
        }

        if(rightChildValue <= leftChildValue && rightChildValue < currValue) {
            [this.data[rightChildIdx], this.data[idx]] = [this.data[idx], this.data[rightChildIdx]]
            this.heapifyDown(rightChildIdx)
        }
    }

    private heapifyUp(idx: number): void {
        if(idx >= this.length) return

        if(idx === 0) return

        const node = this.data[idx]

        const parentIndex = this.getParentIdx(idx)
        const parentValue = this.data[parentIndex]

        if(parentValue <= node) return

        [this.data[parentIndex], this.data[idx]] = [this.data[idx] ,this.data[parentIndex]]
        this.heapifyUp(parentIndex)
    }

    private getParentIdx(idx: number): number {
        const parentIdx = Math.floor((idx - 1)/2)

        return parentIdx
    }

    private getLeftChildIdx(idx: number): number {
        const leftChildIdx = 2*idx + 1

        return leftChildIdx
    }

    private getRightChildIdx(idx: number): number {
        const RightChildIdx = 2*idx + 2

        return RightChildIdx
    }
}