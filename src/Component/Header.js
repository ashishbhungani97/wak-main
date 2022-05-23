import { Link } from 'react-router-dom';
import { NavDropdown } from "react-bootstrap"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={require('../assets/images/logo.png')} alt="coin-67" style={{ "width": "200px", "height": "auto" }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0" style={{"fontSize" : "12px"}}>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Buy Crypto</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section">Market</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section">Trade</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section">Derivatives</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section">Earn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section">Finance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section">NFT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section">Mining</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{"fontSize" : "12px"}} >
                            <li className="nav-item">
                                <Link to="/balance" className="nav-link">Balance</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section">Order</a>
                            </li>
                            <NavDropdown title="English" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Spanish</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">English(UK)</NavDropdown.Item>
                            </NavDropdown>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header