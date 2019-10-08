import React from 'react'

function Table(props) {
  if (!props.persons) return null
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
        {props.persons
          ? props.persons.map((person, i) => {
              const personKey = Object.keys(person)[0]
              //   console.log(person)
              return (
                <tr>
                  <td key={i}>{person[personKey].name}</td>
                </tr>
              )
            })
          : null}
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  )
}
export default Table
