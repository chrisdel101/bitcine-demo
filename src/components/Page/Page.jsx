import React from 'react'
import './index.css'
import Table from '../Table/Table.jsx'
// import Header from '../Header/Header.jsx'
// import Main from '../Main/Main.jsx'
import Icon from '../Material/Icon/Icon.jsx'
// import utils from '../../fetch'
// import endpoints from '../../endpoints'
import { useState } from 'react'

function Page(props) {
  // const [peopleCount, setCount] = useState(0)
  return (
    <div className="Page">
      <header>Starwar character demo</header>
      <main>
        <div className="character-conatiner">
          <Table
            tableCols={props.tableCols}
            persons={props.persons ? props.persons : null}
          />
        </div>
      </main>
      <Icon iconName="arrow_forward_ios" size="md" onClick={props.onClick} />
      <Icon iconName="arrow_back_ios" size="md" onClick={props.onClick} />
    </div>
  )
}

export default Page
