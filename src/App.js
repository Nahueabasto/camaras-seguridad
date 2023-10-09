import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import './App.css';
import Inicio from './pages/Inicio';


function App() {
  
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Inicio} /> 
    </Switch>
    </BrowserRouter>
  );
}


export default App;
