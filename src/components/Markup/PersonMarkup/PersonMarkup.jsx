import React from 'react'
import Main from '../../Main/Main.jsx'
import Icon from '../../Material/Icon/Icon.jsx'
function PersonMarkup(props) {
  console.log('person', props.currentPersonObj)
  if (!props.personsData) return null
  if (props.currentPersonObj === 'No Character Chosen') {
    return <React.Fragment>No Character Selected</React.Fragment>
  }
  return (
    <React.Fragment>
      <Icon iconName="arrow_back" size="18" onClick={props.onClick} />
      <Main
        currentPersonObj={props.currentPersonObj}
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