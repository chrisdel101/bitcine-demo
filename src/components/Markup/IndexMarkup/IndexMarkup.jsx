import React from 'react'
import Main from '../../Main/Main.jsx'
import Icon from '../../Material/Icon/Icon.jsx'
function IndexMarkup(props) {
  //   console.log(props)
  if (!props) return null
  return (
    <React.Fragment>
      <Main
        allProps={props}
        personsData={props.personsData}
        indexTableCols={props.indexTableCols}
        onClick={props.onClick}
        route={props.route}
      />
      <Icon iconName="arrow_forward_ios" size="md" onClick={props.onClick} />
      <Icon iconName="arrow_back_ios" size="md" onClick={props.onClick} />
    </React.Fragment>
  )
}
export default IndexMarkup
