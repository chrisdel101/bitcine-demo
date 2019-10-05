import React from 'react'
import './index.css'
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import Icon from '../Material/Icon/Icon.jsx'
import utils from '../../utils'
import endpoints from '../../endpoints'
import { useState } from 'react'

function Page() {
  const [peopleCount, setCount] = useState(0)
  const test = `${endpoints.root}${endpoints.people(1)}`
  utils.fetchAPI(test).then(res => {
    console.log('res', res)
  })
  return (
    <div className="Page">
      <i class="material-icons">arrow_forward_ios</i>
      <Header />
      <Main />
    </div>
  )
}

export default Page
