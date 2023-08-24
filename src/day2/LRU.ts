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

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>
    private tail?: Node<V>

    private lookup: Map<K, Node<V>> 
    private reverseLookup: Map<Node<V>, K>
    

    constructor(private capacity: number = 10) {
        this.length = 0
        this.head = this.tail = undefined
        this.lookup = new Map<K, Node<V>>()
        this.reverseLookup = new Map<Node<V>, K>()
    }

    update(key: K, value: V): void { // time O(1)
        // does node exist?
        //  if it does
        //      update its value and put at the front of the list
        //  if it does not
        //      create node, and put at the front
        //      if the capacity is surpassed, evict least retrieved unit

        let node = this.lookup.get(key)

        if(node) {
            node.value = value
            this.detach(node)
            this.prepend(node)
            return
        }

        node = createNode(value)
        this.prepend(node)
        this.length++
        this.trimCache()

        this.lookup.set(key, node)
        this.reverseLookup.set(node, key)
    }

    get(key: K): V | undefined { // time O(1)
        // does node exist?
        //  if it does
        //      detach node, put at front, return value
        //  if it does not
        //      return undefined

        const node = this.lookup.get(key)

        if(!node) return

        this.detach(node)
        this.prepend(node)

        return node.value
    }

    private trimCache(): void { 
        if(this.length <= this.capacity) return

        const tail = this.tail as Node<V>
        this.detach(this.tail as Node<V>)

        const tailKey = this.reverseLookup.get(tail) as K
        this.lookup.delete(tailKey)
        this.reverseLookup.delete(tail)
        
        this.length--
    }

    private detach(node: Node<V>): V {
        if(node.prev) node.prev.next = node.next
        if(node.next) node.next.prev = node.prev

        if(node === this.head) this.head = this.head.next
        if(node === this.tail) this.tail = this.tail.prev

        node.next = undefined
        node.prev = undefined

        return node.value
    }

    private prepend(node: Node<V>): void {
        if(!this.head) {
            this.head = this.tail = node
            return
        }
        
        node.next = this.head
        this.head.prev = node
        this.head = node
    }
}