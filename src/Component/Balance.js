import { useState } from 'react';

const Balance = () => {

    const [show, setShow] = useState(true);

    const search = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    return (
        <>
            <div className="banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h1>
                                Balance
                            </h1>

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="d-flex align-items-center mt-4">
                                <p className='mx-2'>Estimated Value (BTC)</p>
                                {/* <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" ><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></p> */}
                                <a href="#section" onClick={(e) => {setShow(!show)}} >
                                    {show ? (
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" ><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                        ) :
                                        (< img src={require('../assets/images/eye.png')} alt="close-eye" />)
                                    }
                                </a>
                            </div>
                            <h4 className="mt-4 mb-4">{show  ? ('0.00000000') : ('*****') } <span className="fs-6">&#x2248; $ {show ? ('0.00') : ('***') }</span></h4>
                            <div className="d-flex align-items-center">
                                <a href="#section" className="btn btn-outline-danger me-2">DEPOSIT</a>
                                <a href="#section" className="btn btn-outline-danger me-2">WITHDRAW</a>
                                <a href="#section" className="btn btn-outline-danger me-2">TRANSFER</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="data-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <h1>Wallet Account</h1>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="d-flex align-items-center mt-4">
                                    <p className='mx-2'>Estimated Value (BTC)</p>
                                    {/* <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" ><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></p> */}
                                    <a href="#s" onClick={(e) => {setShow(!show)}}>
                                    {show ? (
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" ><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                        ) :
                                        (< img src={require('../assets/images/eye.png')} alt="close-eye" />)
                                    }
                                    </a>
                                </div>
                                <h4 className="mt-4 mb-4">{show  ? ('0.00000000') : ('*****') } <span className="fs-6">&#x2248; $ {show ? ('0.00') : ('***') }</span></h4>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <a href="#section" className="btn btn-outline-danger">Hide Small</a>
                                        <form action="#" className="header__search">
                                            <input type="text" placeholder="Search Coins" id="myInput" onKeyUp={search} />
                                            <button type="button"><svg viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className='table table table-striped table-hover' id="myTable">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Available</th>
                                                    <th>Frozen</th>
                                                    <th>Value(---)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className='pair-area'>
                                                            <img src={require('../assets/images/coin/1.png')} alt="" className="img-fluid avatar mx-1" />
                                                            <p>
                                                                Bitcoin
                                                                <span className='text-white'> BTC</span>
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>0.00000000</td>
                                                    <td>0.00000000</td>
                                                    <td>---</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className='pair-area'>
                                                            <img src={require('../assets/images/coin/2.png')} alt="" className="img-fluid avatar mx-1" />
                                                            <p>
                                                                Ethereum
                                                                <span className='text-white'> ETH</span>
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>0.00000000</td>
                                                    <td>0.00000000</td>
                                                    <td>---</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className='pair-area'>
                                                            <img src={require('../assets/images/coin/3.png')} alt="" className="img-fluid avatar mx-1" />
                                                            <p>
                                                                Tether
                                                                <span className='text-white'> USDT</span>
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>0.00000000</td>
                                                    <td>0.00000000</td>
                                                    <td>---</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className='pair-area'>
                                                            <img src={require('../assets/images/coin/8.png')} alt="" className="img-fluid avatar mx-1" />
                                                            <p>
                                                                Solana
                                                                <span className='text-white'> SOL</span>
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>0.00000000</td>
                                                    <td>0.00000000</td>
                                                    <td>---</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Balance