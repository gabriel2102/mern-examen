import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import PiratesList from './views/PiratesList';
import PirateDetail from './views/PirateDetail';
import PirateForm from './components/PirateForm';
import CreatePirate from './views/CreatePirate';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Main/>}/>
            <Route path='/pirates' exact element={<PiratesList/>}/>
            <Route path='/pirate/:id' exact element={<PirateDetail/>}/>
            <Route path='/pirate/new' exact element={<CreatePirate/>}/>
            
          </Routes>
        </BrowserRouter>
      </UserProvider>
      
    </div>
  );
}

export default App;
