
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { CatFactPage } from './pages/CatFact'



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/catfact"><CatFactPage/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/"><Home/></Route>

          {/* <Route path="/" element={Home}  />
          <Route path="/about" element={<About />} />
          <Route path="/catfact" element={<CatFactComponent />} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
