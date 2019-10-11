import React from 'react'
import Main from '../../Main/Main.jsx'
import Icon from '../../Material/Icon/Icon.jsx'
import './index.css'
function PersonMarkup(props) {
  if (!props) return null
  if (!props.personData) {
    return (
      <div>
        <Icon iconName="arrow_back" size="18" onClick={props.onClick} />
        <strong>No Character Selected.</strong> Use the back arrow to choose a
        character.
      </div>
    )
  }
  return (
    <React.Fragment>
      <Icon iconName="arrow_back" size="18" onClick={props.onClick} />
      <Main
        starshipData={props.starshipData}
        speciesData={props.speciesData}
        planetData={props.planetData}
        filmsData={props.filmsData}
        personData={props.personData}
        personsData={props.personsData}
        indexTableCols={props.indexTableCols}
        personTableCols={props.personTableCols}
        onClick={props.onClick}
        route={props.route}
      />
    </React.Fragment>
  )
}
export default PersonMarkup
