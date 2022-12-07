import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {Config, DAppProvider, Goerli} from "@usedapp/core";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// config here
const config: Config = {
    readOnlyChainId: Goerli.chainId,
    readOnlyUrls: {
        [Goerli.chainId]: 'https://goerli.infura.io/v3/INFURA_API_KEY',
    },
}

// wrap everything here
root.render(
    <DAppProvider config={config}>
        <App/>
    </DAppProvider>
);

reportWebVitals();
