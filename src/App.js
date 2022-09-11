import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portofolios from './pages/Portofolios';
import Blog from './pages/Blog';
import AddPorto from './pages/AddPorto';

function App() {
  return (
    // <div className="App">
    //   <ResponsiveAppBar />
    // </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/portfolios' element={<Portofolios />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/addPorto' element={<AddPorto />} />

    </Routes>
  );
}

export default App;
