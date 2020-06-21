import React from 'react'
import { Helmet } from 'react-helmet'

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>tanacchi's home</title>
      </Helmet>
      <h1>tanacchi</h1>
      <p>This is the tanacchi's portfolio.</p>
    </header>
  )
}

export default Header
