import logo from './logo.svg';
import './App.css';
import './Custom.css';
import SideNav from './components/Sidenavbar';
import Profile from './components/Profile';
import Details from './components/Details'

import { Container, Row, Col } from 'react-bootstrap';

function App() {
  
  return (
  
    <div className='container-fluid main'>
      
      <div className='row'>
        
        <div className='col-1'>
          <SideNav/>
        </div>
        
        <div className='col-4'>
          <Profile/>
        </div>

        <div className='col-7'>
          <Details/>
        </div>

      </div>
    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
