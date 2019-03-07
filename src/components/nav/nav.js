import React from 'react';
import {NavLink} from "react-router-dom";
import './nav.css'

export default function Nav() {
  return (
    <div>
      <div className="nav">
        <NavLink className="nav--link" to="/about" activeClassName="active">About</NavLink>
        <NavLink className="nav--link" to="/interview/" activeClassName="active">Interview</NavLink>
        <NavLink className="nav--link" to="/portfolio/" activeClassName="active">Portfolio</NavLink>
      </div>
    </div>
  )
}