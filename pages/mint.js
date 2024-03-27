import Image from 'next/image'
import coinIcon from '../public/ethicon.svg'
import MintImg from '../public/mint.gif'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { ethers, BigNumber } from "ethers";
import bigInteger from 'big-integer'
// import ContractAbi from '../components/Abi';
import Contract from '../components/NFTcontract';
import styles from '../styles/mint.module.css'
import whiteList from '../components/whiteList.json'
import { FiCopy } from "react-icons/fi";
// import { BsArrowLeft } from 'react-icons/bs';
// import { FaEthereum } from "react-icons/fa";


{ console.log(Contract, "contract_method") }
function Mint() {
    const [spin, setSpin] = useState(false)
    const [spinWhite, setSpinwhite] = useState(false)
    const [whiteListEnable, setwhiteListEnable] = useState(false)
    const [whiteListTokenLoad, setwhiteListTokenLoad] = useState(false)
    const [whiteListToken, setwhiteListToken] = useState([])
    const [userETHBelence, setUserETHBelence] = useState(0)
    const [UserTokenId,setUserTokenId]=useState()
    var signer
    var whiteListToken1 = []
    useEffect(() => {
        isWhiteListEnable()
        // whitePrice()
        // mintPrice()
    }, [])

    try {
        if (typeof window !== undefined) {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                signer = provider.getSigner();
                if (signer.provider.provider.selectedAddress) {
                    provider.getBalance(signer.provider.provider.selectedAddress).then((balance) => {
                        // console.log("🚀 ~ file: mint.js ~ line 33 ~ provider.getBalance ~ balance", balance)
                        // convert a currency unit from wei to ether
                        const balanceInEth = ethers.utils.formatEther(balance)
                        setUserETHBelence(balanceInEth)
                        console.log(`balance: ${balanceInEth} ETH`)
                    })
                }

                // console.log("🚀 ~ f ~ line 20 ~  ~ signer", signer.provider.provider.selectedAddress)
            }
            else {
                console.log("Error")
            }
        }
    } catch (error) {
        console.log("🚀 ~ file: dressingroom.js ~ line 29 ~ getAccount ~ error", error)
    }

    // async function whiteListMinting() {
    //     try {
    //         setSpinwhite(true)
    //         let whiteListEnable = await Contract.isWhiteListEnable()
    //         console.log("🚀 ~ file: mint.js ~ line 38 ~ whiteListMinting ~ whiteListEnable", whiteListEnable)
    //         if (whiteListEnable) {
    //             setwhiteListEnable(true)
    //             console.log("🚀 ~ file: mint.js ~ line 38 ~ whiteListMinting ~ whiteListEnable", whiteListEnable)
    //             if (signer.provider.provider.selectedAddress) {
    //                 for (let i = 0; i < whiteList.whiteList.length; i++) {
    //                     // console.log("🚀 ~ f ~ line 20 ~  ~ signer", signer.provider.provider.selectedAddress)
    //                     // let result = text.toLowerCase();
    //                     // console.log("🚀 ~ f ~ line 20 ~  ~ address", whiteList.whiteList[i].address)
    //                     if (whiteList.whiteList[i].address.toLowerCase() == signer.provider.provider.selectedAddress.toLowerCase()) {
    //                         let whiteListMint = await Contract.whiteListMinting(whiteList.whiteList[i].proof)
    //                         let whiteListSuccess = whiteListMint.wait()
    //                         if (whiteListSuccess) {
    //                             toast.success("Congratulation you got Knowledge", {
    //                                 position: toast.POSITION.TOP_RIGHT,
    //                                 theme: "colored"
    //                             });
    //                             setSpinwhite(false)
    //                         }
    //                         break;
    //                     }
    //                     if (whiteList.whiteList[i].address.toLowerCase() !== signer.provider.provider.selectedAddress.toLowerCase() && i === whiteList.whiteList.length - 1) {
    //                         console.log("Not whiteListed Owner");
    //                         toast.error("Sorry you are not whitelist user!", {
    //                             position: toast.POSITION.TOP_RIGHT,
    //                             theme: "colored"
    //                         });
    //                         setSpinwhite(false)
    //                     }
    //                 }
    //             }
    //             else {
    //                 toast.error("Please first connect your wallet", {
    //                     position: toast.POSITION.TOP_RIGHT,
    //                     theme: "colored"
    //                 });
    //             }
    //         } else {
    //             toast.error("Sorry whiteList minting is closed!", {
    //                 position: toast.POSITION.TOP_RIGHT,
    //                 theme: "colored"
    //             });
    //             setSpinwhite(false)
    //         }
    //     } catch (error) {
    //         toast.error("Something is went wrong please try again!", {
    //             position: toast.POSITION.TOP_RIGHT,
    //             theme: "colored"
    //         });
    //         setSpinwhite(false)
    //     }



    // }
    async function getWhiteListToken() {
        if (signer.provider.provider.selectedAddress) {
            for (let i = 0; i < whiteList.whiteList.length; i++) {

                if (whiteList.whiteList[i].address.toLowerCase() == signer.provider.provider.selectedAddress.toLowerCase()) {
                    setwhiteListTokenLoad(true)
                    console.log("WhiteList token ", whiteList.whiteList[i])
                    setwhiteListToken(whiteList.whiteList[i])
                    // }
                    break;
                }
                if (whiteList.whiteList[i].address.toLowerCase() !== signer.provider.provider.selectedAddress.toLowerCase() && i === whiteList.whiteList.length - 1) {
                    console.log("Not whiteListed Owner");
                    toast.error("Sorry you are not whitelist user!", {
                        position: toast.POSITION.TOP_RIGHT,
                        theme: "colored"
                    });
                    setSpinwhite(false)
                }
            }
        } else {
            toast.error("Please first connect your wallet", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "colored"
            });
        }
    }

    async function isWhiteListEnable() {
        try {
            let whiteListEnaBle = await Contract.isWhitelistMintingPause()
            console.log("🚀 ~ file: mint.js ~ line 98 ~ isWhiteListEnable ~ whiteListEnaBle", whiteListEnaBle)
            if (whiteListEnaBle) {
                setwhiteListEnable(true)
            }
        } catch (error) {
            console.log("🚀 ~ file: mint.js ~ line 113 ~ isWhiteListEnable ~ error", error)

        }

    }

// async function whitePrice(){
 
//      console.log(white_eth,"--------whitelistprice")
    
// }


    async function mintFunction() {
        try {
            if (signer.provider.provider.selectedAddress) {
                setSpin(true)
                if (whiteListEnable) {
                    let whitelistPrice=await Contract.getPreSalePrice()
                    let white_eth = bigInteger(parseInt(whitelistPrice));
                    console.log("🚀 ~ file: mint.js ~ line 38 ~ whiteListMinting ~ whiteListEnable", whiteListEnable)
                    for (let i = 0; i < whiteList.whiteList.length; i++) {
                        // console.log("🚀 ~ f ~ line 20 ~  ~ signer", signer.provider.provider.selectedAddress)
                        // let result = text.toLowerCase();
                        // console.log("🚀 ~ f ~ line 20 ~  ~ address", whiteList.whiteList[i].address)
                        if (whiteList.whiteList[i].address.toLowerCase() == signer.provider.provider.selectedAddress.toLowerCase()) {
                            console.log("🚀 ~ file: mint.js ~ line 180 ~ mintFunction ~ whiteList.whiteList[i].address.toLowerCase()", whiteList.whiteList[i].proof)
                            
                            let whiteListMint = await Contract.mintKnowlytesWhiteList(whiteList.whiteList[i].proof,{value:white_eth.value})
                            let whiteListSuccess = whiteListMint.wait()
                            if (whiteListSuccess) {
                                toast.success("Congratulation you got Knowledge", {
                                    position: toast.POSITION.TOP_RIGHT,
                                    theme: "colored"
                                });
                                // setSpinwhite(false)
                                setSpin(false)

                            }
                            break;
                        }
                        if (whiteList.whiteList[i].address.toLowerCase() !== signer.provider.provider.selectedAddress.toLowerCase() && i === whiteList.whiteList.length - 1) {
                            console.log("Not whiteListed Owner");
                            toast.error("Sorry you are not whitelist user!", {
                                position: toast.POSITION.TOP_RIGHT,
                                theme: "colored"
                            });
                            // setSpinwhite(false)
                            setSpin(false)

                        }
                    }
                } else {
                    // toast.error("Sorry whiteList minting is closed!", {
                    //     position: toast.POSITION.TOP_RIGHT,
                    //     theme: "colored"
                    // });
                    // setSpinwhite(false)
                    let mintingPrice = await Contract.getPrice()
                    console.log(parseInt(mintingPrice),"-----------mintprice")

                    let eth = bigInteger(parseInt(mintingPrice));
                    // console.log("eth in mint",eth);
                    let mint = await Contract.mintKnowlytes({ value: eth.value });


                    let minted = await mint.wait()
                    if (minted) {
                        console.log("🚀 ~ file: Mint.js ~ line 59 ~ mintFunction ~ minted", minted)
                        setSpin(false)

                        toast.success("Congratulation you got Knowledge", {
                            position: toast.POSITION.TOP_RIGHT,
                            theme: "dark"
                        });
                    }
                }
            } else {
                toast.error("Please first connect your wallet", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored"
                });
            }

        } catch (error) {
            setSpin(false)
            toast.error(`Oop's Somthing went wrong`, {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark"
            });
            console.log("🚀 ~ file: Mint.js ~ line 69 ~ mintFunction ~ error", error)


        }
    }

    // async function mintPrice(){
    //     let mintingPrice = await Contract.getPrice()
    //     console.log(parseInt(mintingPrice),"-----------mintprice")
    // }

    function copyToken(token) {
        console.log("side", token.proof);
        let ab = ` ${token.proof}`
        console.log("ab", ab)

        navigator.clipboard.writeText(`[ ${ab}]`);
    };




    // async function tokenId() {
    //     let Tid = await Contract.getToken(signer.provider.provider.selectedAddress)
        
    //     if(Tid){
    //     console.log(Tid, "09876543TokenId")
    //         for(let i=1; i<=Tid.length; i++){
    //             console.log("useriddd",Tid[i])
    //            setUserTokenId(Tid)
    //         }

    //     }
    // }



  


    // async function FreezTraits(){
    //     let freezingValue=await Contract.freezeValues()
    
    //     console.log(freezingValue,"fetching freezed traits type")
    // }


    return (

        <div className='background'>
            <ToastContainer />
            <div className="container">
                <div className="row ">
                    <p className={`text-center mt-5 ${styles.mint_head}`}>Mint your Knowlytes</p>
                    <div className="col-md-4 mt-5  ">
                        {/* <div className=''>
                            <button
                                className={` ${styles.back_btn}`}
                            > <BsArrowLeft />Back </button>
                        </div> */}
                        <div className='d-flex justify-content-center mt-5 ' >
                            <Image
                                className=' img-fluid rounded'
                                src={MintImg}
                                width={280}
                                height={300}
                            />
                        </div>
                        {/* <div className="atri_button">
                            <button
                                variant="dark"
                                className='atrBtn bg-light mb-5 mt-5'
                                onClick={mintFunction}
                            >
                                {spin === true ?
                                    <span className="spinner-border spinner-border-sm text-start me-3" role="status" aria-hidden="true"></span>
                                    : ""}
                                Mint</button>
                        </div> */}
                    </div>
                    <div className='col-md-4 mt-5'>

                        <div className={`ms-5 mt-4 ${styles.price_heading}`}>
                            <h6>Asking price:10


                                <Image
                                    className=' img-fluid'
                                    src={coinIcon}
                                    width={20}
                                    height={15}
                                />
                                ETH

                            </h6>


                            <h6>Features:</h6>

                        </div>

                        <div className={`ms-4 text-start d-flex justify-content-center ${styles.features}`}>
                            <ul>
                                <li>Max. 1 per mint wallet</li>
                                <li> Pre-Sale Price (via Premint.xyz): 0.044 ETH</li>
                                <li> Public Sale for 0.066 ETH</li>
                            </ul>
                        </div>
                        <div className={`ms-5 card ${styles.card_content}`}>
                            <div className={` ms-3 card mt-2  ${styles.inner_card}`}>
                                <div className='d-flex justify-content-between px-2 mt-1'>
                                    <div>
                                        <p>  <Image
                                            className='img-fluid'
                                            src={coinIcon}
                                            width={20}
                                            height={15}
                                        /> ETH</p>
                                    </div>
                                    <div>
                                        <p>Balance:{userETHBelence}</p>
                                    </div>
                                </div>
                                <h6 className='text-center'>Max 1 Mint</h6>

                            </div>
                            {/* <p className='ps-3 mt-2'>total 10.76 $KNOW + gas </p>  */}
                            <div className='d-flex justify-content-center mb-2 mt-5'>
                                <button className={`${styles.con_btn}`}
                                    onClick={mintFunction}
                                >Mint Now
                                    {spin === true ?
                                        <span className="spinner-border spinner-border-sm text-start me-3" role="status" aria-hidden="true"></span>
                                        : ""} </button>

                                {/* <button className={` ${styles.con_btn}`}
                                    onClick={whiteListMinting}
                                >whiteList Mint
                                    {spinWhite === true ?
                                        <span className="spinner-border spinner-border-sm text-start me-3" role="status" aria-hidden="true"></span>
                                        : ""}
                                </button> */}
                            </div>
                        </div>
                        {whiteListEnable ?
                            <div className='ms-5 mt-3 '>
                                <p className={`text-start m-0 p-0 ${styles.features}`}>If you want to Mint from direct smart contract or from etherscan so please get your whiteList Token from here </p>
                                <button className={`mt-2 ${styles.con_btn1}`}
                                    onClick={getWhiteListToken}
                                >Get Token
                                </button>

                                {whiteListTokenLoad ?
                                    <div className='mt-2 mb-5 '>
                                        {console.log("token---------", whiteListToken)}
                                        <div className={`card m-0  ${styles.features}`}>
                                            <p className='px-5 mt-2'> {"["}</p>
                                            {
                                                whiteListToken.proof.map((e, i) => {
                                                    return (
                                                        <>
                                                            <p className='px-5'> "{e}" {++i == whiteListToken.proof.length ? '' : ','}</p>
                                                        </>
                                                    )
                                                })
                                            }
                                            <p className='px-5'> {"]"}</p>
                                        </div>
                                        {/* <FiCopy style={{ cursor: "pointer" }} onClick={() => copyToken(whiteListToken)} size={"20px"} /> */}
                                    </div>

                                    : ""}
                            </div>


                            // <button className={`ms-3 ${styles.con_btn1}`}
                            //     onClick={getWhiteListToken}
                            // >Get Token
                            // </button>
                            : ""}
                    </div>
                    <div className='col-md-4'>
                        <div className={`d-flex justify-content-center mt-5 ${styles.supply}`}>
                            <p>Total supply :  1,111 psc.</p>
                            {/* <button className={`${styles.buy_btn}`}>Buy More</button> */}
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Mint