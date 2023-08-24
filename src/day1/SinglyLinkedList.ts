type SLLNode<T> = {
    val: T
    next?: SLLNode<T>
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: SLLNode<T>
    private tail?: SLLNode<T> 

    

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    prepend(item: T): void {
        this.length++
        const newNode: SLLNode<T> = { val: item } 
        if(!this.head) {
            this.head = this.tail = newNode
            return
        }

        newNode.next = this.head
        this.head = newNode
    }

    insertAt(item: T, idx: number): void {

    }
    
    append(item: T): void {
        this.length++
        const newNode: SLLNode<T> = { val: item } 
        if(!this.tail) {
            this.head = this.tail = newNode
            return
        }

        this.tail.next = newNode
        this.tail = newNode
    }

    push(item: T): void {
        this.append(item)
    }

    shift(): T | undefined  {
        if(!this.head) return undefined

        this.length--

        const tempHead = this.head
        this.head = this.head.next
        tempHead.next = undefined

        if(this.length === 0) this.tail = undefined

        return tempHead.val
    }
    
//     remove(item: T): T | undefined {

// }
//     get(idx: number): T | undefined {

// }
//     removeAt(idx: number): T | undefined {

// }
}