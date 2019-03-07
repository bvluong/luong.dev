import React from 'react';
import './header.css';
import Logo from '../logo/logo.js'

export default function Header() {
  return (
    <div className="header">
      <Logo/>
      <h1 className="header--text">Bryant Luong's Page</h1>
    </div>
  )
}
