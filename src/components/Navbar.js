import './Navbar.css';
import { Router, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="columns" id="navColumns">
      <Link className="column" id="navBlock" to="/sl">
        Speakers List
          </Link>
      <Link className="column" id="navBlock" to="/id">
        Informal Discussion
          </Link>
      <Link className="column" id="navBlock" to="/os">
        Opening Statements
          </Link>
      <Link className="column" id="navBlock" to="/cte">
        Catch-The-Eye Debate
          </Link>
    </div>
  );
}

export default Navbar;
