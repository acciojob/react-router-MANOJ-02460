import React from 'react'
import Home from "./Home"
import About from "./About"
import {Switch, Route, Link } from 'react-router-dom'

const Navigation = () => {
  return (
    
    <>
        <nav style={{display:'flex', flexDirection:'column',}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        <Switch >
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </Switch>
        
        
    </>
  )
}

export default Navigation