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
              indexTableCols={props.indexTableCols}
              route="index"
            />
          )}
        />
        <Route
          path="/person/:personslug"
          component={() => (
            <Page
              starshipData={props.starshipData}
              speciesData={props.speciesData}
              planetData={props.planetData}
              filmsData={props.filmsData}
              personData={props.personData}
              personsData={props.personsData}
              indexTableCols={props.indexTableCols}
              onClick={props.onClick}
              route="person/:personslug"
              personTableCols={props.personTableCols}
            />
          )}
        />
      </div>
    </HashRouter>
  )
}

export default Router
