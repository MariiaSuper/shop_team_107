import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />

      <TestComponent />
    </div>
  );
}

export default App;
