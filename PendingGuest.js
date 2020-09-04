import React, { useContext } from 'react'
import Context from './context'


const PendingGuest = () => {
  const context = useContext(Context)
  const { pending } = context

  if (pending !== null) return (
    <div className="pending">
      <h1>{pending}</h1>
    </div>
  )

  return null
}

export default PendingGuest
