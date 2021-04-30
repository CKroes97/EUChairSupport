import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar({ chamber, setChamber }) {
  const modDisBlock = () => {
    if (chamber === "parl") {
      return <Link className="column" id="navBlock" to="/cte">
        Catch-the-Eye Debate
       </Link>
    } else {
      return <Link className="column" id="navBlock" to="/cte">
        Moderated Discussion
       </Link>
    }
  }
  const clearChamber = () => {
    setChamber("")
  }
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
      {modDisBlock()}
      <button className="columm" onClick={clearChamber}>
        reset
        </button>
    </div>
  );
}

export default Navbar;
