import './Navbar.css';

function Navbar() {
  return (
      <div className="columns" id="navColumns">
        <button className="column" id="navBlock">
            Speakers List
        </button>
        <button className="column" id="navBlock">
          Informal Discussion
        </button>
        <button className="column" id="navBlock">
         Opening Statements
        </button>
        <button className="column" id="navBlock">
          Catch-The-Eye Debate
        </button>
      </div>
  );
}

export default Navbar;
