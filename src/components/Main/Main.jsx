import React from 'react'
import Table from '../Table/Table.jsx'

function Main(props) {
  if (!props.personsData) return null
  return (
    <main className="Main">
      <div className="character-conatiner">
        <Table
          starshipData={props.starshipData}
          speciesData={props.speciesData}
          planetData={props.planetData}
          filmsData={props.filmsData}
          personData={props.personData}
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
