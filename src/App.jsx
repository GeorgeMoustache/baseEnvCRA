import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import RouterGuard from '@router'
import routerConfig from '@router/config'

const App = () => {
  return (
    <Router>
      <RouterGuard config={routerConfig} />
    </Router>
  )
}

export default App