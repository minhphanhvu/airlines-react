import React, { useState } from 'react'

const Table = ({
  data={},
  routes = [],
  className = "table",
  columns = [ {name: "header", property: "value"} ],
  perPage = 25
}) => {
  const [page, setPage] = useState(0)

  const start = page * perPage

  const nextPage = (e) => {
    e.preventDefault()
    setPage(page + 1)
  }

  const perviousPage = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }

  const pagRoutes = routes.slice(start, start + perPage)

  return (
    <div>
      <table className={className}>
      <thead>
        <tr>
          {columns.map(col => {
            return (
              <th>{col.name}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {pagRoutes.map(d => {
          return (
            <tr>
              <td>{data.getAirlineById(d.airline).name}</td>
              <td>{data.getAirportByCode(d.src).name}</td>
              <td>{data.getAirportByCode(d.dest).name}</td>
            </tr>
          )
        })}
      </tbody>
      </table>
      <div className="pagination">
        <p>Showing {start + 1} - {start + perPage} of {routes.length} routes.</p>
        <button disabled={page === 0} onClick={perviousPage}>
          Previous Page
        </button>
        <button disabled={start + perPage >= routes.length} onClick={nextPage}>
          Next Page
        </button>
      </div>
    </div>
  )
}

export default Table