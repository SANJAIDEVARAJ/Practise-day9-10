import React, { useReducer } from 'react'
import Context from './context'
import reducer from './reducer'

const State = (props) => {
  const initialState = {
    pending: null,
    filter: false,
    guests: []
      

  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const counter = {
    total: state.guests.length,
    confirmed: state.guests.filter(guest => guest.confirmed).length
  }

  const updatePending = (guest) => {
    dispatch({
      type: 'PENDING',
      payload: guest
    })
  }
  const toggelConfirmed = (guest) => {
    dispatch({
      type: 'ISCONFIRMED',
      payload: guest
    })
  }
  const toggelFilter = () => {
    dispatch({
      type: 'TOGGEL_FILTER',
    })
  }
  const updateGuest = (guest) => {
    dispatch({
      type: 'UPDATE',
      payload: guest
    })
  }
  const removeGuest = (guest) => {
    dispatch({
      type: 'REMOVE',
      payload: guest
    })
  }
  const addGuest = (guest) => {
    dispatch({
      type: 'ADD2',
      payload: guest
    })
  }
  const changeEdit = (id) => {
    dispatch({
      type: 'CHANGE_EDIT',
      payload: id
    })
  }


  return (
    <Context.Provider value={{
      pending: state.pending,
      filter: state.filter,
      guests: state.guests,
      counter,
      updatePending,
      toggelConfirmed,
      toggelFilter,
      updateGuest,
      changeEdit,
      removeGuest,
      addGuest
    }}>
      {props.children}
    </Context.Provider>
  )
}
export default State
