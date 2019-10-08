import React from 'react'

// takes iconName
function Icon(props) {
  return (
    <div className="icon">
      <i
        className={`material-icons md=${props.size} icon`}
        onClick={props.onClick}
      >
        {props.iconName}
      </i>
    </div>
  )
}

export default Icon
