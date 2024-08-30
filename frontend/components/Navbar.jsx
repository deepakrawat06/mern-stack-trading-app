import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Support</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar