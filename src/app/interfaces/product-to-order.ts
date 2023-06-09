import { Product } from "./product"

export interface ProductToOrder {
    qty: number,
    product: Product,
    priceProduct: number
}
