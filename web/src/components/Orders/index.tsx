import { IOrder } from '../../types/order'
import { OrdersQueue } from './OrdersQueue'

const orders: IOrder[] = [
  {
    _id: '657d974c00f135e91eed4e05',
    table: '05',
    status: 'done',
    products: [
      {
        quantity: 5,
        _id: '657d974c00f135e91eed4e06',
        product: {
          _id: '657cd6c80cb4cc05773b3c06',
          name: 'Skol',
          imagePath: '1702680264511-cerveja.png',
          price: '8',
        },
      },
      {
        quantity: 6,
        _id: '657d974c00f135e91eed4e05',
        product: {
          _id: '657cd6c80cb4cc05679b3c06',
          name: 'Spaten',
          imagePath: '1702680264511-cerveja.png',
          price: '10',
        },
      },
    ],
  },
]

export function Orders() {
  return (
    <div className="mx-auto my-10 mt-56 flex w-full max-w-[1216px] gap-8">
      <OrdersQueue icon="⏱" title="Fila de espera" orders={orders} />
      <OrdersQueue icon="👨🏻‍🍳" title="Em preparação" orders={[]} />
      <OrdersQueue icon="✅" title="Pronto!" orders={orders} />
    </div>
  )
}
