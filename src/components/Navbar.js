import './Navbar.css';

function Navbar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navMenu">
      <div class="navbar-end">
        <a class="navbar-item">
          Speaker's List
        </a>
        <a class="navbar-item">
          Informal Discussion
        </a>
        <a class="navbar-item">
          Opening Statements
        </a>
        <a class="navbar-item">
          Catch-The-Eye Debate
        </a>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
