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
      PERSON
      <Main
        currentPersonObj={props.currentPersonObj}
        personsData={props.personsData}
        indexTableCols={props.indexTableCols}
        personTableCols={props.personTableCols}
        onClick={props.onClick}
        route={props.route}
      />
      <Icon iconName="arrow_forward_ios" size="md" onClick={props.onClick} />
      <Icon iconName="arrow_back_ios" size="md" onClick={props.onClick} />
    </React.Fragment>
  )
}
export default PersonMarkup
