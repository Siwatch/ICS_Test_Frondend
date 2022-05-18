import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './component/Header'
import CardDetail from './component/CardDetail';
import SideBar from './component/SideBar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <SideBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
