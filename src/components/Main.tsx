import {useCalls, useContractFunction, useEtherBalance, useEthers} from "@usedapp/core";
import {formatEther} from "ethers/lib/utils";
import {Contract, utils} from "ethers";

export function Main() {

    // wallet details
    const {account, chainId} = useEthers();
    const balance = useEtherBalance(account);

    // contract declaration
    const cInterface = new utils.Interface(require('../contracts/abi.json'));
    const cAddr = 'CONTRACT_ADDR';
    const contract = new Contract(cAddr, cInterface);
    const useMultiCalls = (calls: any[]) => {
        const callsResult = useCalls(calls);
        return callsResult.map(result => result ? result.value : null);
    }

    // contract, method: 'owner', args: []
    const [owner, name, symbol, balanceOf] = useMultiCalls([
        {contract, method: 'owner', args: []},
        {contract, method: 'name', args: []},
        {contract, method: 'symbol', args: []},
        {contract, method: 'balanceOf', args: [account]}
    ]);

    const {
        state: mintState,
        send: mint
    } = useContractFunction(contract, 'safeMint');

    return (
        <div className="section-container">
            <div className="section" id="sec-one">
                <h1 className="section-header">Wallet Details</h1>
                <div className="data-chunks">
                    <div className="data-container">
                        <p>Address</p>
                        <hr/>
                        <p className="addr">{account ?? 'fetch error'}</p>
                    </div>
                    <div className="data-container">
                        <p>Chain ID</p>
                        <hr/>
                        <p>{chainId ?? 'fetch error'}</p>
                    </div>
                    <div className="data-container">
                        <p>Balance</p>
                        <hr/>
                        <p>{balance ? formatEther(balance).slice(0, 5) + ' ETH' : 'fetch error'}</p>
                    </div>
                </div>
            </div>
            <div className="section" id="sec-two">
                <h1 className="section-header">Contract Details</h1>
                <div className="data-chunks">
                    <div className="data-container">
                        <p>Owner</p>
                        <hr/>
                        <p className="addr">{owner ?? 'fetch error'}</p>
                    </div>
                    <div className="data-container">
                        <p>Name</p>
                        <hr/>
                        <p>{name ?? 'fetch error'}</p>
                    </div>
                    <div className="data-container">
                        <p>Symbol</p>
                        <hr/>
                        <p>{symbol ?? 'fetch error'}</p>
                    </div>
                    <div className="data-container">
                        <p>Mint Status</p>
                        <hr/>
                        <p>{mintState.status}</p>
                    </div>
                    {
                        account && <div className="data-container">
                            <button
                                className="btn btn-dark"
                                onClick={() => mint(account, '/this-gets-appended')}
                            >
                                Mint 🚀
                            </button>
                        </div>
                    }
                    <div className="data-container">
                        <p>Token balance</p>
                        <hr/>
                        <p>{Number(balanceOf)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}