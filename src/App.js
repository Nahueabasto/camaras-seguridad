import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Inicio from './Pages/Inicio';


function App() {
  
  return (
    <BrowserRouter>
    <div className="App"> 
        <Switch>
          <Route exact path="/" component={Inicio} />
       
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
