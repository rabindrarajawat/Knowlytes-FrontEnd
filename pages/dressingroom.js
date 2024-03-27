import Head from 'next/head'
import { Button } from 'react-bootstrap'
import { ethers, BigNumber } from "ethers";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import axios from "axios";
import Contract from '../components/NFTcontract';

console.log("Contract -----**********", Contract);
function Dressingroom() {
    const [tokenDetails, setTokenDetails] = useState([])
    const [ownerTokenIDs, setOwnerTokenIDs] = useState([])
    const [stake, setStake] = useState()
    const [unStake, setUnStake] = useState()
    const [submitLoder, setSubmitLoder] = useState()
    const [hat, sethat] = useState("")
    const [hair, sethair] = useState("")
    const [glasse, setglasse] = useState("")
    const [ear, setear] = useState("")
    const [nose, setnose] = useState("")
    const [jacket, setjacket] = useState("")
    const [imageShow, setImageShow] = useState(false)
    const [show, setShow] = useState(false)
    const [tokenID, setTokenid] = useState()
    const [userAddress, setUserAddress] = useState()
    // const [newTokenid, setnewTokenid] = useState()
    let newTokenid;
    useEffect(() => {
        getAccount()
        Newapi()

        // tokenUri()
    }, [])
    function getAccount() {
        try {
            if (typeof window !== undefined) {
                if (window.ethereum) {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    console.log("🚀 ~ f ~ line 20 ~  ~ signer", signer.provider.provider.selectedAddress)
                    setUserAddress(signer.provider.provider.selectedAddress);
                    renderTokensForOwner(signer.provider.provider.selectedAddress);
                    // tokenUri(signer.provider.provider.selectedAddress)
                }
                else {
                    console.log("Error")
                }

            }
        } catch (error) {
            console.log("🚀 ~ file: dressingroom.js ~ line 29 ~ getAccount ~ error", error)

        }
    }
    const options = { method: 'GET' };
    async function getImageUrl(tokenId) {
        let allData = [];
        console.log("🚀  ~ line 35 ~ getImageUrl ~ getImageUrl")
        try {
            for (let i = 0; i < tokenId.length; i++) {
                const response = await fetch(`https://oneof.mypinata.cloud/ipfs/QmUfM6KzxNRdVdkRsMnwhSWbZHrgDQiLX6TMkWF5mJdMMp/${tokenId[i]}.json`);
                // waits until the request completes...
                const details = await response.json();
                allData.push(details)
                console.log("🚀 ~ file: dressingroom.js ~ line 42 ~ getImageUrl ~ details", details)
            }
            console.log("🚀 ~  ~ line 44 ~ getImageUrl ~ allData", allData)
            if (allData) {
                console.log("if all data")
                // setTokenDetails(allData)

            }

        } catch (error) {
            console.log("🚀 ~ file: dressingroom.js ~ line 52 ~ getImageUrl ~ error", error)

        }

        // setTokenDetails(allData)
    }

    async function Newapi() {
        // let newApi= await fetch("http://3.110.231.144:3001/api/getfreezetraits")
        // console.log(newApi,"new data fetching from api")
        let hatFreeze = ["Hat3","Hat6"]
        let jacketFreeze = ["Jacket2","Jacket7"]
        let hairFreeze = ["Hair1", "Hair8"]
        let noseFreeze = ["Nose3","Nose2"]
        let glassFreeze = ["Glass4","Glass2"]
        let earFreeze = ["Ear1","Ear6"]

    }


    const renderTokensForOwner = async (owenrAddress) => {
        console.log("🚀 ~ file: dressingroom.js ~ line 59 ~ renderTokensForOwner ~ owenrAddress", owenrAddress)
        let url = [];
        let id = [];
        let abc;
        let UserNftName = [];
        let allData = [];

        try {
            if (owenrAddress) {
                console.log(owenrAddress, ".,mnbvcxz")
                let owenrAddress1 = owenrAddress.toLowerCase()
                let response = await fetch(`http://3.110.231.144:3001/api/gettokenid/${owenrAddress1}`)
                let response1 = await response.json()
                for (let i = 0; i < response1.data.length; i++) {
                    console.log("datattdtafdyatdjs", response1.data[i].tokenId);
                    id.push(response1.data[i].tokenId);

                    let metaData = await Contract.tokenURI(response1.data[i].tokenId);
                    const NFTData = Buffer.from(metaData.substring(29), "base64").toString();
                    const NFTMetadata = JSON.parse(NFTData);

                    UserNftName.push(NFTMetadata.name);
                    url.push(NFTMetadata.image);
                    allData.push(NFTMetadata)
                    // console.log("naming_____", NFTMetadata.attributes[2].value);
                    console.log("metaData1111111", NFTMetadata.image);
                }
                setTokenDetails(allData);
                setOwnerTokenIDs(id)

                if (id.length === 0) {
                    setShow(true)
                    console.log("id lenght--------");

                }

            }


        } catch (error) {
            console.log("🚀 ~ file: dressingroom.js ~ line 93 ~ renderTokensForOwner ~ error", error)

        }

    }
    function navigate(e) {
        console.log("🚀 ~ file: dressingroom.js ~ line 101 ~ navigate ~ e", e)

    }

    function setTokenID(e) {
        console.log("🚀 ~ file: dressingroom.js ~ line 196 ~ setTokenID ~ e", e)
        setTokenid(e)

    }

    // async function tokenUri() {
    //     console.log(newTokenid, "1ddddsssssss")
    //     let allData = [];
    // if (newTokenid.length != 0) {
    // for (let i = 0; i < newTokenid.length; i++) {
    // let metaData = await Contract.tokenURI(5)
    // console.log("tokeuri---------------", await Contract.tokenURI(newTokenid));

    // console.log(metaData, "FETCHING METADATA-------------------------------")
    // allData.push(metaData)
    // setTokenDetails(allData)
    // }


    // } 

    // }

    return (
        <div className='background'>
            <Head>
                <title>Knowlytes</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className='container pt-5'>
                <p className='text-center wl_text '>
                    Welcome to Dressing Room
                </p>
                <div className="mt-5 row row-cols-sm-2 row-cols-lg-4 row-cols-md-2 row-cols-xl-5 row-cols-xxl-6 ">


                    {tokenDetails.length > 0 ?
                        tokenDetails.map((e, i) => {
                            return (

                                <div className="gy-4 mb-5 mb-md-3 " key={i}>
                                    {/* {console.log("🚀 ~ file: staking.js ~ line 135 ~ Stake ~ tokenDetails", tokenDetails)} */}

                                    <div className="card rounded" >
                                        <img
                                            src={`${e.image}`}
                                            className="img-fluid rounded-top"
                                            alt="..."
                                        />
                                        <div className="card-body text-center c_body rounded-bottom">
                                            <p className=" c_text  mb-1"> {e.name}</p>
                                            <Link href={{ pathname: '/changetraits', query: { tokenId: ownerTokenIDs[i] } }}>
                                                <Button className='  tr_btn mt-2'
                                                    // variant='light'
                                                    onClick={() => setTokenID(ownerTokenIDs[i])}
                                                >
                                                    Change Traits
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            )
                        }) :
                        <div className='container-fluid'>
                            <div className="row d-flex justify-content-center">
                                {show ?
                                    <div className='col-12'>
                                        <p className="text-center wl_text2">
                                            You dont have any Knowlytes!
                                        </p>
                                        {/* <Link href={{ pathname: '/changetraits', query: { tokenId: '1' } }}>
                                            <Button className='  tr_btn mt-2'
                                                // variant='light'
                                                onClick={() => setTokenID(1)}
                                            >
                                                Change Traits
                                            </Button>
                                        </Link> */}
                                    </div>

                                    :
                                    <>
                                        {userAddress ?
                                            <div className="spinner-border text-light " role="status">
                                                <span className="sr-only "></span>
                                            </div>
                                            :
                                            <div className='col-12'>
                                                <p className="text-center wl_text2">
                                                    Please connect your wallet!
                                                </p>
                                            </div>}
                                    </>
                                }
                            </div>
                        </div>
                    }

                </div>
            </div>
          
        </div>
    )
}

export default Dressingroom