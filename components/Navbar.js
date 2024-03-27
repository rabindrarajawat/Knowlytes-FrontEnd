// import style from "../styles/Navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/Knowlytes.png"
// import { SiDiscord, SiTwitter, SiTelegram } from 'react-icons/si';
import { useState } from "react";
import { ethers } from "ethers";


export default function Navbar() {
    const [connButtonText, setConnButtonText] = useState("Connect");
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);

    const connectWalletHandler = () => {
        if (typeof window !== undefined) {
            if (window.ethereum && window.ethereum.isMetaMask) {
                console.log("MetaMask Here!");
                window.ethereum
                    .request({ method: "eth_requestAccounts" })
                    .then((result) => {
                        accountChangedHandler(result[0]);
                        console.log("🚀 ~ file: Navbar.js ~ line 24 ~ .then ~ result[0]", result[0])
                        setConnButtonText("Connected");
                        getAccountBalance(result[0]);
                    })
                    .catch((error) => {
                        setErrorMessage(error.message);
                    });
            } else {
                console.log("Need to install MetaMask");
                setErrorMessage("Please install MetaMask browser extension to interact");
            }
        }

    };

    // update account, will cause component re-render
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());
    };



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-color nav-text ">
            <div className="container-fluid">
                <div className="logo ms-xs-0 ms-sm-5">
                    <Link className="navbar-brand" href="/">
                        <Image
                            src={Logo}
                            unoptimized={true}
                        />
                    </Link>
                </div>
                <button
                 className="navbar-toggler"
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarNav" 
                  aria-controls="navbarNav" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-auto" id="navbarNav">
                    <ul className="navbar-nav ms-auto ms-5 mb-2 mb-lg-0 ">
                        
                        <li className="nav-item">
                            <Link href="/dressingroom"><a className="nav-link active mx-2  mx-xl-3" >Dressing Room</a></Link>
                        </li>
                        
                        
                        
                        
                        <div className="justify-content-center  ">
                            <button
                                className="btn-sm  mt-2  mx-xl-3 text-dark bg-light "
                                onClick={connectWalletHandler}
                            >
                                {defaultAccount != null ? "Connected" : "Connect wallet"}
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
