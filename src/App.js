import React, { useState } from 'react'
import './App.css'
import Data from './data.js'
import Table from './componenets/table'
import Select from './componenets/select'

const App = () => {
  const [airline, setAirline] = useState("all")
  const [filteredRoutes, setFilteredRoutes] = useState(Data.routes)

  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];

  const filteredAirlines = Data.airlines.map(a => a.name)

  const airlineHandleChange = (value) => {
    setAirline(value)
    setFilteredRoutes(filterRoutes(value))
  }

  const filterRoutes = (airline) => {
    if (airline !== "All Airlines") {
      const id = Data.airlines.filter(a => a.name === airline)[0].id
      return Data.routes.filter(r => r.airline === id)
    } else {
      return Data.routes
    }
  }

  const clearFilters = () => {
    setAirline("all")
    setFilteredRoutes(filterRoutes("All Airlines"))
  }

  return (
  <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <div className="filters">
      <Select options={filteredAirlines}
              value={airline}
              allTitle="All Airlines"
              onSelect={airlineHandleChange} />
      <button disabled={ airline === "all" } onClick={clearFilters}>Show all routes</button>
    </div>

    <section>
      <Table className="routes-table" data={Data} routes={filteredRoutes} columns={columns} />
    </section>
  </div>
  )
}

export default App;