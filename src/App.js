import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import PageSelector from './containers/pageselector'
import './App.css'

class App extends Component {
  render() {
    return (

      <Router basename={'/catcatshelf/movie'}>
        <div className="App">
          <div style={{width:"100%", height:"100%"}}>
            <Route path={`/`} component={PageSelector} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
