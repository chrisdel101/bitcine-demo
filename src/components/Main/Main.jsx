import React from 'react'
import './index.css'
import Table from '../Table/Table.jsx'

function Main(props) {
  if (!props.personsData) return null
  // console.log('main', props)
  return (
    <main className="Main">
      <div className="character-conatiner">
        <Table
          currentPersonObj={props.currentPersonObj}
          personTableCols={props.personTableCols}
          indexTableCols={props.indexTableCols}
          personsData={props.personsData ? props.personsData : null}
          onClick={props.onClick}
          route={props.route}
        />
      </div>
    </main>
  )
}

export default Main
