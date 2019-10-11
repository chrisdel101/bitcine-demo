import React from 'react'
import Main from '../../Main/Main.jsx'
import Icon from '../../Material/Icon/Icon.jsx'
import './index.css'
function IndexMarkup(props) {
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
      <div className="index-icon-container">
        <Icon iconName="arrow_back_ios" size="30  " onClick={props.onClick} />
        <Icon iconName="arrow_forward_ios" size="30" onClick={props.onClick} />
      </div>
    </React.Fragment>
  )
}
export default IndexMarkup
