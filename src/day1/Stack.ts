type StackNode<T> = {
    val: T
    next?: StackNode<T>
}

export default class Stack<T> {
    public length: number;
    private head?: StackNode<T>

    

    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        this.length++ 

        const newNode: StackNode<T> = { val: item }
        if(!this.head) {
            this.head = newNode
            return
        }

        newNode.next = this.head
        this.head = newNode
    }
    
    pop(): T | undefined {
        if(!this.head) return undefined

        this.length--

        const head = this.head
        this.head = this.head.next
        head.next = undefined

        return head.val
    }
    peek(): T | undefined {
        return this.head?.val
    }
}