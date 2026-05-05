import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/App.css';
import { CommonLayout } from '~pages/layout';
import { Home } from '~pages/home';
import { NotFound } from './pages/404';
import { About } from './pages/about';
import { Products } from './pages/products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
