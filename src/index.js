import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import main from './components/Main'



class Yo extends Component {
  render() {
    return (
      <div>Yo</div>
    )
  }
}

class Ya extends Component {
  render() {
    return (
      <div>Ya</div>
    )
  }
}

render((
  <HashRouter>
    <div>
      <Route exact path='/' component={main} />
      <Route path='/yo' component={Yo} />
      <Route path='/ya' component={Ya} />
    </div>
  </HashRouter>
), document.getElementById('app'));
