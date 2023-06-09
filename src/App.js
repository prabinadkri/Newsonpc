import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter
} from "react-router-dom"
export class App extends Component {
  apikey=process.env.REACT_APP_API;
  render() {
    return (
      <div>
        <HashRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News apikey={this.apikey} key="general" country="in" pageSize={6} category="general"/>}></Route>
          <Route exact path='/business' element={<News apikey={this.apikey} key="business" country="in" pageSize={6} category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News apikey={this.apikey} key="entertainment" country="in" pageSize={6} category="entertainment"/>}></Route>
          <Route exact path='/general' element={<News apikey={this.apikey} key="general" country="in" pageSize={6} category="general"/>}></Route>
          <Route exact path='/health' element={<News apikey={this.apikey} key="health" country="in" pageSize={6} category="health"/>}></Route>
          <Route exact path='/science' element={<News apikey={this.apikey} key="science" country="in" pageSize={6} category="science"/>}></Route>
          <Route exact path='/sports' element={<News apikey={this.apikey} key="sports" country="in" pageSize={6} category="sports"/>}></Route>
          <Route exact path='/technology' element={<News apikey={this.apikey} key="technology" country="in" pageSize={6} category="technology"/>}></Route>
        </Routes>
        
        </HashRouter>
      </div>
    )
  }
}

export default App
