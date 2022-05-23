import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={require('../assets/images/logo.png')} alt="coin-67" style={{ "width": "200px", "height": "auto" }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
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
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/balance" className="nav-link">Balance</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section">Order</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#sec" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#action/3.1">Hindi</a></li>
                                    <li><a className="dropdown-item" href="#action/3.1">Spanish</a></li>
                                    <li><a className="dropdown-item" href="#action/3.1">English(UK)</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}
export default Header