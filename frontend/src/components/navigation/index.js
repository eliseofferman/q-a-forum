import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <div className="navigationmenu">
        <ul>
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
