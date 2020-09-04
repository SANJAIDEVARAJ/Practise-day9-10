import React, { useRef, useContext } from 'react'
import Context from './context'
import uuid from 'uuid'

const AddGuest = () => {
  let newGuest = useRef('')
  const context = useContext(Context)
  const { updatePending, addGuest } = context
  onchange = () => {
    updatePending(newGuest.current.value)
  }
  onsubmit = (e) => {
    e.preventDefault()
    addGuest({
      id: uuid.v4(),
      name: newGuest.current.value,
      confirmed: false,
      editing: false
    })
    updatePending('')
    newGuest.current.value = ''
  }
  return (
    <form>
      <input ref={newGuest} onChange={onchange} type="text" spellCheck={false} placeholder="Invite someone ..." />
      <button type="submit" onSubmit={onsubmit}>+</button>
    </form>
  )
}

export default AddGuest
