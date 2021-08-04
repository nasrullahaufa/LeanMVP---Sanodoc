
import { useHistory } from "react-router";
import { useDispatch} from "react-redux";
import { setLogin } from "../store/action";
function Navbar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const logoutHandle=(event)=>{
        event.preventDefault();
        console.log("masuk")
        localStorage.clear()
        dispatch(setLogin(false))
        history.push('/login')

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Sanodoc</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
            <span className="navbar-text">
            <a className="nav-link" href="#" onClick={logoutHandle} tabindex="-1" >Logout</a>
    </span>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  