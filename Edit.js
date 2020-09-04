import React, { useState, useContext } from 'react'
import Context from './context'

const Edit = ({ guest }) => {
  const { updateGuest } = useContext(Context)
  const [Guest, setGuest] = useState(guest)

  onchange = (e) => {
    setGuest({
      ...Guest,
      name: e.target.value,
    })
  }
  return (
    <div className="guest">
      <input type="text" className="edit" value={Guest.name} onChange={onchange} autoFocus spellCheck={false} />
      <button onClick={() => { updateGuest(Guest) }}>Save</button>
    </div>
  )
}
export default Edit
