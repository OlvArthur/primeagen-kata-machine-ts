type Node<T> = {
    value: T
    next?: Node<T>
    prev?: Node<T>
}

function createNode<V>(value: V): Node<V> {
    const newNode: Node<V> =  { value }

    return newNode
}

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>
    private tail?: Node<V>

    private lookup: Map<K, Node<V>> 
    private reverseLookup: Map<Node<V>, K>
    
    constructor(private capacity: number = 10) {
        this.head = this.tail = undefined
        this.length = 0
        this.lookup = new Map<K, Node<V>>()
        this.reverseLookup = new Map<Node<V>, K>()
    }

    update(key: K, value: V): void {
        let node = this.lookup.get(key)

        if(node) {
            this.detach(node)
    
            node.value = value
            this.prepend(node)
            return
        }
        
        node = createNode(value)
        this.length++
        this.prepend(node)
        
        this.lookup.set(key, node)
        this.reverseLookup.set(node, key)

        this.trimCache()
    }



    get(key: K): V | undefined {
        // check the cache for existence
        const node = this.lookup.get(key)
        if(!node) return undefined

        // update the value we found and move it to the front
        this.detach(node)
        this.prepend(node)
        
        // return out the value found or undefined if not exist
        return node.value
    }

    private trimCache(): void {
        if(this.length <= this.capacity) return 
        
        const tail = this.tail as Node<V>
        const tailKey = this.reverseLookup.get(tail) as K
        this.detach(this.tail as Node<V>)

        this.lookup.delete(tailKey)
        this.reverseLookup.delete(tail)
        
        tail.prev = undefined

        this.length--
    }


    private detach(node: Node<V>) {
        if(node.prev) node.prev.next = node.next
        if(node.next) node.next.prev = node.prev

        if(node === this.head) this.head = this.head.next
        if(node === this.tail) this.tail = this.tail.prev

        node.next = undefined
        node.prev = undefined
    }

    private prepend(node: Node<V>) {
        if(!this.head || !this.tail){
            this.head = this.tail = node
            return
        }
        
        node.next = this.head
        this.head.prev = node
        this.head = node
    }
}