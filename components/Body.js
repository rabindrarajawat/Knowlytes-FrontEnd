import Image1 from "../public/image39.png";
import Image2 from "../public/Bild13 1.png"
import Image3 from "../public/Bild25 2.png"
import Image4 from "../public/towermoney.png"
import BannerImg from "../public/FrontImg.svg"
import cardImg from "../public/Group 101.png"
import BildImage from "../public/Bild4 2_6.gif"
import dressImg from "../public/Bildnew (3).png"
import bild from "../public/dressIMG.png"
// import coin from "../public/coin 1.svg"
import coin from "../public/coin 1.png"

import coin2 from "../public/tower1.svg"
import img from "../public/coin.svg"
import tower from "../public/tower.svg"
import combineImg from "../public/newImg.png"
import styles from '../styles/Home.module.css'
import { BsArrowRight } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { SiDiscord, SiTwitter, SiTelegram } from 'react-icons/si';
import twitter2 from "../public/HomePage/twitter2.png"
import whiteListImg from "../public/HomePage/whitListImg.png"
// import Group_113 from "../public/HomePage/Group 113.svg";
import Group_113 from "../public/HomePage/roket.png";
import jvb_1 from "../public/3dImg 2.png";
import jvb_2 from "../public/3dImg1.png"
import abe from "../public/HomePage/abe.png";
import johny from "../public/HomePage/johny.png";
import mission from "../public/missionNew.png";
import blue_chips from "../public/BlueCoin.svg";
import phaseImg from "../public/Group 174.png";
import phaseImg1 from "../public/HomePage/Group 147.svg"
import FooterHead from "../public/footerHead.svg"
import game from "../public/HomePage/game.png";
// import twitter from "../public/HomePage/twitter.png";
import telegram from "../public/HomePage/telegram.png";
import algo from "../public/HomePage/algo.png";
import pixune from "../public/HomePage/pixune.png";
// import { Carousel } from 'bootstrap'
import style from "../styles/HomePage.module.css";
import Astyles from "../styles/Arrow.module.css"
import Abc from "../components/Abc";
import Image from "next/image";


function Body() {

    const [showNft, setShowNft] = useState(false);
    const nft_text = " Their Mission: To share their $Knowledge with humanity so together they can enter a new era in the NFT space and champion $Knowledge as the only true Currency. ";
    const nft_text1 = "To stay safe and be able to give us access to $KNOWledge each Knowlyte needs be assigned to a trustworthy human handler who needs to change their looks on a regular basis. "
    const nft_text2 = "$KNOWledge gives handlers access to the Knowlyte DAO so together they can build & expand this project."
    const [showImg, setshowImg] = useState(false);
    const [windowSize, setWindowSize] = useState({
        innerWidth: getWindowSize(),
        innerHeight: getWindowSize()
    });


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
        <>
            {windowSize.innerWidth > 2000 ?
                <div className={`container d-flex justify-content-center`}>

                    <div className={` m-0 p-0`}  >
                        <div className="">
                            <Image
                                className="img-fluid"
                                src={BannerImg}
                                alt=''
                            />
                        </div>


                    </div>
                </div>
                :
                <div className={`container-fluid m-0 p-0`}>

                    <div className={` m-0 p-0`}  >
                        <div className="">
                            <Image
                                className="img-fluid"
                                src={BannerImg}
                                alt=''
                            />
                        </div>


                    </div>
                </div>
            }



            <div className={`container-fluid m-0 p-0 ${styles.body} `}>

                <div className='row  mt-3  m-0 p-0 '>
                    
                    <p className={`mt-md-5 mt-3 text-center text-lg-center  ${styles.mission_text2}`}> It is time to turn

                        <span className={``}> your $KNOWledge</span>  into true Power</p>
                    <div className="d-flex justify-content-center" >
                        <div className={`mt-md-5 mt-3 ms-md-5 text-center px-5 ${styles.mission_text1}`} >
                            <p>Knowlytes - $KNOWledge is Power -  is a new
                                <span className={`${styles.contentUndeline}`}> dynamic PFP Collection</span>  built on the Etherium Blockchain about 1,111 interstellar travelers living among humans, working in everyday jobs at day while at night learning about NFTs to pave a path to financial freedom.
                            </p>
                        </div>
                    </div>

                </div>




                <div className="container">
                    <div className='row mt-md-5 mt-3 m-0 p-0 mx-5 justify-content-center'>
                        <div className='col-md-4  mt-md-5 mt-3 d-flex justify-content-center'>
                            <div className={` card h-100 text-center mb-5 ${styles.three_card}`}>
                                <p className={`mt-md-5 mt-4 ${styles.cardHead}`}> OUR MISSION</p>
                                <p className='px-4 pt-md-5'> To build an
                                    <span> </span>
                                    <span className={`${styles.underlineTag}`}> innovative</span> and
                                    <span> </span>
                                    <span className={`${styles.underlineTag}`}> fun</span>  NFT project driven by the community and together explore the true value of all our $KNOWledge.</p>
                            </div>
                        </div>
                        <div className='col-md-4  mt-5 d-flex justify-content-center'>

                            <div className={` card h-100 text-center mb-5 ${styles.three_card}`}>
                                <p className={`mt-md-5 mt-4 ${styles.cardHead}`}> VALUE PREPOSITION</p>
                                <p className=' px-4 pt-md-5 mb-3'>  Yes, it seems we are in a bear market. That doesn’t mean we can’t enjoy the tech. Creating new disguises, hunting rarities while being in control of this project through our DAO will keep the spirit high regardless of the macro.
                                </p>


                            </div>
                        </div>
                        <div className='col-md-4 mt-5 d-flex justify-content-center'>
                            <div className={` card h-100 text-center  mb-5 ${styles.three_card}`}>
                                <p className={`mt-md-5 mt-4 ${styles.cardHead}`}> WHO WE SEEK</p>
                                <p className=' px-4 pt-md-5 mb-3 '>People that can look beyond the ups/downs of the market, deeply care about blockchain technology and want to be part of a new kind of NFT project that has the potential to become a true blue chip project.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className='row mt-5 m-0 p-0 '>
                        <p className={`px-5 text-center ${styles.head}`}>Each NFT represents an Etherium based Knowlyte

                            <span className={``}> Employee ID</span>  </p>

                        <div className='col-md-6  mt-md-5 mt-3 d-flex justify-content-center'>
                            <Image
                                className={`mt-2 img-fluid `}
                                src={BildImage}
                                alt=''

                            />
                        </div>


                        <div className='col-md-6 mt-md-5 mt-3 '>
                            <div className={`mt-3 mx-md-2 ${styles.Upperlist}`}>
                                <ul>
                                    <li> Generative NFT Collection (1,111 pcs.)</li>

                                    <li> Price: 1.111 ETH</li>

                                    <li>Mint-Date: 11/11/22 </li>

                                    <li> Animated PFPs</li>

                                    <li>8 initial traits, each includes up to 10 Variations</li>

                                </ul>
                            </div>

                            <div className={`px-md-5 px-5 mt-3 ${styles.list}`}>

                                <p >1. Job (Background; static)</p>
                                <p> 2. Eyes (Generation; static)</p>
                                <p>  3. Hat (dynamic)</p>
                                <p>4. Glasses (dynamic)</p>
                                <p>  5. Fake Ears (dynamic)</p>
                                <p> 6. Fake Noses (dynamic) </p>
                                <p> 7. Jacket (dynamic)</p>
                                <p>8. Name (static)</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="container">
                    <div className='row mt-md-5 mt-3 m-0 p-0 d-flex justify-content-center'>
                        <p className={` mt-md-5 text-center px-3 ${styles.dresshead}`}>The Hunt for Rarities is on! </p>
                        {windowSize.innerWidth > 768 ?
                            <>
                                <div className={`col-md-6 px-md-5 mt-5  ${styles.roomList}`}>

                                    <ul>
                                        <li>
                                            <span className={`${styles.contentUndeline}`}> Once</span>  a month Holders can swap
                                            <span className={`${styles.contentUndeline}`}> one dynamic value </span>   in the Dressing Room.
                                        </li>
                                        <br/>
                                        <li>Some of the wearables might even look familiar.</li>
                                        <br/>

                                        <li>Rarities will be recalculated based on handlers‘ selections.</li>
                                        <br/>

                                        <li>If a value‘s rarity is below the threshold of 5%, it‘s availability will be removed so that other Holders can no longer select it .</li>
                                        <br/>

                                        <li>Rarest 1% Knowlytes will receive extra perks (e.g., $KNOWledge Multiplier).</li>
                                        <br/>

                                        <li>
                                            <span className={`${styles.roomUnderline}`}>  Static Traits (Background, Generation) cannot be changed.</span></li>

                                    </ul>
                                </div>

                                <div className="col-md-6 mt-3 mt-md-5">
                                    <Image
                                        className='px-md-3 mt-3'
                                        src={bild}
                                        alt=''
                                    />
                                    {/* <p className={`text-center mt-4 ${styles.dress}`}>Dressing Room</p> */}
                                </div>
                            </>
                            :

                            <>


                                <div className="col-md-6 mt-3 mt-md-5">
                                    <Image
                                        className='mt-md-2'
                                        src={dressImg}
                                        alt=''

                                    />
                                </div>

                                <div className={`col-md-6  mt-md-5 mt-4  ${styles.roomList}`}>

                                    <ul>
                                        <li>
                                            <span className={`${styles.contentUndeline}`}> Once</span>  a month Holders can swap
                                            <span className={`${styles.contentUndeline}`}> one dynamic trait </span>   in the Dressing Room
                                        </li>
                                        <br/>
                                        <li>Some of the wearables might even look familiar</li>
                                        <br/>

                                        <li>Rarities will be recalculated based on handlers‘ selections.</li>
                                        <br/>

                                        <li>If the ratity of an specific item falls under a the threshold of 5% this item will be made unavailable to other holders and therefore rarity of the NFT increases </li>
                                        <br/>

                                        <li>Rarest 1% Knowlytes will receive extra perks (e.g. $KNOWledge Multiplier)</li>
                                        <br/>

                                        <li>
                                            <span className={`${styles.roomUnderline}`}>  Static Traits (Background, Generation) cannot be changed</span></li>

                                    </ul>
                                </div>

                            </>
                        }


                    </div>




                </div>

                {windowSize.innerWidth > 768 ? <>
                    <div className="container">
                        <div className='row  m-0 p-0'>
                            <div className={`px-5 pt-5 d-flex justify-content-center  ${styles.dressContent}`}>
                                <div>
                                    <div className="items--container">
                                        <div className='item'>
                                            <div className="arrow top1  "></div>
                                            <div className="content">User changes value of any dynamic trait before end of month.
                                            </div>
                                            <div className="arrow bottom1"></div>
                                        </div>
                                        <div className='item text-center'>
                                            <div className="arrow top"></div>
                                            <div className="content">NFT changes based on Selection
                                                1st of month.
                                            </div>
                                            <div className="arrow bottom"></div>
                                        </div>
                                        <div className='item '>
                                            <div className="arrow top"></div>
                                            <div className="content">Rarities to be recalculated based on holder´s selection.
                                            </div>
                                            <div className="arrow bottom"></div>
                                        </div>
                                        <div className='item'>
                                            <div className="arrow top"></div>
                                            <div className="content">If a value‘s rarity is below the
                                                threshold of 5%, it‘s availability will be
                                                removed so that other Holders can no
                                                longer select it.</div>
                                            <div className="arrow bottom"></div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </>
                    : <>
                        <div className="row">
                            <div id="container">
                                <div className="content1">
                                    <p className="pt-3">User changes value of any dynamic trait before end of month
                                    </p>  </div>
                                <div className="arrow-right"></div>
                            </div>
                            <div id="container">
                                <div className="content1">
                                    <p className="pt-4" >NFT changes based on Selection
                                        1st of month</p>
                                </div>
                                <div className="arrow-right"></div>
                            </div>
                            <div id="container">
                                <div className="content1">
                                    <p className=" pt-3">Rarities to be recalculated based on holder´s selection </p> </div>
                                <div className="arrow-right"></div>
                            </div>
                            <div id="container">
                                <div className="content1">
                                    <p className="pt-2"> If Value rarity {'<5%'} Value will be locked and cannot be selected by other holders anymore
                                    </p></div>
                                <div className="arrow-right"></div>
                            </div>
                        </div>
                    </>
                }



                <div className="container">
                    <div className='row mt-5 m-0 p-0'>
                        <p className={`text-center mt-md-5 ${styles.currency}`}>
                            <span className={``}> Lets make $KNOWledge</span> the
                            ultimate Currency.</p>
                        <div className='col-md-7 mt-md-5 mt-5'>

                            <div className={`px-md-5  ${styles.coin_content}`}>
                                <ul >
                                    <li>Holders will be awarded
                                        <span> </span>
                                        <span className={`${styles.know}`}>$KNOW</span>ledge on a daily basis.</li>
                                    <br />
                                    <li> The awarded amount depends on the NFT‘s Generation (1st Arrivals, 2nd Wave)</li>
                                    <br />

                                    <li>
                                        <span className={`${styles.know}`}>$KNOW </span>   will be used to vote in our

                                        <span className={`${styles.know}`}> DAO </span>
                                        <span> </span>
                                        so Holders are responsible how much their
                                        <span> </span>
                                        <span className={`${styles.know}`}>$KNOW</span>ledge will be worth in the future.</li>

                                </ul>
                            </div>
                        </div>
                        <div className='col-md-5 '>
                            <Image
                                className={styles.coin_gif}
                                src={coin}
                                alt=''
                            />
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className='row  m-0 p-0 d-flex justify-content-center'>
                        <div className={`text-center mt-md-5 mt-5 ${styles.lastRow}`}>
                            <p>With great Power
                                <span> </span>
                                <span className={``}>comes gre</span>at Responsibility</p>
                        </div>

                        <div className='col-md-4 m-0 p-0 mt-3 d-flex justify-content-center' >
                            <div className={`card text-center  mt-md-5  ${styles.lastCard}`}>
                                <div className={`${styles.borderBottom}  row   `}>
                                    <div className='col-lg-12 '>
                                        <div className='mt-md-3'>
                                            <Image
                                                className='img-fluid'
                                                src={img}
                                                alt=''
                                                width={150}
                                                height={170}

                                            />
                                        </div>
                                    </div>

                                    <div className=' col-lg-12'>
                                        <div className='card-body'>
                                            <p className='px-lg-2 pt-md-5 '>
                                                To combine all our Knowledge and maximise efforts we will build a DAO called the $KNOWledge Center.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 m-0 p-0 mt-3 d-flex justify-content-center' >
                            <div className={`card text-center  mt-md-5 ${styles.lastCard}`}>
                                <div className={`${styles.borderBottom}  row`}>
                                    <div className=' col-lg-12 '>
                                        <div className='mt-md-0'>
                                            <Image
                                                className='mt-md-3 img-fluid'
                                                src={coin2}
                                                alt=''
                                                width={150}
                                                height={170}

                                            />
                                        </div>
                                    </div>

                                    <div className=' col-lg-12'>
                                        <div className='card-body'>
                                            <p className='px-lg-2 pt-md-5 '>
                                                By providing you with $KNOWledge we give Holders access to our DAO and empower them to determine the future success of this project.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 m-0 p-0 mt-3 d-flex justify-content-center' >
                            <div className={`card text-center  mt-md-5  ${styles.lastCard} `}>
                                <div className={`${styles.borderBottom} row  `}>
                                    <div className=' col-lg-12'>
                                        <div className=' mt-md-0'>
                                            <Image
                                                className='mt-md-3 img-fluid'
                                                src={tower}
                                                alt=''
                                                width={150}
                                                height={170}

                                            />
                                        </div>
                                    </div>

                                    <div className=' col-lg-12'>
                                        <div className='card-body'>
                                            <p className='px-lg-3  pt-md-5'>90% of initial sale will go into the DAO Treasury and
                                                make it key and the center of our financial growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container pt-md-0">
                <div className="row  d-flex justify-content-center" style={{ width: "100%" }}>
                    <p className={` px-3 mt-md-5 text-center ${style.gallons}`}>

                        If we build
                        <span> </span>
                        <span className={``}> it more will</span>  come…

                    </p>



                    <div className="col-md-6   mt-5 d-flex justify-content-center ">
                        <Image className="img-fluid" src={Group_113} unoptimized={true} />
                    </div>
                    <div className="col-lg-6 mt-md-3">

                        <div className={`px-md-5 ms-2 mt-5 ${style.gallons_txt}`}>
                            <ul>
                                <li>
                                    A 2n Wave of Knowlytes is on Standby to join the First Arrivals.<br></br>
                                </li>
                                <br/>
                                <li>
                                    The Community will be responsible for creating new Disguises to get them to Earth safely.<br></br>
                                </li>
                                <br/>
                                <li>
                                    2nd Wave
                                    <br></br>
                                </li>
                                <div>
                                    <ul>
                                        <li>  Mint Date: TBA </li>
                                        <li> Pcs: 2,222 pcs</li>
                                        <li>  Price: 2.222 ETH</li>

                                    </ul>
                                </div>
                                <br/>
                                {/* <li>3rd Wave</li> */}
                                {/* <div>
                                    <ul>
                                        <li>Mint Date: TBA</li>
                                        <li>  Pcs: 3,333 pcs</li>
                                        <li>Price: 0.333 ET</li>
                                    </ul>
                                </div> */}
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
            <div className="container">
                <div className=" row mt-md-5">
                    <p className={`mt-5 ${style.fun}`}>
                        Fun & engaging mechanics are waiting for you!

                    </p>
                    <div className="col-lg-6 mt-md-5 mt-3">
                        <div className={`ms-md-5 ms-2 px-md-5 ${style.cr_text}`}>
                            <ul>
                                <li> Fun & engaging project keeping Holders engaged with plenty of room to flesh out lore in the future (e.g. ,burning Knowlytes, 3rd party to hunt them)
                                </li>
                                <br/>
                                <li> The Community will be included in the process of designing new Items and Wearables for the 2nd wave
                                </li>
                                <br/>

                                <li> Access to $KNOWledge Token</li>
                                <br/>

                                <li>
                                    <span className={`${styles.raffel}`}> Raffles</span> for unique Clothing Items
                                </li>
                                <br/>
                                <li> Access to Pre-Sale for 2nd wave
                                </li>
                                <br/>
                                <li> Access to Vault-Experience (Swimming in $KNOWledge Coins)
                                </li>
                                <br/>
                                <li> Employee/Style of the Month Award
                                </li>
                                <br/>
                                {/* <li> Possibility to mint a Clone </li> */}
                                {/* <br/> */}

                                {/* <li> Earn additional $KNOW by answering Knowlyte questions about humanity
                                </li> */}
                                {/* <br/> */}

                                <li> Access to Knowlyte DAO
                                </li>


                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-3 text-center">

                        <Image className="img-fluid" src={jvb_2} />
                        <br />

                        <Image className="image-fluid" src={jvb_1} />

                    </div>

                </div>
            </div>


            <div className="container">
                <div className=" row mt-5 d-flex justify-content-center ">
                    <p className={`mt-md-5 px-md-5 text-center ${style.team}`}>Our Leadership Team is rich in Experience as they have
                        visited many
                        <span> </span>
                        <span className={``}> Worlds before </span> coming to Earth.
                    </p>
                    <div className="col-lg-5  mt-5">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className={`card ${style.lead_card}`} >
                                <Image className="img-fluid" src={abe} unoptimized={true} />

                                <div className={`card-body ${style.abeDiv}`}>
                                    <h1 className={`card-title text-center mt-md-5 mt-2  ${style.abe}`}>
                                        Abe Lite
                                    </h1>
                                    <div
                                        className={`justify-content-center align-items-center d-flex mt-3 ${style.abeul}`}
                                    >
                                        <ul>
                                            <li className="text-white ">
                                                {" "}
                                                Financial Expert & Analyst
                                            </li>
                                            <li className="text-white "> Product Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-5 mt-5">
                        <div className="d-flex align-items-center justify-content-center ">
                            <div className={`card ${style.lead_card}`}>
                                <Image className="img-fluid" src={johny} unoptimized={true} />

                                <div className={`card-body ${style.abeDiv}`}>
                                    <h1 className={`card-title text-center mt-md-5 mt-2 ${style.abe}`}>
                                        Johny Lite
                                    </h1>
                                    <div
                                        className={`justify-content-center align-items-center d-flex mt-3 ${style.abeul}`}
                                    >
                                        <ul>
                                            <li className="text-white ">Product Design </li>
                                            <li className="text-white "> Marketing & PR Guru</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <p className={`text-center px-md-5 mt-md-5 ${style.mission}`}>Mission Control will  ensure this projects delivers high

                        quality

                        <span className={``}> and stays safe for all  </span> its holders.
                    </p>
                    <div className={` mt-md-5 d-flex justify-content-center ${style.missionImg}`}>
                        <Image className="px-md-4 mt-3 img-fluid" src={mission} unoptimized={true} />
                    </div>
                    {/* <div className={`col-lg-5 d-flex justify-content-center`}>
                        <div className={`mb-5 mt-5`}>
                            <div className={`px-4 d-flex justify-content-start  text-center ${style.missionText}`}>

                                <p>
                                    A roster of partners which experience in the NFT space will
                                    be utilized to build our projects.
                                </p>

                            </div>
                        </div>

                    </div> */}
                </div>
            </div>
            <div className="container">
                <div className='row mt-md-5 mt-3 d-flex justify-content-center'>
                    <div className={`mt-5 col-lg-5   d-flex justify-content-center`}>

                        <div className={`card d-flex justify-content-center ${style.coding} `}>

                            <h5 className={`${style.codingTitle}`}>Algo</h5>

                            <div
                                className={`px-5 mt-4 d-flex justify-content-center   ${style.codingul} `}
                            >
                                <ul className="">
                                    {/* <li>Fintech/Financial markets</li> */}
                                    <li>Blockchain Development/
                                        Cryptocurrency/Dapp/
                                         Defi/NFT</li>
                                    {/* <li>AI/ML/Deep learning</li> */}
                                    {/* <li>Outputs and Data Presentation</li> */}
                                </ul>
                            </div>
                            <div
                                className={`d-flex justify-content-center`}
                            >
                                <Image className="img-fluid" src={algo} unoptimized={true} />
                            </div>
                            <div
                                className={`d-flex justify-content-center mt-4 ${style.codingp} `}
                            >
                                <p className="px-5">
                                   Your expert software development team for emerging tech
                                </p>
                            </div>
                            <div
                                className={`justify-content-center d-flex align items-center mt-4 ${style.codingurl} `}
                            >
                                <Link href="https://www.algocodingexperts.com/service/blockchain"><a target="_blank" className="mt-3">www.algocodingexperts.com</a></Link>
                            </div>

                        </div>
                    </div>

                    <div className={`mt-5 col-lg-5  d-flex justify-content-center`}>

                        <div className={`card d-flex justify-content-center  ${style.coding} `}>
                            <div className=" justify-content-center d-flex align-items-center">
                                <h5 className={`mt-5 ${style.codingTitle}`}>Pixune</h5>
                            </div>
                            <div
                                className={`d-flex justify-content-center mt-4 ${style.codingul} `}
                            >
                                <ul>
                                    <li>NFT ART</li>
                                    <li>3D ANIMATION</li>
                                    <li>GAME ART</li>
                                </ul>
                            </div>
                            <div
                                className={`d-flex justify-content-center mt-2 mb-5`}
                            >
                                <Image className="img-fluid" src={pixune} unoptimized={true} />
                            </div>
                            <div
                                className={`d-flex justify-content-center ${style.codingp} `}
                            >
                                <p className="px-5">
                                Pixune is an art studio, a place for your dreams. we can make them come true with games and animations.
                                </p>
                            </div>
                            <div
                                className={`justify-content-center d-flex align-items-center mb-5 ${style.codingurl} `}
                            >
                                <Link href="https://www.pixune.com" ><a target="_blank" className="mt-3">www.pixune.com</a></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container mt-md-5">
                <div className={`row pt-5 ${style.currency}`}>
                    <p className={` ${style.currencyText}`}>
                        There is much room for Expansion & making this a true
                        <span className={``}>  Blue Chip Project.</span>

                    </p>

                    <div className={`col-lg-7 mt-md-5  ${style.Metaverse}`}>
                        <ul className=" mx-md-5 ms-3 ms-md-5 mt-md-5">
                            <li>Metaverse Experiences</li>
                            <li>Stealth/Spy Game </li>
                            <li>Licencing Opportunities (Cosmics, Cartoon Series)</li>
                            <li>
                                IRL "Eyes Wide Shut" parties making use of Physical Wearables
                            </li>
                            <li>Merchandise</li>
                            <li>
                                Partnerships (Clothing, wearables, Fashion labels, Accessor, etc.)
                            </li>
                            {/* <li>Exclusive Access to Tools</li> */}
                        </ul>
                    </div>
                    <div className="col-lg-5 mt-md-3 text-center">
                        <Image className="img-fluid" src={blue_chips} unoptimized={true} />
                    </div>
                </div>
            </div>




            <div className="container">
                <div className="row">
                    <div className={`text-center mt-md-5 ${style.whiteList}`} id="whiteList">
                        <p>Pre-Sale & Whitelisting
                        </p>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <div className={`ms-md-4 mx-md-5 ${style.whiteList_content}`}>
                            <ul>
                                <li>All 1,111 Pcs. Will be distributed via WL</li>
                                <li>
                                    Public Whitelisting via Premint.xyz starts: 10/10/22
                                </li>
                            </ul>
                            <div className="ms-5">
                                <ul>
                                    <li>1.000 Whitelist-Spots available for general public </li>
                                    <li> First Come, first serve</li>
                                    <li> Price: 1.111 ETH</li>
                                    {/* <li>Link: TBA 08/22/22 </li> */}

                                </ul>
                            </div>

                            <ul>
                                <li> Public Sale: Only for unminted WL-Spots (48h hour time window)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <Image src={whiteListImg} />
                    </div>
                </div>

            </div>
            {/* <div className="container mt-5">
                <div className={`text-center  ${style.communityHead}`}>
                    <p> Giveaways for NFT Communities/Influencers</p>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-8">
                        <div className={`ms-3 ${style.communityList}`}>
                            <ul>
                                <li>Posting specs TBA</li>
                                <li>To participate Users need to</li>
                            </ul>
                            <div className="ms-5">
                                <ul>
                                    <li>Follow @knowlytes</li>
                                    <li> retweet using @Knowlytes and #KNOWledgeisPower</li>
                                    <li>Tag 3 friends</li>
                                    <li>  Join discord</li>
                                </ul>
                            </div>
                            <ul>
                                <li>Winners to be selected by Communities/Influencers</li>
                                <li>Wallet-adresses to be delivered by Communities/Influencers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Image className="img-fluid" src={twitter2} />

                    </div>
                </div>
            </div> */}


            <div className="container-fluid">
                <div className={`row mt-md-5 pt-5 ${style.phase}`}>
                    <p className={`  ${style.phaseText}`}>
                        Phase I + 2 will
                        <span className={``}>   be rolled out during the</span>
                        <span> </span>
                        next 6 months
                    </p>
                    <div className={`d-flex justify-content-center  ${style.phaseImage}  mt-5`}>

                        {windowSize.innerWidth > 768 ?
                            <Image className="img-fluid" src={phaseImg} unoptimized={true} />
                            :
                            <Image className="px-md-2  img-fluid" src={phaseImg1} unoptimized={true} />

                        }
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={`row mt-5 ${style.footer}`}>
                    <p className={`mt-md-5 ${style.footerText}`}></p>
                    <div className="col-lg-12 text-center">
                        <Image
                            className=""
                            src={FooterHead} />
                    </div>

                    <div className="col-lg-12 mt-3">
                        <p className={` px-4 ${style.footerP}`}>
                            Knowlytes - $KNOWledge is Power is a new dynamic PFP Project built
                            on
                            <br />
                            the Etherium Blockchain
                        </p>
                    </div>
                    <div className="col-lg-12 mt-md-5 mt-3 mb-5">
                        <div className={`d-flex align-items-center justify-content-center gap-5 ${styles.icons}`}>
                            <div>
                                <Link href="/">
                                    <a className={`a text-white  `}>
                                        {" "}
                                        <SiDiscord style={{ height: 24, width: 24 }} />
                                    </a>
                                </Link>
                            </div>

                            <div>
                                <Link href="/">
                                    <a className={`a text-white`}>
                                        {" "}
                                        <SiTwitter style={{ height: 24, width: 24 }} />
                                    </a>
                                </Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
function getWindowSize() {
    if (typeof window !== "undefined") {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
}

export default Body