import React, { Component } from 'react'
import './App.css'
import Data from './data.js'

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
  <table>
    <tr>
      <th>airline</th>
      <th>src</th>
      <th>dest</th>
    </tr>
    {Data.routes.map(data => {
      return (
        <tr>
          <td>{Data.getAirlineById(data.airline).name}</td>
          <td>{Data.getAirportByCode(data.src).name}</td>
          <td>{Data.getAirportByCode(data.dest).name}</td>
        </tr>
      )
    })}
  </table>
  </section>
</div>
)

export default App;