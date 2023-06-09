import { ProductToOrder } from "./product-to-order"

export interface Order {
    userId: string,
    client: string,
    products: ProductToOrder[],
    status: string,
    dateEntry: Date,
}
