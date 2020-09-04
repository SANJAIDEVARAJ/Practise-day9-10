import React, { useContext } from 'react'
import Context from './context'

const Counter = () => {
  const { counter } = useContext(Context)

  return (
    <div className="counter">
      <table >
        <tbody>
          <tr>
            <th>Total Guests</th>
            <td>{counter.total}</td>
          </tr>
          <tr>
            <th>Cofirmed Guests</th>
            <td>{counter.confirmed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Counter
