import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Navigation from "./navigation"
import HomeView from "./home-view"
import AdminView from "./admin-view"

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={HomeView} />
          <Route path="/admin" component={AdminView} />
        </div>
      </BrowserRouter>
    )
  }

}
