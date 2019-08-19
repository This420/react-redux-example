import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import App from './App'
import Counter from './counter'

const Router: React.FC = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/counter">COUNTER</Link></li>
      </ul>
    </nav>
    <hr/>
    <div className="content">
      <Route exact path="/" component={ App } />
      <Route path="/counter" component={ Counter } />
    </div>
  </BrowserRouter>
)

export default Router