import React from 'react'

// takes iconName
function Main(props) {
  return (
    <div className="icon">
      <i class="material-icons md-18">{props.iconName}</i>
    </div>
  )
}

export default Main
