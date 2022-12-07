export function Main() {
    return (
        <div className="section-container">
            <div className="section" id="sec-one">
                <h1 className="section-header">Wallet Details</h1>
                <div className="data-chunks">
                    <div className="data-container">
                        <p>Address</p>
                        <hr/>
                        <p className="addr">{'n/v'}</p>
                    </div>
                    <div className="data-container">
                        <p>Chain ID</p>
                        <hr/>
                        <p className="addr">{'n/v'}</p>
                    </div>
                    <div className="data-container">
                        <p>Balance</p>
                        <hr/>
                        <p className="addr">{'n/v'}</p>
                    </div>
                </div>
            </div>
            <div className="section" id="sec-two">
                <h1 className="section-header">Contract Details</h1>
                <div className="data-chunks">
                    <div className="data-container">
                        <p>Owner</p>
                        <hr/>
                        <p className="addr">{'n/v'}</p>
                    </div>
                    <div className="data-container">
                        <p>Name</p>
                        <hr/>
                        <p className="addr">{'n/v'}</p>
                    </div>
                    <div className="data-container">
                        <p>Symbol</p>
                        <hr/>
                        <p className="addr">{'n/v'}</p>
                    </div>
                    <div className="data-container">
                        <p>Mint Status</p>
                        <hr/>
                        <p className="addr">{'n/v'}</p>
                    </div>
                    {
                        <div className="data-container">
                            <button
                                className="btn btn-dark"
                            >
                                Mint 🚀
                            </button>
                        </div>
                    }
                    <div className="data-container">
                        <p>Token balance</p>
                        <hr/>
                        <p className="addr">{'n/v'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}