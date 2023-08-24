// N => #nodes

type Node<T> = {
    val: T
    next?: Node<T>
}

function createNode<T>(item: T): Node<T> {
    const node: Node<T> = { val: item }

    return node
}


export default class SinglyLinkedList<T> {
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

    insertAt(item: T, idx: number): void { // O(N)
        const newNode = createNode(item)
        this.length++

        if(!this.head) {
            this.head = this.tail = newNode
            return
        }

        let prev: Node<T> | undefined = this.head
        for(let i =0; prev && i < idx - 1; i++) {
            prev = prev.next
        }

        prev = prev as Node<T>
        newNode.next = prev.next
        prev.next = newNode
    }

    append(item: T): void { // time O(1)
        const newNode = createNode(item)
        this.length++

        if(!this.tail) {
            this.head = this.tail = newNode
            return
        }

        this.tail.next = newNode
        this.tail = newNode
    }

    public push(item: T): void {
        this.append(item)
    }

    remove(item: T): T | undefined { // O(N)
        if(!this.head || !this.tail) return 

        let curr: Node<T> | undefined = this.head
        let prev: Node<T> | undefined
        for(let i = 0; curr && i < this.length; i++) {
            if(curr.val === item) break
            prev = curr
            curr = curr.next
        }

        if(!curr || curr.val !== item) return
        this.removeNode(curr, prev)
        
        return curr.val
    }

    get(idx: number): T | undefined { // time O(N)
        const node = this.getAt(idx)

        return node?.val
    }
    
    removeAt(idx: number): T | undefined { // time O(N)
        if(!this.head) return

        let curr: Node<T> | undefined = this.head
        let prev: Node<T> | undefined
        for(let i = 0; curr && i < idx; i++) {
            prev = curr
            curr = curr.next
        }

        if(!curr) return
        this.removeNode(curr,prev)
        
        return curr.val

    }


    private removeNode(node: Node<T>, previousNode?: Node<T>): T {
        this.length--
        
        if(node === this.head) this.head = this.head.next
        if(node === this.tail) this.tail = previousNode
        if(previousNode) previousNode.next = node.next

        return node.val
    }

    public shift(): T | undefined {
        if(!this.head) return

        const out = this.head.val
        this.removeNode(this.head)

        return out

    }

    

    private getAt(idx: number): Node<T> | undefined {
        let curr: Node<T> | undefined = this.head
        for(let i = 0; curr && i < idx; i++) {
            curr = curr.next
        }

        return curr
    }
}