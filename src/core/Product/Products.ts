export default class Product {
    #id: string
    #name: string
    #price: number

    constructor(name: string, price: number, id: string = null) {
        this.#id = id
        this.#name = name
        this.#price = price
    }

    static empty() {
        return new Product('', 0)
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get price() {
        return this.#price
    }
}