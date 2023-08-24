// N => #nodes

type Node<T> = {
    value: T
    prev?: Node<T>
    next?: Node<T>
}

function createNode<T>(value: T): Node<T> {
    const node: Node<T> = { value }

    return node
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>
    

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    prepend(item: T): void { // time O(1)
        const newNode = createNode(item)
        this.length++

        if(!this.head || !this.tail) {
            this.head = this.tail = newNode
            return
        }

        newNode.next = this.head
        this.head = newNode
    }

    insertAt(item: T, idx: number): void { // time O(N)
        const newNode = createNode(item)
        this.length++

        const currNode = this.getAt(idx)

        if(!currNode) {
            throw Error('not found')
        }

        newNode.next = currNode
        newNode.prev = currNode.prev

        currNode.prev = newNode
        if(currNode.prev) currNode.prev.next = newNode
    }

    append(item: T): void { // time O(1)
        const newNode = createNode(item)
        this.length++

        if(!this.tail || !this.head) {
            this.tail = this.head = newNode
            return
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }

    remove(item: T): T | undefined { // time O(N)

        if(!this.head || !this.tail) return

        let curr: Node<T> | undefined = this.head
        for(let i = 0; i < this.length; i++) {
            if(curr?.value === item) break
            
            curr = curr?.next
        }

        if(!curr) return

        const nodeValue = this.removeNode(curr)

        return nodeValue
    }

    get(idx: number): T | undefined { // time O(N)
        const node = this.getAt(idx)
        return node?.value
    }

    removeAt(idx: number): T | undefined { // time O(N)
        const node = this.getAt(idx)

        if(!node) return
        
        const nodeValue = this.removeNode(node)

        return nodeValue
    }

    private removeNode(node: Node<T>): T {
        this.length--

        if(node.prev) node.prev.next = node.next
        if(node.next) node.next.prev = node.prev

        if(node === this.head) this.head = this.head.next
        if(node === this.tail) this.tail = this.tail.prev

        node.next = undefined
        node.prev = undefined

        return node.value
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr: Node<T> | undefined = this.head
        for(let i = 0;curr && i < idx; i++) {
            curr = curr.next
        }

        return curr
    }
}