import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './components/Login'
import {  Switch, Route } from 'react-router'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/dashboard" render={(props) => <Dashboard {...props}/>}>
            {/* <Dashboard /> */}
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
