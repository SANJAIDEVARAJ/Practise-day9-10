import React, { useContext } from 'react'
import PendingGuest from './PendingGuest'
import Guest from './Guest'
import Context from './context'



const Guests = () => {
  const context = useContext(Context)
  const { guests, filter } = context
  return (
    <div className="guests">
      <PendingGuest />
      {guests.filter(guest => !filter || guest.confirmed).map(guest => <Guest key={guest.id} guest={guest} />)}
    </div>
  )
}

export default Guests
