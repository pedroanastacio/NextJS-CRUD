import ProductRepository from "../../core/Product/ProductRepository";
import Product from "../../core/Product/Products";
import firebase from "./config";

export default class ProductCollection implements ProductRepository {

    #conversor = {
        toFirestore(product: Product) {
            return {
                name: product.name,
                price: product.price
            }
        },
        fromFirestore(
            snapshot: firebase.firestore.QueryDocumentSnapshot,
            options: firebase.firestore.SnapshotOptions
        ) {
            const data = snapshot.data(options)
            return new Product(data.name, data.price, snapshot.id)
        }
    }

    async save(product: Product): Promise<Product> {
        if (product?.id) {
            await this.#collection().doc(product.id).set(product)
            return product
        }
        else {
            const docRef = await this.#collection().add(product)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async getAll(): Promise<Product[]> {
        const query = await this.#collection().get()
        return query.docs.map(doc => doc.data())
    }

    async delete(product: Product): Promise<void> {
        return await this.#collection().doc(product.id).delete()
    }

    #collection() {
        return firebase
            .firestore().collection('products')
            .withConverter(this.#conversor)
    }
}