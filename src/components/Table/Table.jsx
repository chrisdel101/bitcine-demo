import React from 'react'

function Table(props) {
  console.log('table', props)
  if (!props.personsData || !props.indexTableCols) return null
  if (props.route === 'index') {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {props.indexTableCols.map((col, i) => {
              return (
                <th scope="col" key={i}>
                  {col}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {props.personsData
            ? props.personsData.map((person, i) => {
                //   console.log('person', person)
                const personKey = Object.keys(person)[0]
                return (
                  <tr key={i}>
                    <td onClick={props.onClick} className="person-name-cell">
                      {person[personKey].name}
                    </td>
                    <td>{person[personKey].birth_year}</td>
                    <td>{person[personKey].height}</td>
                    <td>{person[personKey].mass}</td>
                  </tr>
                )
              })
            : null}
        </tbody>
      </table>
    )
  } else if (props.route === 'person/:personslug') {
    const personKey = Object.keys(props.currentPersonObj)[0]
    const person = props.currentPersonObj[personKey]
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {props.personTableCols.map((col, i) => {
              return (
                <th scope="col" key={i}>
                  {col}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td onClick={props.onClick} className="person-name-cell">
              {person.name}
            </td>
            <td>{person.birth_year}</td>
            <td>{person.height}</td>
            <td>{person.mass}</td>
            <td>{person.hair_color}</td>
            <td>{person.eye_color}</td>
            <td>{person.gender}</td>
            <td>{person.films}</td>
            <td>{person.homeworld}</td>
            <td>{person.skin_color}</td>
            <td>{person.species}</td>
            <td>{person.starships}</td>
            <td>{person.vehicles}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
export default Table
