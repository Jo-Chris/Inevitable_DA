import {useEthers} from "@usedapp/core";

export function Navbar() {

    const {account, activateBrowserWallet, deactivate} = useEthers();

    const handleConnection = () => {
        if (account) {
            deactivate();
        } else {
            activateBrowserWallet();
        }
    }

    return (
        <nav className="nav">
            <h1>SC on the Frontend</h1>
            <button className="btn btn-dark" onClick={() => handleConnection()}>
                {
                    account ? 'Deactivate' : 'Connect'
                }
            </button>
        </nav>
    )
}