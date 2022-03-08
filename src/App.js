import NavBar from './components/Navbar';
import Landing from './components/Landing';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route exact={true} path='/' element={<Landing/>} />
        </Routes>
        <Routes>
        <Route exact={true} path='/adduser' element={<AddUser/>}/>
        </Routes>
        <Routes>
        <Route exact={true} path='/allusers' element={<AllUsers/>}/>
        </Routes>
        <Routes>
        <Route exact={true} path='/edit/:id' element={<EditUser/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
