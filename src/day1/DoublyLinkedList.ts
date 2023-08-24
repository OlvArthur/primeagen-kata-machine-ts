type Node<T> = {
    val: T
    prev?: Node<T>
    next?: Node<T>
}


export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>
    

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    prepend(item: T): void {
        const newNode: Node<T> = { val: item }
        this.length++
        if(!this.head) {
            this.head = this.tail = newNode
            return            
        }
        
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }

    insertAt(item: T, idx: number): void {

        if(idx > this.length) {
            throw Error("oh no!")
        }

        if(!this.head) {
            this.prepend(item)
            return
        }

        if(idx === this.length) {
            this.append(item)
            return
        }

        this.length++
        const newNode: Node<T> = { val: item } 
        const curr = this.getAt(idx) as Node<T>

        newNode.next = curr
        newNode.prev = curr?.prev

        const previousNode = curr?.prev
        if(curr?.prev) curr.prev = newNode
        if(previousNode?.next) previousNode.next = newNode
    }
    append(item: T): void {
        this.length++
        const newNode: Node<T> = { val: item } 
        if(!this.head || !this.tail) {
            this.head = this.tail = newNode
            return
        }

        newNode.prev = this.tail
        this.tail.next = newNode

        this.tail = newNode

    }

    remove(item: T): T | undefined {
        if(!this.head || !this.tail) {
            return undefined
        }
        
        let curr: Node<T> | undefined = this.head
        for(let i = 0; curr && i < this.length; i++) {
            if(curr.val === item) {
                break
            }
            
            curr = curr.next 
        }

        if(!curr) return undefined
        
        const currVal = this.removeNode(curr)
        return currVal
    }
    get(idx: number): T | undefined {
        const curr = this.getAt(idx)
        return curr?.val
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx)

        if(!node) return undefined

        const removedNodeVal = this.removeNode(node)

        return removedNodeVal
    }

    private removeNode(node: Node<T>): T {

        this.length--
        
        if(this.length === 0) {
            this.head = this.tail = undefined
            return node.val
        }

        if(node?.prev) {
            node.prev    = node.next
        }

        if(node?.next) {
            node.next.prev = node.prev
        }

        
        if(node === this.head) {
            this.head = node.next
        }
        
        if(node === this.tail) {
            this.tail = node.prev
        }

        node.prev = node.next = undefined

        return node.val
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr: Node<T> | undefined = this.head
        for(let i = 0; curr && i < idx; i++) {
            curr = curr.next
        }

        return curr
    }
}