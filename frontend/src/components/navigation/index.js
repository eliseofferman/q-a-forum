import React from "react"
import { Link } from "react-router-dom"

export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/admin">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
