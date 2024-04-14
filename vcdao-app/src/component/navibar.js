import react from "react";
import "../App.css";
import MetaMask from "../MetaMask";

function Navibar(props) {
    return (
        <div className="navbar">
            <h1 className="Name">MEMEDAO</h1>
            <div className="menu">
                <h2 className="item">Funding</h2>
                <h2 className="item">Proposal</h2>
                <h2 className="item">Mint</h2>
                <MetaMask />
            </div>
        </div>
    );
}

export default Navibar;