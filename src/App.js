import logo from './logo.svg';
import './App.css';
import './Custom.css';
import SideNav from './components/Sidenavbar';
import Profile from './components/Profile';


import { Container, Row, Col } from 'react-bootstrap';

function App() {
  
  return (
    <div className="App">
      <Container className='main' >
        
        <Row style={{display:'flex',width:'100%' }}>
          
          <Col xs={1} md={1} lg={1} style={{ width:'100px'}}>
            <SideNav/>
          </Col>
          
          <Col xs={12} md={6} lg={4} style={{width:'40%'}}>
            <Profile/>
          </Col>
          
          <Col xs={12} md={6} lg={4}>
            <h2>Golla Lorem ipsum is a placeholder text used in graphic design and typesetting to preview layouts. It's also known as "lipsum"</h2>
          </Col>

        </Row>

      </Container>
      
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
