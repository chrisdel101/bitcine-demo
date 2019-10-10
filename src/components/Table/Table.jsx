import React from 'react'

function Table(props) {
  if (props.route === 'index') {
    if (!props.personsData || !props.indexTableCols) return null
    return (
      <table className="table table-striped">
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
                    <td
                      onClick={props.onClick}
                      className="person-name-cell table-hover"
                    >
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
    const allProps = props.allProps.allProps.allProps.allProps.allProps
    if (!allProps.viewFilmsArray.length) return null
    console.log('all', allProps.viewFilmsArray)
    const personKey = Object.keys(props.currentPersonObj)[0]
    const person = props.currentPersonObj[personKey]
    return (
      <table className="table">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{person.name}</td>
          </tr>
          <tr>
            <td>Birth Year</td>
            <td>{person.birth_year}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{person.height}</td>
          </tr>
          <tr>
            <td>Mass</td>
            <td>{person.mass}</td>
          </tr>
          <tr>
            <td>Hair Color</td>
            <td>{person.hair_color}</td>
          </tr>
          <tr>
            <td>Eye Color</td>
            <td>{person.eye_color}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{person.gender}</td>
          </tr>
          <tr>
            <td>Films</td>
            {allProps.viewFilmsArray.map(film => {
              return <td>{film}</td>
            })}
          </tr>
          <tr>
            <td>Homeworld</td>
            <td>{person.homeworld}</td>
          </tr>
          <tr>
            <td>Skin Color</td>
            <td>{person.skin_color}</td>
          </tr>
          <tr>
            <td>Species</td>
            <td>{person.species}</td>
          </tr>
          <tr>
            <td>Starships</td>
            <td>{person.starships}</td>
          </tr>
          <tr>
            <td>Vehicles</td>
            <td>{person.vehicles}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
export default Table
