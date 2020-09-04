import React from 'react'
import Filter from './Filter'
import Counter from './Counter'
import AddGuest from './AddGuest'

const Main = () => {
  return (
    <div className="main">
      <Filter />
      <AddGuest />
      <Counter />
    </div>
  )
}
export default Main
