import Init from './components/Init/Init';
import './App.css';
import { Route } from 'react-router';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Detail from './components/Detail/Detail'
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Init}/>
      <Route path='/weather' component={NavBar}/>
      <Route exact path='/weather/home' component={Home}/>
      <Route exact path='/weather/detail' component={Detail} />
      <Route exact path='/weather/about' component={About}/>
    </div>
  );
}

export default App;
