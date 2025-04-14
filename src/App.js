import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Index from './pages';
import Header from './components/header'
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Index />
      <Footer/>
    </>
  );
}

export default App;
