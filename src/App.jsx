import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegistrationProvider } from './context/RegistrationContext';
import LandingPage from './pages/LandingPage';
import CatalogPage from './pages/CatalogPage';
import SchedulePage from './pages/SchedulePage';

function App() {
  return (
    <RegistrationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
      </Router>
    </RegistrationProvider>
  );
}

export default App;