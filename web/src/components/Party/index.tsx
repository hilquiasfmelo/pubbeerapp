import PartyLogo from '../../assets/party.svg'

export function Party() {
  return (
    <div className="flex items-end justify-end">
      <img src={PartyLogo} alt="Party" className="mr-12 h-[397px] w-[397px]" />
    </div>
  )
}
