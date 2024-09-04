import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Mobile from './Mobile';
import Laptop from './Laptop';
import Electronics from './Electronics';
import Upload from './Upload';
function Routing()
{
   return(
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mobile">mobile</Nav.Link>
            <Nav.Link href="/laptop">Laptop</Nav.Link>
            <Nav.Link href="/electronics">Electronics</Nav.Link>
            <Nav.Link href="/cloths">Cloths</Nav.Link>
            <Nav.Link href="/others">Others</Nav.Link>
            <Nav.Link href="/upload">Upload</Nav.Link>
            <Nav.Link ><button>Login</button></Nav.Link>
            <Nav.Link ><button>Register</button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/mobile' Component={Mobile}></Route>
        <Route path='/laptop' Component={Laptop}></Route>
        <Route path='/electronics' Component={Electronics}></Route>
        <Route path='/upload' Component={Upload}></Route>
      </Routes>
    </div>
   )
}
export default Routing