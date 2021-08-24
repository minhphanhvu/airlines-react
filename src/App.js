import React, { Component } from 'react'
import './App.css'
import Data from './data.js'
import Table from './componenets/table'

const App = () => {
  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];

  return (
  <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
    <Table className="routes-table" data={Data} columns={columns} />
    </section>
  </div>
  )
}

export default App;