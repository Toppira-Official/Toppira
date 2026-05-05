import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/App.css';
import { CommonLayout } from '~pages/layout';
import { Home } from '~pages/home';
import { NotFound } from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
