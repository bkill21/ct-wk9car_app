import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Input from './components/Input';
import CarDisplay from './components/CarDisplay';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/car/:id" element={<CarDisplay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;