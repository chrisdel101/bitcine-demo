import React from 'react'
import Main from '../../Main/Main.jsx'
import Icon from '../../Material/Icon/Icon.jsx'
function PersonMarkup(props) {
  console.log('person')
  if (!props.personsData) return null
  return (
    <React.Fragment>
      PERSON
      {/* <Main
        personsData={props.personsData}
        tableCols={props.tableCols}
        onClick={props.onClick}
      />
      <Icon iconName="arrow_forward_ios" size="md" onClick={props.onClick} />
      <Icon iconName="arrow_back_ios" size="md" onClick={props.onClick} /> */}
    </React.Fragment>
  )
}
export default PersonMarkup
