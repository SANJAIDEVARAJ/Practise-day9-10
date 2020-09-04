export default (state, { type, payload }) => {
  switch (type) {
    case 'PENDING':
      if (payload !== '')
        return {
          ...state,
          pending: payload
        }
      return {
        ...state,
        pending: null
      }
    case 'ISCONFIRMED':
      return {
        ...state,
        guests: state.guests.map(guest => {
          if (guest.id === payload.id)
            return {
              ...guest,
              confirmed: !guest.confirmed
            }
          return guest
        })
      }
    case 'TOGGEL_FILTER':
      return {
        ...state,
        filter: !state.filter
      }
    case 'UPDATE':
      return {
        ...state,
        guests: state.guests.map(guest => {
          if (guest.id === payload.id) {
            return {
              ...guest,
              name: payload.name,
              editing: !guest.editing
            }
          }
          return guest
        })
      }
    case 'CHANGE_EDIT':
      return {
        ...state,
        guests: state.guests.map(guest => {
          if (guest.id === payload) {
            return {
              ...guest,
              editing: true
            }
          }
          return guest
        })
      }
    case 'REMOVE':
      return {
        ...state,
        guests: state.guests.filter(guest => guest.id !== payload.id)
      }
    case 'ADD2':
      return {
        ...state,
        guests: [payload, ...state.guests]
      }
    default:
      return state
  }
}