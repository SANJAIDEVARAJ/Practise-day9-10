import React, { useContext } from 'react'
import Context from './context'

const Filter = () => {
  const { toggelFilter } = useContext(Context)
  return (
    <div className="filter" >
      <input type="checkbox" onChange={toggelFilter} />
      <p>Show Confirmed only!</p>
    </div>
  )
}

export default Filter
