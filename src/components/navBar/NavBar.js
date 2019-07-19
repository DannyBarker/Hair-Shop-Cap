import React, {Component} from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'
import "bootstrap/dist/css/bootstrap.min.css"

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" >Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" >About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" >Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}