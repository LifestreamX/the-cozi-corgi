import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Corgis from './components/pages/Corgis';
import Estate from './components/pages/Estate';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/corgis' exact element={<Corgis />} />
          <Route path='/estate' exact element={<Estate />} />
          <Route path='/sign-up' exact element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
