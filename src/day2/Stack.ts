// N => #nodes

type Node<T> = {
    value: T
    next?: Node<T>
}

function createNode<T>(value: T): Node<T> {
    const node: Node<T> = { value }
    
    return node
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>

    constructor() {
        this.length = 0
        this.head = undefined
    }

    push(item: T): void { // time O(1)
        const newNode = createNode(item)
        this.length++
        
        if(!this.head) {
            this.head = newNode
            return
        }

        newNode.next = this.head
        this.head = newNode

    }
    
    pop(): T | undefined { // time O(1)
        if(!this.head) return
        this.length--

        const head = this.head
        this.head = this.head.next
        head.next = undefined

        return head.value
    }

    peek(): T | undefined { // time O(1)
        return this.head?.value
    }
}