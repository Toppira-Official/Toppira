import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CommonLayout } from './features/shared/components/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
