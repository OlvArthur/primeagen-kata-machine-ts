// N => #nodes

type Node<T> ={
    value: T
    next?: Node<T>
}

function createNode<T>(value: T): Node<T> {
    const node: Node<T> = { value }
    return node
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    enqueue(item: T): void { // time O(1)
        const newNode = createNode(item)
        this.length++
        
        if(!this.head || !this.tail) {
            this.head = this.tail = newNode
            return
        }

        this.tail.next = newNode
        this.tail = newNode

    }

    deque(): T | undefined { // time O(1)
        if(!this.head) return
        this.length--

        if(this.length === 0) {
            const out= this.head.value
            this.head = this.tail = undefined

            return out
        }

        const head = this.head
        this.head = this.head.next
        head.next = undefined

        return head.value

    }
    peek(): T | undefined { // time O(1)
        return this.head?.value
    }
}