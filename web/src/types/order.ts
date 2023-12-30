export interface IOrder {
  _id: string
  table: string
  status: 'waiting' | 'production' | 'done'
  products: Array<{
    _id: string
    quantity: number
    product: {
      _id: string
      name: string
      imagePath: string
      price: string
    }
  }>
}
