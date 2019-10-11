import React from 'react'
import './index.css'
import IndexMarkup from '../Markup/IndexMarkup/IndexMarkup.jsx'
import utils from '../../utils'
import PersonMarkup from '../Markup/PersonMarkup/PersonMarkup'

function renderMarkup(props) {
  if (!props) return null
  // console.log('url', url)
  if (props.route === 'index') {
    return (
      <IndexMarkup
        personData={props.personsData}
        personsData={props.personsData}
        personTableCols={props.personTableCols}
        indexTableCols={props.indexTableCols}
        onClick={props.onClick}
        route={props.route}
      />
    )
  }
  const url = new URL(window.location)
  console.log('url', url)
  if (url.hash.includes('/person')) {
    if (utils.checkForParams(url.hash)) {
      return (
        <PersonMarkup
          starshipData={props.starshipData}
          speciesData={props.speciesData}
          planetData={props.planetData}
          filmsData={props.filmsData}
          personData={props.personData}
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
  if (!props) return null
  return (
    <div className="Page">
      <header>Starwar character demo</header>
      {renderMarkup(props)}
    </div>
  )
}

export default Page
