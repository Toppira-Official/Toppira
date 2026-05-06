import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/App.css';
import 'aos/dist/aos.css';
import { CommonLayout } from '~pages/layout';
import { Home } from '~pages/home';
import { NotFound } from './pages/404';
import { About } from './pages/about';
import { Products } from './pages/products';
import { useTheme } from './features/shared/store/theme';
import React from 'react';
import AOS from 'aos';

function App() {
  const setTheme = useTheme((state) => state.setTheme);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) setTheme(savedTheme);

    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

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
