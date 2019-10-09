import React from 'react'
import './index.css'
import Table from '../Table/Table.jsx'

function Main(props) {
  return (
    <main className="Main">
      <div className="character-conatiner">
        <Table
          tableCols={props.tableCols}
          personsData={props.personsData ? props.personsData : null}
          onClick={props.onClick}
        />
      </div>
    </main>
  )
}

export default Main
