import React from 'react'
import {Navbar} from "./components/Navbar";
import {Main} from "./components/Main";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="content">
                <Main/>
            </div>
        </div>
    );
}

export default App;
