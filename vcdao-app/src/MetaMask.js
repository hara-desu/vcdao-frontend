import React, { useState } from "react";
import { ethers } from "ethers";
import "./App.css";

const MetaMask = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChanged([result[0]]);
            }) 
        } else {
            setErrorMessage('Install MetaMask, please!')
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName);
    }

    return(
        <div className="item">
            {!defaultAccount ? (
                errorMessage ? (
                    <h3 className="item">{errorMessage}</h3>
                ) : (
                    <button className="btn" onClick={connectWallet}>
                        Connect Wallet
                    </button>
                    )
            ) : (
                <h3 className="item">Address: {defaultAccount}</h3>
            )}
        </div>
    )
}


export default MetaMask;


