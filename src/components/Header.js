import { Link } from 'gatsby'
import React from 'react'

export default function Header() {
  return (
    <header>
      <h1>Gatsby Source Wordpress + Framer Motion issue</h1>
      <nav>
        <ul style={{listStyleType:'none', display:'flex'}}>
          <li style={{marginRight:'2rem'}}><Link to="/">Page 1</Link></li>
          <li><Link to="/page-2">Page 2</Link></li>
        </ul>     
      </nav>
    </header>
  )
}
