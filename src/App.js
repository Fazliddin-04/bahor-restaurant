import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Content />
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
