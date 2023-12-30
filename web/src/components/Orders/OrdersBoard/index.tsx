import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'

import { FormatCurrency } from '@/utils/FormatCurrency'
import { IOrder } from '../../../types/order'

interface OrdersBoardProps {
  orders: IOrder[]
}

export function OrdersBoard({ orders }: OrdersBoardProps) {
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null)

  function handleOpenModal(order: IOrder) {
    setSelectedOrder(order)
  }

  const total = selectedOrder?.products.reduce((acc, { product, quantity }) => {
    return acc + Number(product.price) * quantity
  }, 0)

  return (
    <div className="mt-6 flex w-full flex-col gap-6">
      {orders.map((order) => {
        return (
          <Dialog key={order._id} onOpenChange={() => handleOpenModal(order)}>
            <DialogTrigger className="flex h-32 flex-col items-center justify-center gap-1 rounded-2xl border-2  border-gray-600 bg-gray-950 transition-colors hover:bg-gray-900">
              <strong className="font-semibold">Mesa {order.table}</strong>
              <span className="text-sm text-gray-200">
                {order.products.length} itens
              </span>
            </DialogTrigger>

            <DialogContent className="bg-gray-950 p-8">
              <DialogHeader>
                <DialogTitle className="mb-8 flex text-2xl">
                  Mesa {order.table}
                </DialogTitle>

                <DialogDescription className="text-sm opacity-80">
                  Status do pedido
                </DialogDescription>

                <div className="mt-2 flex items-center gap-2">
                  <span>
                    {order.status === 'waiting' && '⏱'}
                    {order.status === 'production' && '👨🏻‍🍳'}
                    {order.status === 'done' && '✅'}
                  </span>
                  <strong className="text-base font-semibold text-gray-200">
                    {order.status === 'waiting' && 'Fila de espera'}
                    {order.status === 'production' && 'Em preparação'}
                    {order.status === 'done' && 'Pronto!'}
                  </strong>
                </div>
              </DialogHeader>

              <div className="mt-8">
                <strong className="text-sm font-medium opacity-80">
                  Itens
                </strong>

                {order.products.map(({ _id, product, quantity }) => (
                  <div
                    key={_id}
                    className="mt-4 flex items-start justify-start gap-3"
                  >
                    <img
                      src={`http://192.168.1.109:3333/uploads/${product.imagePath}`}
                      className="flex h-12 w-[70px] items-start justify-start rounded-md"
                      alt={product.name}
                    />
                    <span className="block min-w-[20px] text-sm leading-[21px] text-gray-400">
                      {quantity}x
                    </span>
                    <div className="flex flex-col gap-1">
                      <strong className="text-base font-semibold leading-6">
                        {product.name}
                      </strong>
                      <span className="text-sm text-gray-400">
                        {FormatCurrency(Number(product.price))}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-medium opacity-80">Total</span>
                  <strong className="text-base font-semibold">
                    {FormatCurrency(total!)}
                  </strong>
                </div>

                <div className="mt-8 flex flex-col justify-center gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-[14px] transition-colors hover:bg-orange-600"
                  >
                    <span>👨🏻‍🍳</span>
                    <strong className="font-bold">Iniciar produção</strong>
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center rounded-full  border border-transparent px-3 py-[14px] font-normal hover:bg-red-600 hover:font-bold hover:transition-colors"
                  >
                    Cancelar pedido
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )
      })}
    </div>
  )
}
