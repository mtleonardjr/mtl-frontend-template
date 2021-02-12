import './App.css';
import { Link } from "react-router-dom";

import Banner from './components/Banner'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Columns from './components/Columns'
import Footer from './components/Footer'
function App() {
  return (

      <div className="app">
        <Banner />
        <div className="main-body">
          <Header />
          <Navbar />
          <Columns />
        </div>
        <Footer />
      </div>

  );
}

export default App;
