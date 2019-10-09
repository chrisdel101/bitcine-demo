import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Page from './Page/Page.jsx'

function Router(props) {
  //   console.log('roueter', props)
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Route
          exact
          path="/"
          component={() => (
            <Page
              personsData={props.personsData ? props.personsData : null}
              onClick={props.onClick}
              tableCols={props.tableCols}
            />
          )}
        />
        <Route
          exact
          path="/person/:id"
          component={() => (
            <Page
              personsData={props.personsData ? props.personsData : null}
              onClick={props.onClick}
              tableCols={props.tableCols}
            />
          )}
        />
      </div>
    </HashRouter>
  )
}

export default Router
