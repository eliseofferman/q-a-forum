import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Navigation from "./navigation"
import HomeView from "./home-view"
import AdminView from "./admin-view"

export default class App extends React.Component {

  render() {
    return (
      <HashRouter>

        <div>
          <Navigation />
          <Route exact path="/" component={HomeView} />
          <Route path="/admin" component={AdminView} />
        </div>
      </HashRouter>
    )
  }

}
