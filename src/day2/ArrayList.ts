export default class ArrayList<T> {
    public length: number;
    private data: T[]

    constructor() {
        this.data = []
        this.length = 0
    }

    prepend(item: T): void {
        const newArray: T[] = []
        newArray[0] = item

        for(let i = 0; i < this.length; i++) {
            newArray[i + 1] = this.data[i]
        }

        this.data = newArray
        this.length++
    }

    insertAt(item: T, idx: number): void {
        const newArray: T[] = [] 
        for(let i = 0; i < idx - 1; i++) {
            newArray[i] = this.data[i]
        }

        newArray[idx] = item

        for(let i = idx; i < this.length; i++) {
            newArray[i + 1] = this.data[i]
        }

        this.data = newArray
        this.length++
    }

    append(item: T): void {
        // if load factor is hit, double size
        // amortized time of insertion is O(1)
        this.data[this.length] = item
        this.length++
    }
    remove(item: T): T | undefined {

    }
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}