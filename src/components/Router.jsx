import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Page from './Page/Page.jsx'

function Router(props) {
  // const url = new URL(window.location)
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
          path="/person/:personslug"
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
