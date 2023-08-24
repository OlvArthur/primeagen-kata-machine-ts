
type QueueNode<T> = {
    val: T
    next?: QueueNode<T>
}

export default class Queue<T> {
    public length: number;
    private head?: QueueNode<T>
    private tail?: QueueNode<T>
    

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        this.length++
        const newNode: QueueNode<T> = { val: item } 
        if(!this.head || !this.tail) {
            this.head = this.tail = newNode
            return
        }
        

        this.tail.next = newNode
        this.tail = newNode

    }
    deque(): T | undefined {
        if(!this.head) return undefined

        this.length--

        const tempHead = this.head
        this.head = this.head.next
        tempHead.next = undefined

        if(this.length === 0) this.tail = undefined

        return tempHead.val
    }

    peek(): T | undefined {
        return this.head?.val
    }
}