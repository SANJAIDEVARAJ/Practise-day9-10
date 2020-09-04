import React, { useContext } from 'react'
import Context from './context'
import Edit from './Edit'

const Guest = ({ guest }) => {
  const context = useContext(Context)
  const { toggelConfirmed, changeEdit, removeGuest } = context
  const { name, confirmed, editing } = guest

  if (editing)
    return (
      <Edit guest={guest} />
    );
  return (
    <div className={`guest ${confirmed && 'confirmed'}`}>
      <h1>{name}</h1>
      <div> confirmed <input type="checkbox" checked={confirmed} onChange={() => { toggelConfirmed(guest) }} /> </div>
      <button onClick={() => { changeEdit(guest.id) }} >Edit</button>
      <button className="remove" onClick={() => { removeGuest(guest) }}>DELETE</button>
    </div>
  )
}


export default Guest
