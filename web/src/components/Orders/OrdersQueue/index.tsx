import { IOrder } from '../../../types/order'
import { OrdersBoard } from '../OrdersBoard'

import Empty from '../../../assets/empty.svg'

interface OrdersQueueProps {
  icon: string
  title: string
  orders: IOrder[]
}

export function OrdersQueue({ icon, title, orders }: OrdersQueueProps) {
  const hasOrders = orders.length > 0

  return (
    <div
      className={`flex flex-1 flex-col items-center rounded-2xl border border-gray-700 p-4 ${
        !hasOrders && 'h-[222px] w-[384px]'
      }`}
    >
      <header className="flex items-center gap-2 p-2 text-sm">
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      <OrdersBoard orders={orders} />

      {orders.length <= 0 && (
        <div className="mt-6 flex flex-col justify-center text-center">
          <img src={Empty} alt="Empty" className="h-12 w-12" />
          <span className="ml-[6px] text-sm font-normal text-gray-500">
            Vazio
          </span>
        </div>
      )}
    </div>
  )
}
