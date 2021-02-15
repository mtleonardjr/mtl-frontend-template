import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from './components/Banner'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Columns from './components/Columns'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Banner />
        <Header />
        <Navbar />
        <div className="app">
          <div className="main-body">


            <Switch>
              <Route exact path='/'><Columns /></Route>
              <Route path='/about'><About /></Route>
            </Switch>
          </div>

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
