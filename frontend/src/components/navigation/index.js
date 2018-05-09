import React from "react"
import { Link } from "react-router-dom"
import "./navigation.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <div >
        <ul className="navigationmenu">
          <li className="linkstyle">
            <Link to="/admin">
              admin
            </Link>
          </li>
          <li className="linkstyle">
            <Link to="/">
              home
            </Link>
          </li>
        </ul>
      </div>
    </div>
    )
  }
}
