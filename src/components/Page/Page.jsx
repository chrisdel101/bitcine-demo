import React from 'react'
import './index.css'
import Table from '../Table/Table.jsx'
// import Header from '../Header/Header.jsx'
import IndexMarkup from '../Markup/IndexMarkup/IndexMarkup.jsx'
import utils from '../../utils'
// import endpoints from '../../endpoints'
import { useState } from 'react'
import PersonMarkup from '../Markup/PersonMarkup/PersonMarkup'

function renderMarkup(props) {
  if (!props.personsData) return null
  console.log(props)
  if (utils.checkRoute('/')) {
    return (
      <IndexMarkup
        personsData={props.personsData}
        personTableCols={props.personTableCols}
        indexTableCols={props.indexTableCols}
        onClick={props.onClick}
        route={props.route}
      />
    )
  }
  const url = new URL(window.location)
  if (url.hash.includes('/person')) {
    if (utils.checkForParams(url.hash)) {
      return (
        <PersonMarkup
          currentPersonObj={props.currentPersonObj}
          personsData={props.personsData}
          personTableCols={props.personTableCols}
          indexTableCols={props.indexTableCols}
          onClick={props.onClick}
          route={props.route}
        />
      )
    }
  }
}

function Page(props) {
  if (!props.personsData) return null
  // const [peopleCount, setCount] = useState(0)
  return (
    <div className="Page">
      <header>Starwar character demo</header>
      {renderMarkup(props)}
    </div>
  )
}

export default Page
