import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="navbar">
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/about'>About</Link>
        </div>
      </div>
    )
  } 
  
export default Navbar