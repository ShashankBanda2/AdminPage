import './App.css';
//import Increasecount from './usestateeg'
//import User from './useStateExample'
import Admin from './pages/admin';
import {Switch,Route} from 'react-router-dom'
import Login from './Login'


function App() {
  return (
    <div className="App">
    
    <Switch>
    <Route exact path="/" component={Admin}/>
      <Route exact path="/Login" component={Login}/>
    </Switch>

    </div>
  );
}

export default App;
