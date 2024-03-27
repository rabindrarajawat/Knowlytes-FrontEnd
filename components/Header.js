import Image from 'next/image'
import { BsTelegram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Link from "next/link"
import mtmsk_icon from '../public/metamask_icon.svg'
import Styles from '../styles/Header.module.css'
import Body from './Body';
import { useRouter } from 'next/router'



function Header() {
    const router=useRouter();
    console.log("router",router.pathname)
    const [connButtonText, setConnButtonText] = useState("Connect");
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [isShown, setisShown] = useState(false)
    const [closeNav,setCloseNav]=useState(false);
    const [windowSize, setWindowSize] = useState({
        innerWidth: getWindowSize(),
        innerHeight: getWindowSize()
    });
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



    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        // console.log("size", windowSize.innerWidth);

        window.addEventListener("resize", handleWindowResize);
        handleWindowResize()
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                {windowSize.innerWidth > 2000 ?
                    <div className="container">
                        <Link className={`navbar-brand `} href="/" >
                            {/* <Image src="/Group 78.png" alt="Logo" className="mt-1" width={32} height={32} /> */}

                            <Image src="/KNOWLYTES.png" alt="Logo" width={220} height={60} className={`${styles.navCursor} `} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={()=>setCloseNav(!closeNav)} data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">


                                <li className="nav-item">
                                    <Link href="/" ><a className="nav-link active mx-5" aria-current="page" onClick={()=>setCloseNav(!closeNav)}>Home</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="mint"><a className="nav-link active mx-5" onClick={()=>setCloseNav(!closeNav)}>Mint</a></Link>
                                </li>
                                
                                <li className="nav-item">
                                    {router.pathname=='/'?
                                    <Link  href="#whiteList"><a className="nav-link active mx-3" onClick={()=>setCloseNav(!closeNav)}>Whitelist</a></Link>
                                :
                                <Link  href="/#whiteList"><a className="nav-link active mx-3" onClick={()=>setCloseNav(!closeNav)}>Whitelist</a></Link>
                }
                                    </li>
                                <li className="nav-item">
                                    <Link href="dressingroom"><a className="nav-link active mx-5 " onClick={()=>setCloseNav(!closeNav)}>Dressing Room</a></Link>
                                </li>


                                <div className=" nav-item ">

                                    {/* {isShown ?
                                        <button
                                            className={`mt-2 ${Styles.nav_btn}`}
                                            onClick={connectWalletHandler}
                                            onMouseOut={() => setisShown(false)}
                                        >


                                            <Image
                                                src={mtmsk_icon}
                                                width={50}
                                                height={40}
                                            />
                                        </button> : */}
                                        <div className='d-flex'
                                            onMouseOut={() => setisShown(true)}
                                        >
                                            <button
                                                className={`text-center d-flex align-content-center mt-1 ${Styles.Hover_btn}`}
                                                onClick={connectWalletHandler}
                                            >
                                                <Image
                                                    className='mt-1'
                                                    src={mtmsk_icon}
                                                    width={40}
                                                    height={30}
                                                />
                                                {defaultAccount != null ? "Connected" : "Connect"}

                                            </button>
                                        </div>

                                </div>

                                <li className="nav-item">
                                    <Link href="#"><a className="nav-link active mx-2" ><FaDiscord style={{ height: 24, width: 24 }} /></a></Link>
                                </li>


                                <li className="nav-item">
                                    {/* <a className="nav-link active mx-3" href="#"><AiOutlineTwitter /></a> */}
                                    <Link href="#"><a className="nav-link active mx-2" ><AiOutlineTwitter style={{ height: 24, width: 24 }} /></a></Link>
                                </li>
                                {/* <li className="nav-item">
                        <Link href="#"><a className="nav-link active mx-3" ><BsTelegram /></a></Link>
                    </li> */}


                            </ul>

                        </div>
                    </div> :

                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            {/* <Image src="/Group 78.png" alt="Logo" className="mt-1" width={32} height={32} /> */}

                            <Image src="/KNOWLYTES.png" alt="Logo" width={200} height={50} className={`${styles.navCursor} `} style={{ cursor: "pointer" }} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={()=>setCloseNav(!closeNav)} data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse  ${!closeNav?'navbar-collapse':'navbar-collapse show'} `} id="navbarCollapse">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">


                                <li className="nav-item">
                                    <Link href="/" ><a className="nav-link active mx-3" aria-current="page" onClick={()=>setCloseNav(!closeNav)}>Home</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="mint"><a className="nav-link active mx-3" onClick={()=>setCloseNav(!closeNav)} >Mint</a></Link>
                                </li>
                                <li className="nav-item">
                                    {router.pathname=='/'?
                                    <Link  href="#whiteList"><a className="nav-link active mx-3" onClick={()=>setCloseNav(!closeNav)}>Whitelist</a></Link>
                                :
                                <Link  href="/#whiteList"><a className="nav-link active mx-3" onClick={()=>setCloseNav(!closeNav)}>Whitelist</a></Link>
                }
                                    </li>
                                <li className="nav-item">
                                    <Link href="dressingroom"><a className="nav-link active mx-3 " onClick={()=>setCloseNav(!closeNav)}>Dressing Room</a></Link>
                                </li>


                                <div className=" nav-item ">

                                    {/* {isShown ?
                                        <button
                                            className={`mt-2 ${Styles.nav_btn}`}
                                            onClick={connectWalletHandler}
                                            onMouseOut={() => setisShown(false)}
                                        >


                                            <Image
                                                src={mtmsk_icon}
                                                width={50}
                                                height={40}
                                            />
                                        </button> : */}
                                        <div className='d-flex'
                                            onMouseOut={() => setisShown(true)}
                                        >
                                            <button
                                                className={`text-center d-flex align-content-center mt-1 ${Styles.Hover_btn}`}
                                                onClick={connectWalletHandler}
                                            >
                                                <Image
                                                    className='mt-1'
                                                    src={mtmsk_icon}
                                                    width={40}
                                                    height={30}
                                                />
                                                {defaultAccount != null ? "Connected" : "Connect"}

                                            </button>
                                        </div>

                                </div>

                                <li className="nav-item">
                                    <Link href="#"><a className="nav-link active mx-2" ><FaDiscord style={{ height: 24, width: 24 }} /></a></Link>
                                </li>


                                <li className="nav-item">
                                    {/* <a className="nav-link active mx-3" href="#"><AiOutlineTwitter /></a> */}
                                    <Link href="#"><a className="nav-link active mx-2" ><AiOutlineTwitter style={{ height: 24, width: 24 }} /></a></Link>
                                </li>
                                {/* <li className="nav-item">
            <Link href="#"><a className="nav-link active mx-3" ><BsTelegram /></a></Link>
        </li> */}


                            </ul>

                        </div>
                    </div>
                }



            </nav>

        </div>
    )
}


function getWindowSize() {
    if (typeof window !== "undefined") {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
}

export default Header