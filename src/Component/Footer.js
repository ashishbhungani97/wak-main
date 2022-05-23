const Footer = () => {
    return (
        <>
            <div className="footer-section top-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-3 col-sm-6">
                            <div className="footer-child mb-5 mb-xl-0">
                                <div className="footer-logo pb-30">
                                    <a href="#sec"><img src={require('../assets/images/logo.png')} alt="logo here" className="img-fluid" /></a>
                                </div>
                                <ul className="social-icon footer-socials">
                                    <li><a href="#se"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#se"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#se"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#se"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#se"><i className="fab fa-telegram-plane"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-1 col-md-1 col-sm-6 mb-5 mb-xl-0"></div>
                        <div className="col-xl-3 col-md-3 col-sm-6 mb-5 mb-xl-0">
                            <div className="footer-child">
                                <h4 className="footer-tittle pos-relative">HELP</h4>
                                <ul className="footer-links pt-40">
                                    <li><i className="fas fa-angle-double-right"></i><a href="#sec">Community</a></li>
                                    <li><i className="fas fa-angle-double-right"></i><a href="#sec">Knowledge base</a></li>
                                    <li><i className="fas fa-angle-double-right"></i><a href="#sec">Contact</a></li>
                                    <li><i className="fas fa-angle-double-right"></i><a href="#sec">List Coin</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3 col-md-4 col-sm-4">
                            <div className="footer-child">
                                <h4 className="footer-tittle pos-relative">Company</h4>
                                <ul className="footer-links pt-40">
                                    <li><i className="fas fa-angle-double-right"></i><a href="#sec">About</a></li>
                                    <li><i className="fas fa-angle-double-right"></i><a href="#sec">Affiliate Program</a></li>
                                    <li><i className="fas fa-angle-double-right"></i><a href="#sec">Careers</a></li>
                                    <li><i className="fas fa-angle-double-right"></i><a href="#sec">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-2 col-md-4 col-sm-4">
                            <div className="footer-child">
                                <h4 className="footer-tittle pos-relative">Products</h4>
                                <ul className="footer-links pt-40">
                                    <li><i className="fas fa-angle-double-right"></i><a href="#sec">Exchange</a></li>
                                    <li><i className="fas fa-angle-double-right"></i><a href="#sec">Stake</a></li>
                                    <li><i className="fas fa-angle-double-right"></i><a href="#sec">Swap</a></li>
                                    <li><i className="fas fa-angle-double-right"></i><a href="#sec">Store</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom pb-30">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-5 col-md-8">
                                <div className="coppyright-text">
                                    <p>Copyright © 2022, <span>WhizzX .</span> All Rights Reserved.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-8">
                                <div className="coppyright-text">
                                    <a href="#sec">User Agreement</a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-8">
                                <div className="coppyright-text">
                                    <a href="#sec">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer