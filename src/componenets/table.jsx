import React from 'react'

const Table = ({
  data={},
  className = "table",
  columns=[ {name: "header", property: "value"} ],
}) => {
  return (
    <div>
      <table className={className}>
      <tr>
        {columns.map(col => {
          return (
            <th>{col.name}</th>
          )
        })}
      </tr>
      {data.routes.map(d => {
        return (
          <tr>
            <td>{data.getAirlineById(d.airline).name}</td>
            <td>{data.getAirportByCode(d.src).name}</td>
            <td>{data.getAirportByCode(d.dest).name}</td>
          </tr>
        )
      })}
      </table>
    </div>
  )
}

export default Table