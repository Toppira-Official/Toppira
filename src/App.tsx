import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/App.css';
import { CommonLayout } from '~pages/layout';
import { Home } from '~pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
