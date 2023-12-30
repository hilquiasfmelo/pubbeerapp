import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex h-[198px] items-center justify-center border-b-2 border-gray-200 bg-orange-600">
      <div className="flex w-full max-w-[1216px] items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-gray-100">Pedidos</h1>
          <h2 className="text-lg font-medium text-gray-200">
            Acompanhe os pedidos dos clientes
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <img src={Logo} className="h-52 w-52" alt="PubBeerApp" />
          <div className="flex flex-col items-center justify-center gap-3">
            <strong className="text-3xl font-bold text-gray-100">
              PubBeerApp
            </strong>
            <span className="text-base font-medium text-gray-200">
              O App cervejeiro
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
