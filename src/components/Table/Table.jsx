import React from 'react'

function Table(props) {
  if (!props.personsData) return null
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {props.tableCols.map((col, i) => {
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
                  <td>{person[personKey].name}</td>
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
}
export default Table
