import Image from 'next/image'
import { Button } from 'react-bootstrap'
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import axios from "axios";
import { useRef } from 'react';
// import ContractAbi from '../components/Abi';
import Contract from '../components/NFTcontract';
// import { ethers, BigNumber } from "ethers";
import { ToastContainer, toast } from 'react-toastify';
import { createHash } from 'crypto';

import Hat1 from '../public/hat/hat1.png'
import Hat2 from '../public/hat/hat2.png'
import Hat3 from '../public/hat/hat3.png'
import Hat4 from '../public/hat/hat4.png'
import Hat5 from '../public/hat/hat5.png'
import Hat6 from '../public/hat/hat6.png'
import Hat7 from '../public/hat/hat7.png'
import Hat8 from '../public/hat/hat8.png'
import Hat9 from '../public/hat/hat9.png'
import Hat10 from '../public/hat/hat10.png'
import Hat11 from '../public/hat/hat11.png'
import Hat12 from '../public/hat/hat12.png'
import Hat13 from '../public/hat/hat13.png'
import Hat14 from '../public/hat/hat14.png'

import hair1 from '../public/hair/hair1.png'
import hair2 from '../public/hair/hair2.png'
import hair3 from '../public/hair/hair3.png'
import hair4 from '../public/hair/hair4.png'
import hair5 from '../public/hair/hair5.png'
import hair6 from '../public/hair/hair6.png'
import hair7 from '../public/hair/hair7.png'
import hair8 from '../public/hair/hair8.png'
import hair9 from '../public/hair/hair9.png'
import hair10 from '../public/hair/hair10.png'
import hair11 from '../public/hair/hair11.png'
import hair12 from '../public/hair/hair12.png'
import hair13 from '../public/hair/hair13.png'

import glase1 from '../public/glasess/g1.png'
import glase2 from '../public/glasess/g2.png'
import glase3 from '../public/glasess/g3.png'
import glase4 from '../public/glasess/g4.png'
import glase5 from '../public/glasess/g5.png'
import glase6 from '../public/glasess/g6.png'
import glase7 from '../public/glasess/g7.png'
import glase8 from '../public/glasess/g8.png'

import Ear1 from '../public/ear/ear1.png'
import Ear2 from '../public/ear/ear2.png'
import Ear3 from '../public/ear/ear3.png'
import Ear4 from '../public/ear/ear4.png'
import Ear5 from '../public/ear/ear5.png'
import Ear6 from '../public/ear/ear6.png'
import Ear7 from '../public/ear/ear7.png'
import Ear8 from '../public/ear/ear8.png'

import Nose1 from '../public/nose/nose1.png'
import Nose2 from '../public/nose/nose2.png'
import Nose3 from '../public/nose/nose3.png'
import Nose4 from '../public/nose/nose4.png'
import Nose5 from '../public/nose/nose5.png'
import Nose6 from '../public/nose/nose6.png'
import Nose7 from '../public/nose/nose7.png'
import Nose8 from '../public/nose/nose8.png'

import Jacket1 from '../public/jacket/jacket1.png'
import Jacket2 from '../public/jacket/jacket2.png'
import Jacket3 from '../public/jacket/jacket3.png'
import Jacket4 from '../public/jacket/jacket4.png'
import Jacket5 from '../public/jacket/jacket5.png'
import Jacket6 from '../public/jacket/jacket6.png'
import Jacket7 from '../public/jacket/jacket7.png'
import Jacket8 from '../public/jacket/jacket8.png'
import Jacket9 from '../public/jacket/jacket9.png'
import Jacket10 from '../public/jacket/jacket10.png'
import Jacket11 from '../public/jacket/jacket11.png'
import Jacket12 from '../public/jacket/jacket12.png'
import Jacket13 from '../public/jacket/jacket13.png'
import Jacket14 from '../public/jacket/jacket14.png'

import HatLogo from '../public/traitsLogo/Hats1.svg'
import HairsLogo from '../public/traitsLogo/Hairs.svg'
import JacketLogo from '../public/traitsLogo/Jackets.svg'
import JacketLogo1 from '../public/traitsLogo/Jackets1.svg'
import HairsLogo1 from '../public/traitsLogo/Hairs1.svg'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

export default function Changetraits(props) {
    const router = useRouter();
    let tokenID = router.query.tokenId;
    // let tokenID = data.tokenId
    // console.log("🚀 ~ file: changetraits.js ~ line 85 ~ changetraits ~ data", data.tokenId)
    const [hatShow, setHatShow] = useState(true)
    const [hairShow, setHairShow] = useState(false)
    const [glaseShow, setGlaseShow] = useState(false)
    const [earShow, setEarShow] = useState(false)
    const [noseShow, setNoseShow] = useState(false)
    const [jacketShow, setJacketShow] = useState(false)
    const [img, setimg] = useState(false)
    const [img1, setimg1] = useState(false)
    const [showGif, setShowGif] = useState(false)
    const [gifloader, setgifloader] = useState(false)
    const [setCurrentBg, setsetCurrentBg] = useState(0);
    const [setCurrentBg1, setsetCurrentBg1] = useState(0);
    const [setCurrentBg2, setsetCurrentBg2] = useState(0);
    const [setCurrentBg3, setsetCurrentBg3] = useState(0);
    const [setCurrentBg4, setsetCurrentBg4] = useState(0);
    const [setCurrentBg5, setsetCurrentBg5] = useState(0);
    const [_arr, setArr] = useState([])
    const [setCurrentTrait, setsetCurrentTrait] = useState(0);
    const [setCurrentTrait1, setsetCurrentTrait1] = useState(0);
    const [setCurrentTrait2, setsetCurrentTrait2] = useState(0);
    const [setCurrentTrait3, setsetCurrentTrait3] = useState(0);
    const [setCurrentTrait4, setsetCurrentTrait4] = useState(0);
    const [setCurrentTrait5, setsetCurrentTrait5] = useState(0);

    const [spin, setSpin] = useState(false)
    const [changeTraits, setChangeTraits] = useState(false)


    const [hat, sethat] = useState("")
    const [hair, sethair] = useState("")
    const [glasse, setglasse] = useState("")
    const [ear, setear] = useState("")
    const [nose, setnose] = useState("")
    const [jacket, setjacket] = useState("")
    const [isNFTChange, setIsNFTChange] = useState(false)
    const [Ear, setEar] = useState()
    const [NewHat, setNewHat] = useState()
    const [NewHair, setNewHair] = useState()
    const [Newglasse, setNewglasse] = useState()
    const [NewJacket, setNewJacket] = useState()
    const [NewNose, setNewNose] = useState()
    const [hatFreeze, setHatFreeze] = useState([])
    const [hairFreeze, sethairFreeze] = useState([])
    const [jacketFreeze, setjacketFreeze] = useState([])
    const [glassFreeze, setglassFreeze] = useState([])
    const [noseFreeze, setnoseFreeze] = useState([])
    const [earFreeze, setearFreeze] = useState([])
    const [ishatFreeze, setIshatFreeze] = useState()





    // let Hats = [
    //     {
    //         id: '1',
    //         name: `Bowler`,
    //         img: Hat1
    //     },
    //     {
    //         id: '2',
    //         name: 'Wizard',
    //         img: Hat2
    //     },
    //     {
    //         id: '3',
    //         name: `Detective`,
    //         img: Hat3
    //     },
    //     {
    //         id: '4',
    //         name: `Chef`,
    //         img: Hat4
    //     },
    //     {
    //         id: '5',
    //         name: `Woolhat`,
    //         img: Hat5
    //     },
    //     {
    //         id: '6',
    //         name: 'Sombrero',
    //         img: Hat6
    //     },
    //     {
    //         id: '7',
    //         name: `Reggae`,
    //         img: Hat7
    //     },
    //     {
    //         id: '8',
    //         name: `Witch`,
    //         img: Hat8
    //     },
    //     {
    //         id: '9',
    //         name: `Fedor`,
    //         img: Hat9
    //     },
    //     {
    //         id: '10',
    //         name: `Drill Instructor`,
    //         img: Hat10
    //     },
    //     {
    //         id: '11',
    //         name: `Troops Mask` its remaining,
    //         img: Hat11
    //     },
    //     {
    //         id: '12',
    //         name: `Troops Mask2` its remaining,
    //         img: Hat12
    //     },
    //     {
    //         id: '13',
    //         name: `Journalist`,
    //         img: Hat13
    //     },
    //     {
    //         id: '14',
    //         name: `Top Hat`,
    //         img: Hat14
    //     }
    // ]
    let Hats = [
        {
            id: 1,
            name: 'Hat1',
            img: Hat1,
            disable: null
        },
        {
            id: 2,
            name: 'Hat2',
            img: Hat2,
            disable: null
        },
        {
            id: 3,
            name: 'Hat3',
            img: Hat3,
            disable: null
        },
        {
            id: 4,
            name: 'Hat4',
            img: Hat4,
            disable: null
        },
        {
            id: 5,
            name: 'Hat5',
            img: Hat5,
            disable: null
        },
        {
            id: 6,
            name: 'Hat6',
            img: Hat6,
            disable: null
        },
        {
            id: 7,
            name: 'Hat7',
            img: Hat7,
            disable: null
        },
        {
            id: 8,
            name: 'Hat8',
            img: Hat8,
            disable: null
        },
        {
            id: 9,
            name: 'Hat9',
            img: Hat9,
            disable: null
        },
        {
            id: 10,
            name: 'Hat10',
            img: Hat10,
            disable: null
        },
        {
            id: 11,
            name: 'Hat11',
            img: Hat11,
            disable: null
        },
        {
            id: 12,
            name: 'Hat12',
            img: Hat12,
            disable: null
        },
        {
            id: 13,
            name: 'Hat13',
            img: Hat13,
            disable: null
        },
        {
            id: 14,
            name: 'Hat14',
            img: Hat14,
            disable: null
        }

    ]
    // let Hairs = [
    //     {
    //         id: '1',
    //         name: `Biblical Beard`,
    //         img: hair1
    //     },
    //     {
    //         id: '2',
    //         name: 'Midnight Lincoln' its remailning,
    //         img: hair2
    //     },
    //     {
    //         id: '3',
    //         name: `Sensi`,
    //         img: hair3
    //     },
    //     {
    //         id: '4',
    //         name: `Small Goatie`,
    //         img: hair4
    //     },
    //     {
    //         id: '5',
    //         name: `Pirat`,
    //         img: hair5
    //     },
    //     {
    //         id: '6',
    //         name: 'Guru',
    //         img: hair6
    //     },
    //     {
    //         id: '7',
    //         name: `Full Beard`,
    //         img: hair7
    //     },
    //     {
    //         id: '8',
    //         name: `Wlrus`,
    //         img: hair8
    //     },
    //     {
    //         id: '9',
    //         name: `Fu'manchu`,
    //         img: hair9
    //     },
    //     {
    //         id: '10',
    //         name: `Horseshoe`,
    //         img: hair10
    //     },
    //     {
    //         id: '11',
    //         name: `Zappa`,
    //         img: hair11
    //     },
    //     {
    //         id: '12',
    //         name: `Hungarian`,
    //         img: hair12
    //     },
    //     {
    //         id: '13',
    //         name: `Politician`,
    //         img: hair13
    //     }
    // ]
    let Hairs = [
        {
            id: 1,
            name: `Hair1`,
            img: hair1
        },
        {
            id: 2,
            name: 'Hair2',
            img: hair2
        },
        {
            id: 3,
            name: `Hair3`,
            img: hair3
        },
        {
            id: 4,
            name: `Hair4`,
            img: hair4
        },
        {
            id: 5,
            name: `Hair5`,
            img: hair5
        },
        {
            id: 6,
            name: 'Hair6',
            img: hair6
        },
        {
            id: 7,
            name: `Hair7`,
            img: hair7
        },
        {
            id: 8,
            name: `Hair8`,
            img: hair8
        },
        {
            id: 9,
            name: `Hair9`,
            img: hair9
        },
        {
            id: 10,
            name: `Hair10`,
            img: hair10
        },
        {
            id: 11,
            name: `Hair11`,
            img: hair11
        },
        {
            id: 12,
            name: `Hair12`,
            img: hair12
        },
        {
            id: 13,
            name: `Hair13`,
            img: hair13
        }
    ]
    // let Glasses = [
    //     {
    //         id: '1',
    //         name: `Pilot`,
    //         img: glase1
    //     },
    //     {
    //         id: '2',
    //         name: 'Agent',
    //         img: glase2
    //     },
    //     {
    //         id: '3',
    //         name: `Anarchist`,
    //         img: glase3
    //     },
    //     {
    //         id: '4',
    //         name: `Journalist`,
    //         img: glase4
    //     },
    //     {
    //         id: '5',
    //         name: `Le Professeur`,
    //         img: glase5
    //     },
    //     {
    //         id: '6',
    //         name: 'Con Man',
    //         img: glase6
    //     },
    //     {
    //         id: '7',
    //         name: `80's`,
    //         img: glase7
    //     },
    //     {
    //         id: '8',
    //         name: `Presidential`,
    //         img: glase8
    //     }
    // ]
    let Glasses = [
        {
            id: 1,
            name: `Glass1`,
            img: glase1
        },
        {
            id: 2,
            name: 'Glass2',
            img: glase2
        },
        {
            id: 3,
            name: `Glass3`,
            img: glase3
        },
        {
            id: 4,
            name: `Glass4`,
            img: glase4
        },
        {
            id: 5,
            name: `Glass5`,
            img: glase5
        },
        {
            id: 6,
            name: 'Glass6',
            img: glase6
        },
        {
            id: 7,
            name: `Glass7`,
            img: glase7
        },
        {
            id: 8,
            name: `Glass8`,
            img: glase8
        }
    ]
    // let Ears = [
    //     {
    //         id: '1',
    //         name: `Squar Ear`,
    //         img: Ear1
    //     },
    //     {
    //         id: '2',
    //         name: 'Pointer Ear',
    //         img: Ear2
    //     },
    //     {
    //         id: '3',
    //         name: `Narrow Ear`,
    //         img: Ear3
    //     },
    //     {
    //         id: '4',
    //         name: `Sticking Out`,
    //         img: Ear4
    //     },
    //     {
    //         id: '5',
    //         name: `Free Lobe`,
    //         img: Ear5
    //     },
    //     {
    //         id: '6',
    //         name: 'Atteched Lobe',
    //         img: Ear6
    //     },
    //     {
    //         id: '7',
    //         name: `Broad Lobe`,
    //         img: Ear7
    //     },
    //     {
    //         id: '8',
    //         name: `Symetrical Ear`,
    //         img: Ear8
    //     }
    // ]
    let Ears = [
        {
            id: 1,
            name: `Ear1`,
            img: Ear1
        },
        {
            id: 2,
            name: 'Ear2',
            img: Ear2
        },
        {
            id: 3,
            name: `Ear3`,
            img: Ear3
        },
        {
            id: 4,
            name: `Ear4`,
            img: Ear4
        },
        {
            id: 5,
            name: `Ear5`,
            img: Ear5
        },
        {
            id: 6,
            name: 'Ear6',
            img: Ear6
        },
        {
            id: 7,
            name: `Ear7`,
            img: Ear7
        },
        {
            id: 8,
            name: `Ear8`,
            img: Ear8
        }
    ]
    // let Nose = [
    //     {
    //         id: '1',
    //         name: `Snub`,
    //         img: Nose1
    //     },
    //     {
    //         id: '2',
    //         name: 'Pointed',
    //         img: Nose2
    //     },
    //     {
    //         id: '3',
    //         name: `Grecian`,
    //         img: Nose3
    //     },
    //     {
    //         id: '4',
    //         name: `Droopy`,
    //         img: Nose4
    //     },
    //     {
    //         id: '5',
    //         name: `Flat`,
    //         img: Nose5
    //     },
    //     {
    //         id: '6',
    //         name: 'Bulbous',
    //         img: Nose6
    //     },
    //     {
    //         id: '7',
    //         name: `Roman`,
    //         img: Nose7
    //     },
    //     {
    //         id: '8',
    //         name: `Snub` repeat,
    //         img: Nose8
    //     }
    // ]
    let Nose = [
        {
            id: 1,
            name: `Nose1`,
            img: Nose1
        },
        {
            id: 2,
            name: 'Nose2',
            img: Nose2
        },
        {
            id: 3,
            name: `Nose3`,
            img: Nose3
        },
        {
            id: 4,
            name: `Nose4`,
            img: Nose4
        },
        {
            id: 5,
            name: `Nose5`,
            img: Nose5
        },
        {
            id: 6,
            name: 'Nose6',
            img: Nose6
        },
        {
            id: 7,
            name: `Nose7`,
            img: Nose7
        },
        {
            id: 8,
            name: `Nose8`,
            img: Nose8
        }
    ]
    // let Jackets = [
    //     {
    //         id: '1',
    //         name: `Winter Jacket`,
    //         img: Jacket1
    //     },
    //     {
    //         id: '2',
    //         name: 'Futura',
    //         img: Jacket2
    //     },
    //     {
    //         id: '3',
    //         name: `Bathrobe`,
    //         img: Jacket3
    //     },
    //     {
    //         id: '4',
    //         name: `Suit`,
    //         img: Jacket4
    //     },
    //     {
    //         id: '5',
    //         name: `Lather Jacket`,
    //         img: Jacket5
    //     },
    //     {
    //         id: '6',
    //         name: 'Rain Coat',
    //         img: Jacket6
    //     },
    //     {
    //         id: '7',
    //         name: `Concierge`,
    //         img: Jacket7
    //     },
    //     {
    //         id: '8',
    //         name: `Coat`,
    //         img: Jacket8
    //     },
    //     {
    //         id: '9',
    //         name: `Apprentice`,
    //         img: Jacket9
    //     },
    //     {
    //         id: '10',
    //         name: `Casual Jacket` its remaining,
    //         img: Jacket10
    //     },
    //     {
    //         id: '11',
    //         name: `Casual Jacket2` its remaining,
    //         img: Jacket11
    //     },
    //     {
    //         id: '12',
    //         name: `Lab Jacket` its remaining,
    //         img: Jacket12
    //     },
    //     {
    //         id: '13',
    //         name: `Jonny`,
    //         img: Jacket13
    //     },
    //     {
    //         id: '14',
    //         name: `Lincoln`,
    //         img: Jacket14
    //     }
    // ]
    let Jackets = [
        {
            id: 1,
            name: `Jacket1`,
            img: Jacket1
        },
        {
            id: 2,
            name: 'Jacket2',
            img: Jacket2
        },
        {
            id: 3,
            name: `Jacket3`,
            img: Jacket3
        },
        {
            id: 4,
            name: `Jacket4`,
            img: Jacket4
        },
        {
            id: 5,
            name: `Jacket5`,
            img: Jacket5
        },
        {
            id: 6,
            name: 'Jacket6',
            img: Jacket6
        },
        {
            id: 7,
            name: `Jacket7`,
            img: Jacket7
        },
        {
            id: 8,
            name: `Jacket8`,
            img: Jacket8
        },
        {
            id: 9,
            name: `Jacket9`,
            img: Jacket9
        },
        {
            id: 10,
            name: `Jacket10`,
            img: Jacket10
        },
        {
            id: 11,
            name: `Jacket11`,
            img: Jacket11
        },
        {
            id: 12,
            name: `Jacket12`,
            img: Jacket12
        },
        {
            id: 13,
            name: `Jacket13`,
            img: Jacket13
        },
        {
            id: 14,
            name: `Jacket14`,
            img: Jacket14
        }
    ]

    // let hatFreeze =[];
    // let hairFreeze = [0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // let jacketFreeze = [0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // let glassFreeze = [0, 2, 3, 0, 0, 0, 0, 0];
    // let noseFreeze = [0, 2, 3, 0, 0, 0, 0, 0];
    // let earFreeze = [0, 2, 3, 0, 0, 0, 0, 0];

    function getRandomnumber() {
        let randomnumber = Math.floor(Math.random() * 1000000000);
        console.log("Random Number", randomnumber);

    }
    async function getCurrentTraits(id) {

        try {
            let tokenData = await Contract.tokenURI(id);
            const response = Buffer.from(tokenData.substring(29), "base64").toString();
            const result = JSON.parse(response);

            let HatTrait = result.attributes[2].value;
            let HairTrait = result.attributes[4].value;
            let GlasseTrait = result.attributes[6].value;
            let EarTrait = result.attributes[7].value;
            let NoseTrait = result.attributes[5].value;
            let JacketTrait = result.attributes[3].value;


            // let resultt = HatTrait.slice(3);
            // setsetCurrentBg(resultt);
            // setsetCurrentTrait(resultt)
            for (let i = 0; i < Hats.length; i++) {
                if (HatTrait === Hats[i].name) {
                    setsetCurrentBg(Hats[i].id);
                    setsetCurrentTrait(Hats[i].id);
                    break;
                }
            }

            // let result1 = HairTrait.slice(4);
            // setsetCurrentBg1(result1);
            // setsetCurrentTrait1(result1)

            for (let j = 0; j < Hairs.length; j++) {
                if (HairTrait === Hairs[j].name) {
                    setsetCurrentBg1(Hairs[j].id);
                    setsetCurrentTrait1(Hairs[j].id);
                    break;
                }
            }

            // let result2 = GlasseTrait.slice(5);
            // setsetCurrentBg2(result2);
            // setsetCurrentTrait2(result2)

            for (let k = 0; k < Glasses.length; k++) {
                if (GlasseTrait === Glasses[k].name) {
                    setsetCurrentBg2(Glasses[k].id);
                    setsetCurrentTrait2(Glasses[k].id)
                    break;
                }

            }

            // let result3 = EarTrait.slice(3);
            // setsetCurrentBg3(result3);
            // setsetCurrentTrait3(result3)

            for (let l = 0; l < Ears.length; l++) {
                if (EarTrait === Ears[l].name) {
                    setsetCurrentBg3(Ears[l].id);
                    setsetCurrentTrait3(Ears[l].id)
                    break;
                }
            }

            // let result4 = NoseTrait.slice(4);
            // setsetCurrentBg4(result4);
            // setsetCurrentTrait4(result4)

            for (let m = 0; m < Nose.length; m++) {
                if (NoseTrait === Nose[m].name) {
                    setsetCurrentBg4(Nose[m].id);
                    setsetCurrentTrait4(Nose[m].id)
                    break;
                }
            }

            // let result5 = JacketTrait.slice(6);
            // setsetCurrentBg5(result5);
            // setsetCurrentTrait5(result5)

            for (let n = 0; n < Jackets.length; n++) {
                if (JacketTrait === Jackets[n].name) {
                    setsetCurrentBg5(Jackets[n].id);
                    setsetCurrentTrait5(Jackets[n].id)
                    break;
                }
            }

            const isChange = await Contract.getNFTDetails(id)
            console.log(isChange, "999999999")
            setEar(isChange[3].Ear.isFreezed)
            setNewHat(isChange[3].Hat.isFreezed)
            setNewHair(isChange[3].Hair.isFreezed)
            setNewJacket(isChange[3].Jacket.isFreezed)
            setNewNose(isChange[3].Nose.isFreezed)
            setNewglasse(isChange[3].Glass.isFreezed)
            setIsNFTChange(isChange.haveChanged)
            console.log("IsChange NFT Details", isChange.haveChanged);


        } catch (error) {
            console.log("🚀 ~ file: changetraits.js ~ line 492 ~ getCurrentTraits ~ error", error)

        }
        console.log("🚀 ~ file: changetraits.js ~ line 461 ~ getCurrentTraits ~ id", id)

    }

    async function getFreezedTraitsValue() {
        var config = {
            method: 'get',
            // url: `http://3.110.231.144:3001/api/setlayer`,
            url: `http://3.110.231.144:3001/api/getfreezetraits`,
            // data: data,
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data.data), "000000000");
                let hat1 = []
                let hair1 = []
                let jacket1 = []
                let glase1 = []
                let nose1 = []
                let ear1 = []

                for (let i = 0; i < Hats.length; i++) {
                    for (let j = 0; j < response.data.data[0].hatFreeze.length; j++) {
                        if (response.data.data[0].hatFreeze[j] == Hats[i].name) {
                            hat1[i] = Hats[i].id
                            console.log("in if when same", hatFreeze);
                        }

                        else {
                            hat1.push(0)
                        }
                    }
                }

                for (let i = 0; i < Hairs.length; i++) {
                    for (let j = 0; j < response.data.data[0].hairFreeze.length; j++) {
                        if (response.data.data[0].hairFreeze[j] == Hairs[i].name) {
                            hair1[i] = Hairs[i].id

                        }

                        else {
                            hair1.push(0)
                        }
                    }
                }

                for (let i = 0; i < Jackets.length; i++) {
                    for (let j = 0; j < response.data.data[0].jacketFreeze.length; j++) {
                        if (response.data.data[0].jacketFreeze[j] == Jackets[i].name) {
                            jacket1[i] = Jackets[i].id

                        }

                        else {
                            jacket1.push(0)
                        }
                    }
                }

                for (let i = 0; i < Glasses.length; i++) {
                    for (let j = 0; j < response.data.data[0].glassFreeze.length; j++) {
                        if (response.data.data[0].glassFreeze[j] == Glasses[i].name) {
                            glase1[i] = Glasses[i].id

                        }

                        else {
                            glase1.push(0)
                        }
                    }
                }


                for (let i = 0; i < Nose.length; i++) {
                    for (let j = 0; j < response.data.data[0].noseFreeze.length; j++) {
                        if (response.data.data[0].noseFreeze[j] == Nose[i].name) {
                            nose1[i] = Nose[i].id

                        }

                        else {
                            nose1.push(0)
                        }
                    }
                }


                for (let i = 0; i < Ears.length; i++) {
                    for (let j = 0; j < response.data.data[0].earFreeze.length; j++) {
                        if (response.data.data[0].earFreeze[j] == Ears[i].name) {
                            ear1[i] = Ears[i].id

                        }

                        else {
                            ear1.push(0)
                        }
                    }
                }

                setHatFreeze(hat1)
                sethairFreeze(hair1)
                setjacketFreeze(jacket1)
                setglassFreeze(glase1)
                setnoseFreeze(nose1)
                setearFreeze(ear1)

                console.log("uuuuuuuuuu", hatFreeze);

            })
            .catch(function (error) {
                console.log(error);
            });

    }
    useEffect(() => {
        // GetDetails()
        if (tokenID) {
            getFreezedTraitsValue()
            getCurrentTraits(tokenID);
        }
    }, [tokenID])

    function showTraits(trait) {
        if (trait == 'hat') {
            setHatShow(true)
            setEarShow(false)
            setGlaseShow(false)
            setHairShow(false)
            setNoseShow(false)
            setJacketShow(false)
        }
        if (trait == 'hair') {
            setHatShow(false)
            setEarShow(false)
            setGlaseShow(false)
            setHairShow(true)
            setNoseShow(false)
            setJacketShow(false)
        }
        if (trait == 'nose') {
            setHatShow(false)
            setEarShow(false)
            setGlaseShow(false)
            setHairShow(false)
            setNoseShow(true)
            setJacketShow(false)
        }
        if (trait == 'ear') {
            setHatShow(false)
            setEarShow(true)
            setGlaseShow(false)
            setHairShow(false)
            setNoseShow(false)
            setJacketShow(false)
        }
        if (trait == 'jacket') {
            setHatShow(false)
            setEarShow(false)
            setGlaseShow(false)
            setHairShow(false)
            setNoseShow(false)
            setJacketShow(true)
        }
        if (trait == 'glase') {
            setHatShow(false)
            setEarShow(false)
            setGlaseShow(true)
            setHairShow(false)
            setNoseShow(false)
            setJacketShow(false)
        }
    }

    const setLayer = async (
        Phat,
        Phair,
        Pglasse,
        Pear,
        Pnose,
        Pjacket,
    ) => {
        var Fhat = Phat
        var Fhair = Phair
        var Fglasse = Pglasse
        var Fear = Pear
        var Fnose = Pnose
        var Fjacket = Pjacket


        // fetch(`https://gateway.pinata.cloud/ipfs/Qmb67z2o9yKuDQZneZGQktZMFhxVkdMTGm2X9F1EaE2ojR/${tokenID}.json`)
        //         .then((response) => console.log("Metadata", response));
        // const response = await fetch(`https://oneof.mypinata.cloud/ipfs/QmUfM6KzxNRdVdkRsMnwhSWbZHrgDQiLX6TMkWF5mJdMMp/${tokenID}.json`);

        let tokenData = await Contract.tokenURI(tokenID);
        const response = Buffer.from(tokenData.substring(29), "base64").toString();

        const result = JSON.parse(response);


        let background = result.attributes[0].value;

        if (!Fhat) {
            Fhat = result.attributes[2].value;
        }
        if (!Fhair) {
            Fhair = result.attributes[4].value;
        }
        if (!Fglasse) {
            Fglasse = result.attributes[6].value;
        }
        if (!Fear) {
            var Fear = result.attributes[7].value;
        }
        if (!Fnose) {
            Fnose = result.attributes[5].value;
        }
        if (!Fjacket) {
            Fjacket = result.attributes[3].value;
        }

        let data = Object();

        data.Background = background
        data.Hat = Fhat;
        data.Hair = Fhair;
        data.Glasses = Fglasse;
        data.Ear = Fear;
        data.Nose = Fnose;
        data.Jacket = Fjacket;
        data.tokenID = tokenID;
        console.log("data in change ", data);
        // console.log("env host", "http://13.232.75.55:3001");
        var config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_HOST_3001}/api/setlayer`,
            // url: `http://localhost:3001/api/setlayer`,
            data: data,
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                setTimeout(() => {

                    // fetch(`http://3.110.231.144:3001/assets/${tokenID}.gif`)
                    //     .then((response) => console.log("check"));
                    fetch(`${process.env.NEXT_PUBLIC_API_HOST_3001}/assets/${tokenID}.gif`)
                        .then((response) => console.log("check"));
                    setShowGif(true)
                    // setSubmitLoder(false)
                    // setImageShow(true)
                    setgifloader(false)

                }, 1000);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    function setTraits(trait, value) {
        console.log("🚀 ~ file: changetraits.js ~ line 1056 ~ setTraits ~ isNFTChange", isNFTChange)

        if (!isNFTChange) {


            console.log("Value in setTraits Function", value);
            setgifloader(true)
            // let data = `${trait}${value}`
            // let 
            if (trait === 'Hat') {
                sethat(value)
                sethair('')
                setglasse('')
                setear('')
                setnose('')
                setjacket('')

                // setLayer(
                //     value,
                //     hair,
                //     glasse,
                //     ear,
                //     nose,
                //     jacket,
                // )
                setLayer(
                    value,
                    null,
                    null,
                    null,
                    null,
                    null,
                )
            }
            if (trait === 'Hair') {
                sethair(value)
                sethat('')
                setglasse('')
                setear('')
                setnose('')
                setjacket('')

                setLayer(
                    null,
                    value,
                    null,
                    null,
                    null,
                    null,
                )
            }
            if (trait === 'Glasse') {
                setglasse(value)
                sethair('')
                sethat('')
                setear('')
                setnose('')
                setjacket('')

                setLayer(
                    null,
                    null,
                    value,
                    null,
                    null,
                    null,
                )
            }
            if (trait === 'Ear') {
                setear(value)
                setglasse('')
                sethair('')
                sethat('')
                setnose('')
                setjacket('')

                setLayer(
                    null,
                    null,
                    null,
                    value,
                    null,
                    null
                )

            }
            if (trait === 'Nose') {
                setnose(value)
                setear('')
                setglasse('')
                sethair('')
                sethat('')
                setjacket('')

                setLayer(
                    null,
                    null,
                    null,
                    null,
                    value,
                    null
                )

            }
            if (trait === 'Jacket') {
                setjacket(value)
                setnose('')
                setear('')
                setglasse('')
                sethair('')
                sethat('')

                setLayer(
                    null,
                    null,
                    null,
                    null,
                    null,
                    value
                )

            }
        } else {
            toast.error(`Oop's sorry you already changed`, {
                position: toast.POSITION.TOP_RIGHT,
                theme: "colored"
            });
        }

    }

    const changeTraitsFunction = async (
        Phat,
        Phair,
        Pglasse,
        Pear,
        Pnose,
        Pjacket,) => {
        var Fhat = Phat
        var Fhair = Phair
        var Fglasse = Pglasse
        var Fear = Pear
        var Fnose = Pnose
        var Fjacket = Pjacket

        var traitType;
        var traitValue;

        if (!Fhat && !Fjacket && !Fhair && !Fnose && !Fglasse && !Fear) {
            setSpin(false)
            if (!isNFTChange) {
                toast.error(`Oop's sorry you did'nt make any changes`, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored"
                });
            } else {
                toast.error(`Oop's sorry you already changed`, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored"
                });
            }
        }
        else {
            if (Fhat) {
                console.log("hat value in change apply", Fhat);
                traitType = 1;
                for (let i = 0; i < Hats.length; i++) {
                    if (Fhat == Hats[i].name) {
                        traitValue = Hats[i].id;
                        break;
                    }
                }
                // traitValue = Fhat.slice(3);
            }
            if (Fjacket) {
                traitType = 2;
                for (let j = 0; j < Jackets.length; j++) {
                    if (Fjacket == Jackets[j].name) {
                        traitValue = Jackets[j].id;
                        break;
                    }
                }
                // traitValue = Fjacket.slice(6);
            }
            if (Fhair) {
                traitType = 3;
                // traitValue = Fhair.slice(4);
                for (let k = 0; k < Hairs.length; k++) {
                    if (Fhair == Hairs[k].name) {
                        traitValue = Hairs[k].id;
                        break;
                    }
                }
            }
            if (Fnose) {
                traitType = 4;
                // traitValue = Fnose.slice(4);

                for (let l = 0; l < Nose.length; l++) {
                    if (Fnose == Nose[l].name) {
                        traitValue = Nose[l].id;
                        break;
                    }
                }
            }
            if (Fglasse) {
                traitType = 5;
                traitValue = Fglasse.slice(5);

                for (let m = 0; m < Glasses.length; m++) {
                    if (Fglasse == Glasses[m].name) {
                        traitValue = Glasses[m].id;
                        break;
                    }
                }
            }
            if (Fear) {
                traitType = 6;
                // traitValue = Fear.slice(3);

                for (let n = 0; n < Ears.length; n++) {
                    if (Fear == Ears[n].name) {
                        traitValue = Ears[n].id;
                        break;
                    }
                }
            }

            try {

                if (typeof window !== undefined) {
                    // let change = await contract.safeMint({ value: eth.value });
                    // let randomnumber = Math.floor(Math.random() * 1000000000);
                    let randomnumber = Buffer.from(Math.random().toString()).toString("base64").substr(10, 9);
                    // let randomnumber = Math.floor(Math.random() * 900000000) + 100000000;

                    console.log("Random Number", randomnumber);

                    let traitValueString

                    if (traitValue < 10) {
                        traitValueString = `0${traitValue}`
                        console.log("traitValueString in > 10 ----", traitValueString);
                    }
                    if (traitValue > 10) {
                        traitValueString = `${traitValue}`
                        console.log("traitValueString in < 10 ----", traitValueString);
                    }
                    console.log("after ifffffffff");
                    let hashString = `${randomnumber}${traitType}${traitValueString}`
                    console.log("hashString", hashString);
                    const utf8 = new TextEncoder().encode(hashString);
                    let hashHex
                    console.log("utf8", utf8);

                    await crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
                        const hashArray = Array.from(new Uint8Array(hashBuffer));
                        hashHex = hashArray
                            .map((bytes) => bytes.toString(16).padStart(2, '0'))
                            .join('');
                        console.log("hashHex", hashHex);
                    });


                    console.log("hashHex ----------", `0x${hashHex}`);
                    let data = Object()
                    data.tokenId = tokenID;
                    data.traitType = traitType;
                    data.traitValue = traitValueString;
                    data.randomNumber = randomnumber;

                    var config = {
                        method: 'post',
                        // url: `http://3.110.231.144:3001/api/setlayer`,
                        url: `${process.env.NEXT_PUBLIC_API_HOST_3001}/api/selectedmetadata`,
                        data: data,
                    };
                    console.log("In change traits function ------------------", tokenID, traitType, traitValue);
                    await axios(config)
                        .then(async function (response) {
                            console.log(JSON.stringify(response.data));
                            let changeT = await Contract.changeTraits(tokenID, `0x${hashHex}`);

                            let changed = await changeT.wait()
                            if (changed) {

                                setSpin(false)
                                toast.success("You saved your changes", {
                                    position: toast.POSITION.TOP_RIGHT,
                                    theme: "colored"
                                });
                                console.log("🚀 ~ file: changetraits.js ~ line 719 ~ changetraits ~ changed", changed)
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                }
            } catch (error) {
                console.log("🚀 ~ file: changetraits.js ~ line 676 ~ changeTraitsFunction ~ error-------", error)
                setSpin(false)
                try {
                    if (error.error.code === -32603) {
                        toast.error(`${error.error.message}`, {
                            // toast.error(`Oop's you Already Changed`, {
                            position: toast.POSITION.TOP_RIGHT,
                            theme: "colored"
                        });
                    } else {
                        toast.error(`Oop's Somthing went wrong`, {
                            position: toast.POSITION.TOP_RIGHT,
                            theme: "colored"
                        });
                    }
                } catch (error) {
                    toast.error(`Oop's Somthing went wrong`, {
                        position: toast.POSITION.TOP_RIGHT,
                        theme: "colored"
                    });
                }


            }
        }
    }

    function appliedChanges() {
        setSpin(true)
        changeTraitsFunction(
            hat,
            hair,
            glasse,
            ear,
            nose,
            jacket,
        )
    }

    const divEl = useRef(null);

    const changeToSelected = (i) => {
        if (!isNFTChange) {
            setsetCurrentBg(i);
            setsetCurrentBg1(setCurrentTrait1);
            setsetCurrentBg2(setCurrentTrait2);
            setsetCurrentBg3(setCurrentTrait3);
            setsetCurrentBg4(setCurrentTrait4);
            setsetCurrentBg5(setCurrentTrait5);
        }
    };
    const changeToSelected1 = (i) => {
        if (!isNFTChange) {
            setsetCurrentBg(setCurrentTrait);
            setsetCurrentBg1(i);
            setsetCurrentBg2(setCurrentTrait2);
            setsetCurrentBg3(setCurrentTrait3);
            setsetCurrentBg4(setCurrentTrait4);
            setsetCurrentBg5(setCurrentTrait5);
        }
    };
    const changeToSelected2 = (i) => {
        if (!isNFTChange) {
            setsetCurrentBg(setCurrentTrait);
            setsetCurrentBg1(setCurrentTrait1);
            setsetCurrentBg2(i);
            setsetCurrentBg3(setCurrentTrait3);
            setsetCurrentBg4(setCurrentTrait4);
            setsetCurrentBg5(setCurrentTrait5);
        }

    };
    const changeToSelected3 = (i) => {
        if (!isNFTChange) {
            setsetCurrentBg(setCurrentTrait);
            setsetCurrentBg1(setCurrentTrait1);
            setsetCurrentBg2(setCurrentTrait2);
            setsetCurrentBg3(i);
            setsetCurrentBg4(setCurrentTrait4);
            setsetCurrentBg5(setCurrentTrait5);
        }

    };
    const changeToSelected4 = (i) => {
        if (!isNFTChange) {
            setsetCurrentBg(setCurrentTrait);
            setsetCurrentBg1(setCurrentTrait1);
            setsetCurrentBg2(setCurrentTrait2);
            setsetCurrentBg3(setCurrentTrait3);
            setsetCurrentBg4(i);
            setsetCurrentBg5(setCurrentTrait5);
        }
    };
    const changeToSelected5 = (i) => {
        if (!isNFTChange) {
            setsetCurrentBg(setCurrentTrait);
            setsetCurrentBg1(setCurrentTrait1);
            setsetCurrentBg2(setCurrentTrait2);
            setsetCurrentBg3(setCurrentTrait3);
            setsetCurrentBg4(setCurrentTrait4);
            setsetCurrentBg5(i);
        }

    };


    // async function GetDetails(){
    //     let nftDetails= await Contract.getNFTDetails(tokenID)
    //     console.log(nftDetails[3].Ear,"only Ear")
    //     console.log(nftDetails[3].Ear.isFreezed,"fetching details of nft")
    //     setEar(nftDetails[3].Ear.isFreezed)
    // }
    // const HandleChange=(e)=>{
    //     setEar(true)
    // }

    console.log("arrrrrrrrrrrr", hatFreeze);

    return (
        <div>
            <ToastContainer />

            {tokenID ?
                <div>

                    <div className="container mt-5">
                        <div className='row'>
                            <div className="col-6">
                                <Link href={{ pathname: '/dressingroom' }}>
                                    <Button className='  drback_btn  fs-md-5'
                                    >
                                        <BsArrowLeft
                                            className='me-3 fs-3'
                                        /> Back
                                    </Button>
                                </Link>
                            </div>
                            <div className="col-6">
                                <div className='text-end'>
                                    <Button className='drback_btn1  fs-md-5'
                                        // variant='light'
                                        onClick={appliedChanges}
                                    >
                                        {spin === true ?
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            : ""}
                                        Apply changes
                                    </Button>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="container mt-3">
                        <p className="text-center wl_text">
                            Preview KNOWlytes
                        </p>
                        {isNFTChange ?
                            <div className="row">

                                <div className="col-md-4 mt-3 text-center mx-auto">
                                    <p className='wl_text2 text-center'>Current Knowlytes</p>

                                    {showGif ?
                                        <>
                                            {gifloader ?
                                                <div className='wl_text2 mt-5'>
                                                    Please wait ...
                                                    <div className="spinner-border text-light " role="status">
                                                        <span className="sr-only  "></span>
                                                    </div>
                                                </div>
                                                :
                                                <img
                                                    className="img-fluid rounded"
                                                    // src={`http://localhost:3001/changeImage/${tokenID}.gif`}
                                                    src={`${process.env.NEXT_PUBLIC_ASSETS_3001}${tokenID}.gif`}
                                                />
                                            }
                                        </>
                                        :
                                        <div>
                                            {gifloader ?
                                                <div className='wl_text2'>
                                                    Please wait ...
                                                    <div className="spinner-border text-light " role="status">
                                                        <span className="sr-only  "></span>
                                                    </div>
                                                </div>
                                                :
                                                <img
                                                    className="img-fluid rounded"
                                                    src={`${process.env.NEXT_PUBLIC_KNOWLYTES_5000}/${tokenID}.gif`}

                                                // src={`${process.env.knowlytes_5000}{tokenID}.gif`}
                                                />
                                            }
                                        </div>
                                    }
                                </div>
                                <div className="col-md-4 mt-3 text-center mx-auto">
                                    <p className='wl_text2 text-center'>Future Knowlytes</p>
                                    <img
                                        className="img-fluid rounded"
                                        // src={`http://localhost:3001/assets/${tokenID}.gif`}

                                        src={`${process.env.NEXT_PUBLIC_API_HOST_3001}/changed/${tokenID}.gif`}

                                    // src={`http://3.110.231.144:3001/assets/${tokenID}.gif`}
                                    />
                                </div>

                            </div>
                            :
                            <div className="row">

                                <div className="col-md-3 mt-3 text-center mx-auto">
                                    {showGif ?
                                        <>
                                            {gifloader ?
                                                <div className='wl_text2'>
                                                    Please wait ...
                                                    <div className="spinner-border text-light " role="status">
                                                        <span className="sr-only  "></span>
                                                    </div>
                                                </div>
                                                :
                                                <img
                                                    className="img-fluid rounded"
                                                    // src={`http://localhost:3001/assets/${tokenID}.gif`}
                                                    // src={`http://localhost:3001/changeImage/${tokenID}.gif`}
                                                    // src={`http://localhost:3001/assets/${tokenID}.gif`}
                                                    src={`${process.env.NEXT_PUBLIC_API_HOST_3001}/assets/${tokenID}.gif`}
                                                // src={`http://localhost:3001/assets/${tokenID}.gif`}
                                                // src={`${process.env.NEXT_PUBLIC_CHANGE_IMAGE}{tokenID}.gif`}
                                                // src={`http://localhost:3001/assets/${tokenID}.gif`}
                                                // src={`${process.env.NEXT_PUBLIC_CHANGE_IMAGE}{tokenID}.gif`}
                                                // src={`http://localhost:3001/assets/${tokenID}.gif`}
                                                // src={`http://localhost:3001/changeImage/${tokenID}.gif`}

                                                // src={`http://3.110.231.144:3001/assets/${tokenID}.gif`}
                                                />
                                            }
                                        </>
                                        :
                                        <div>
                                            {gifloader ?
                                                <div className='wl_text2'>
                                                    Please wait ...
                                                    <div className="spinner-border text-light " role="status">
                                                        <span className="sr-only  "></span>
                                                    </div>
                                                </div>
                                                :
                                                <img
                                                    className="img-fluid rounded"
                                                    src={`${process.env.NEXT_PUBLIC_KNOWLYTES_5000}${tokenID}.gif`}
                                                />

                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        }

                    </div>
                    <div className='container mt-5'>
                        <div className={`row  `}>
                            <div className='col-4 col-md-3 col-lg-2 mt-3 m-0 p-0 px-2 d-flex justify-content-center'>
                                <div className={`row border rounded tr_btn1 m-0 p-0 ${hatShow ? "active_trbtn" : ""}`}
                                    onClick={(e) => showTraits("hat")}
                                >
                                    <div className='col-6 d-flex justify-content-center'>
                                        <svg viewBox="0 0 44 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9301 15.7735C15.9569 14.208 13.6676 13.3809 11.3026 13.3809C5.98269 13.3809 1.47819 17.6704 0.0963143 24.045C-0.144311 25.1811 0.070533 26.361 0.689283 27.2838C1.29085 28.1807 2.19353 28.6934 3.15603 28.6934H40.7001C33.6051 28.6934 30.0438 26.1552 24.6676 21.5498L17.9301 15.7735ZM34.0657 14.5293L32.2005 3.83108C32.0028 2.65189 31.3239 1.6094 30.336 0.942901C29.3481 0.276397 28.1195 0.0337211 26.9508 0.281524L13.8119 3.05999C11.9419 3.45306 10.5532 4.99319 10.3469 6.87308L9.87256 11.3301C10.3452 11.2703 10.8089 11.1934 11.2991 11.1934C14.1777 11.1934 16.9366 12.1846 19.3704 14.1246L26.1079 19.8921C30.9891 24.0791 34.021 26.5059 40.6966 26.5059C42.5185 26.5059 43.9966 25.0362 43.9966 23.2246C44.0001 21.4883 41.9651 15.0625 34.0657 14.5293Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className='col-6 d-flex justify-content-center'>
                                        <p className='mt-3 text-center'>
                                            Hats
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className='col-4 col-md-3 col-lg-2 mt-3  m-0 p-0 px-2 d-flex justify-content-center'>
                                <div className={`row border rounded tr_btn1 m-0 p-0 ${hairShow ? "active_trbtn" : ""}`}
                                    onClick={(e) => showTraits("hair")}
                                    onMouseLeave={() => setimg(false)}
                                    onMouseEnter={() => setimg(true)}
                                >
                                    <div className={`col-6 d-flex justify-content-center  ${hairShow ? "img_main" : "img_main1"}`}>
                                        {img ?
                                            <Image
                                                src={HairsLogo1}
                                                className="img-fluid "
                                            />
                                            :
                                            <Image
                                                src={HairsLogo}
                                                className="img-fluid "
                                            />
                                        }
                                    </div>
                                    <div className={`col-6 d-flex justify-content-center  ${hairShow ? "img_hover1" : "img_hover"}`}>
                                        <Image
                                            src={HairsLogo1}
                                            className="img-fluid "
                                        />

                                    </div>
                                    <div className='col-6 d-flex justify-content-center'>
                                        <p className='mt-3 text-center'>
                                            Hair
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className='col-4 col-md-3 col-lg-2 mt-3 m-0 p-0 px-2 d-flex justify-content-center'>
                                <div className={`row border rounded tr_btn1 m-0 p-0 ${glaseShow ? "active_trbtn" : ""}`}
                                    onClick={(e) => showTraits("glase")}
                                >
                                    <div className='col-6 m-0 p-0 d-flex justify-content-center mt-2'>
                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.212 8.5965C14.4637 8.37318 14.7885 8.2499 15.125 8.25H17.875C18.2397 8.25 18.5894 8.39487 18.8473 8.65273C19.1051 8.91059 19.25 9.26033 19.25 9.625C19.25 9.98967 19.1051 10.3394 18.8473 10.5973C18.5894 10.8551 18.2397 11 17.875 11H15.6475L9.4545 16.5H15.125C16.219 16.5 17.2682 16.9346 18.0418 17.7082C18.8154 18.4818 19.25 19.531 19.25 20.625V22H24.75V20.625C24.75 19.531 25.1846 18.4818 25.9582 17.7082C26.7318 16.9346 27.781 16.5 28.875 16.5H34.5455L28.3525 11H26.125C25.7603 11 25.4106 10.8551 25.1527 10.5973C24.8949 10.3394 24.75 9.98967 24.75 9.625C24.75 9.26033 24.8949 8.91059 25.1527 8.65273C25.4106 8.39487 25.7603 8.25 26.125 8.25H28.875C29.2115 8.2499 29.5363 8.37318 29.788 8.5965L39.7485 17.4405C40.2182 17.8276 40.5965 18.3139 40.8561 18.8645C41.1157 19.4151 41.2502 20.0163 41.25 20.625V26.125C41.25 27.0278 41.0722 27.9218 40.7267 28.7559C40.3812 29.5901 39.8748 30.348 39.2364 30.9864C38.598 31.6248 37.8401 32.1312 37.006 32.4767C36.1718 32.8222 35.2778 33 34.375 33H31.625C29.8016 33 28.053 32.2757 26.7636 30.9864C25.4743 29.697 24.75 27.9484 24.75 26.125V24.75H19.25V26.125C19.25 27.0278 19.0722 27.9218 18.7267 28.7559C18.3812 29.5901 17.8748 30.348 17.2364 30.9864C16.598 31.6248 15.8401 32.1312 15.0059 32.4767C14.1718 32.8222 13.2778 33 12.375 33H9.625C7.80164 33 6.05295 32.2757 4.76364 30.9864C3.47433 29.697 2.75 27.9484 2.75 26.125V20.625C2.74981 20.0163 2.88434 19.4151 3.14394 18.8645C3.40354 18.3139 3.78177 17.8276 4.2515 17.4405L14.212 8.5965ZM37.972 19.5415C37.7303 19.3521 37.432 19.2495 37.125 19.25H28.875C28.5103 19.25 28.1606 19.3949 27.9027 19.6527C27.6449 19.9106 27.5 20.2603 27.5 20.625V26.125C27.5 27.219 27.9346 28.2682 28.7082 29.0418C29.4818 29.8154 30.531 30.25 31.625 30.25H34.375C35.469 30.25 36.5182 29.8154 37.2918 29.0418C38.0654 28.2682 38.5 27.219 38.5 26.125V20.625C38.4998 20.4288 38.4575 20.235 38.3759 20.0566C38.2943 19.8782 38.1753 19.7194 38.027 19.591L37.972 19.5415ZM5.9675 19.5883C5.81999 19.7176 5.70194 19.8771 5.62129 20.0559C5.54065 20.2348 5.49929 20.4288 5.5 20.625V26.125C5.5 27.219 5.9346 28.2682 6.70818 29.0418C7.48177 29.8154 8.53098 30.25 9.625 30.25H12.375C13.469 30.25 14.5182 29.8154 15.2918 29.0418C16.0654 28.2682 16.5 27.219 16.5 26.125V20.625C16.5 20.2603 16.3551 19.9106 16.0973 19.6527C15.8394 19.3949 15.4897 19.25 15.125 19.25H6.875C6.56797 19.2495 6.26968 19.3521 6.028 19.5415L5.973 19.5883H5.9675Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className='col-6 m-0 p-0 pe-2 pe-md-0 d-flex justify-content-center'>
                                        <p className='mt-3 text-center'>
                                            Glasse
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className='col-4 col-md-3 col-lg-2 mt-3  m-0 p-0 px-2 d-flex justify-content-center'>
                                <div className={`row border rounded tr_btn1 m-0 p-0 ${earShow ? "active_trbtn" : ""}`}
                                    onClick={(e) => showTraits("ear")}
                                >
                                    <div className='col-6 d-flex justify-content-center mt-2'>
                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M37.4427 14.2519C35.8911 6.4295 30.4261 1.375 23.5195 1.375H23.5188C23.2995 1.375 23.0774 1.3805 22.8554 1.39013C16.8294 1.66513 12.8873 3.46706 10.4508 7.06063C8.09268 10.5366 7.15561 15.6214 7.41205 23.5482C7.46018 25.0601 7.16043 26.9631 6.8428 28.9767C6.1608 33.3052 5.45405 37.7809 7.83486 40.5116C9.05792 41.9141 10.9224 42.625 13.3782 42.625C13.944 42.625 14.5538 42.5879 15.1918 42.5136C18.4719 42.1314 19.7176 40.4243 20.9228 38.7736C22.2497 36.9559 23.7546 34.8954 28.6214 32.9574C36.6006 29.7784 38.7882 21.0334 37.4427 14.2519ZM28.0144 31.4868C18.1804 35.4035 20.5818 40.2889 15.0027 40.9379C14.417 41.0059 13.8759 41.0382 13.3789 41.0382C4.12992 41.0382 9.22774 29.7784 9.02561 23.4967C8.55261 8.88594 12.2466 3.46294 22.931 2.97481C23.1283 2.96588 23.3242 2.96106 23.5188 2.96106C37.5122 2.96175 41.2646 26.2096 28.0144 31.4868Z" fill="currentColor" />
                                            <path d="M31.8202 18.4946C31.6267 16.4071 31.0648 14.3704 30.1606 12.4789C29.2214 10.5904 27.9159 8.77537 25.9813 7.49524C25.0229 6.85518 23.8858 6.3808 22.6648 6.21443C21.4472 6.03774 20.1801 6.18143 19.0403 6.55818C17.9959 6.9088 16.9571 7.36943 15.9946 8.02255C15.0349 8.67224 14.1624 9.53024 13.5148 10.5546C12.8864 11.5886 12.4946 12.7622 12.3894 13.9206C12.2963 15.0452 12.4131 16.1773 12.7338 17.2591C13.191 18.8184 13.9363 20.2394 14.9256 21.446C14.1363 21.2397 13.3464 21.1366 12.553 21.1029L12.4698 21.3759C13.3223 21.8901 14.1659 22.3803 14.8891 22.9296C15.2459 23.2046 15.5711 23.4996 15.8111 23.789C16.0565 24.0819 16.1686 24.3775 16.1789 24.5755C16.1844 24.7756 16.1184 24.9433 15.9719 25.1956C15.8351 25.4445 15.6041 25.7332 15.3257 26.0158C14.7606 26.583 14.0586 27.1564 13.3271 27.7476C12.5943 28.3684 11.8366 28.9239 11.0364 29.8637C10.8363 30.1195 10.6149 30.3807 10.4039 30.8874C10.2634 31.2331 10.216 31.6095 10.2664 31.9792C10.3262 32.4549 10.6232 32.9018 10.8858 33.128C11.1615 33.3748 11.3733 33.4745 11.6084 33.5769C11.8009 33.656 11.9508 33.6959 12.0958 33.7392C12.3976 33.821 12.7043 33.8829 13.0116 33.9241C14.204 34.0737 15.4147 33.8956 16.5137 33.4092C17.5614 32.9568 18.4215 32.2617 19.164 31.5254C19.9051 30.7802 20.5163 29.9593 21.0759 29.1254C21.6295 28.2915 22.1219 27.4186 22.5493 26.5136C22.9734 25.6061 23.3736 24.6621 23.6252 23.6329C23.8748 22.6182 23.9621 21.4941 23.7703 20.4044C23.3997 18.1907 21.7689 16.2423 19.7876 15.2502C18.2455 14.4596 16.4724 14.2334 14.8754 14.5476C15.0583 13.6415 15.402 12.8144 15.9403 12.129C16.8884 10.8626 18.3748 9.92968 20.0626 9.20162C20.8113 8.87024 21.5984 8.69562 22.3966 8.73274C23.1934 8.7733 23.9978 9.01737 24.7527 9.43468C26.2611 10.2858 27.5158 11.7385 28.4473 13.3569C29.3947 14.9787 30.0506 16.8006 30.3813 18.6788C30.7188 20.5536 30.736 22.5096 30.252 24.3658C29.7769 26.2138 28.7423 27.9566 27.1534 29.1549L27.3184 29.3907C28.2043 28.8544 28.9857 28.1622 29.625 27.3475C30.2637 26.5301 30.7539 25.5999 31.1079 24.6257C31.8154 22.6697 31.9962 20.5584 31.8202 18.4946ZM16.3329 15.9089C17.1696 16.2334 17.9327 16.6431 18.6009 17.145C19.9601 18.1432 20.8346 19.4969 21.4231 21.0081C21.5806 21.3869 21.7105 21.7856 21.8102 22.2002C21.87 22.4037 21.9044 22.6264 21.947 22.8272C21.9834 23.0857 22.0089 23.2479 22.0274 23.4865C22.0934 24.3672 21.9924 25.2987 21.6809 26.1671C21.0684 27.9106 19.7463 29.4093 18.1685 30.3058C16.7344 31.1205 15.1724 31.5172 13.8682 31.3322C14.3185 30.9404 14.852 30.5024 15.3594 30.0528C16.0964 29.3859 16.8581 28.6744 17.5223 27.7476C17.8516 27.2808 18.1699 26.7631 18.3885 26.1176C18.6037 25.483 18.6553 24.6436 18.3686 23.9217C18.0915 23.1964 17.5731 22.7096 17.0878 22.3734C16.7454 22.1364 16.3764 21.9403 15.9884 21.7891C15.3223 20.1679 14.8747 18.5042 14.7427 16.8968C14.7056 16.4032 14.7083 15.9192 14.7468 15.4489C15.2989 15.572 15.8269 15.7191 16.3329 15.9089Z" fill="currentColor" />
                                        </svg>

                                    </div>
                                    <div className='col-6 d-flex justify-content-center'>
                                        <p className='mt-3 text-center'>
                                            Ear
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className='col-4 col-md-3 col-lg-2 mt-3  m-0 p-0 px-2 d-flex justify-content-center'>
                                <div className={`row border rounded tr_btn1 m-0 p-0 ${noseShow ? "active_trbtn" : ""}`}
                                    onClick={(e) => showTraits("nose")}
                                >
                                    <div className='col-6 d-flex justify-content-center mt-2'>
                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32.1207 24.9528C31.9351 23.9346 31.7295 22.8779 31.5281 21.8467C31.0069 19.1771 30.4686 16.4168 30.4686 15.1367C30.4679 5.61894 27.8561 1.375 21.9986 1.375C16.1418 1.375 13.53 5.61894 13.53 15.1374C13.53 16.4189 12.991 19.1819 12.4692 21.8542C12.2691 22.8827 12.0636 23.9374 11.8786 24.9535C7.92619 25.2828 4.8125 28.5704 4.8125 32.5648C4.8125 36.2794 8.43769 39.4302 11.0385 40.0544C11.3183 40.1218 11.6428 40.1548 12.0319 40.1548C12.7689 40.1548 13.7541 40.0276 14.5262 39.8722C16.6004 41.6542 19.2218 42.625 21.9986 42.625C24.7768 42.625 27.3983 41.6536 29.4718 39.8716C30.2445 40.0269 31.2304 40.1541 31.9681 40.1541C32.3579 40.1541 32.6824 40.1211 32.9615 40.0537C35.5616 39.4309 39.1875 36.2801 39.1875 32.5648C39.1875 28.5704 36.0724 25.2814 32.1207 24.9528ZM32.6033 38.511C32.3943 38.5536 32.1813 38.5727 31.9681 38.5681C31.1011 38.5681 29.8952 38.3618 29.3164 38.2106C29.9083 37.8964 30.6488 37.5705 31.4442 37.4021C35.6565 36.5042 33.8277 34.5317 31.0097 35.4303C28.7973 36.1357 28.0912 38.819 28.05 38.9799C26.3161 40.3165 24.1879 41.0404 21.9986 41.0382C19.8108 41.0406 17.6839 40.3177 15.9507 38.9826C15.917 38.8499 15.2151 36.1398 12.9896 35.4303C10.1722 34.5317 8.3435 36.5049 12.5558 37.4021C13.3499 37.5705 14.0903 37.8971 14.6829 38.2106C14.1054 38.3611 12.8975 38.5681 12.0319 38.5681C11.7844 38.5681 11.5637 38.5509 11.3974 38.511C9.5205 38.0607 6.3745 35.5266 6.3745 32.5655C6.3745 29.2236 9.13138 26.5127 12.5318 26.5127C12.7531 26.5127 12.9718 26.5251 13.1863 26.5478C13.8573 22.5122 15.0913 17.3229 15.0913 15.1374C15.0913 4.87919 18.183 2.96175 21.9979 2.96175C25.8163 2.96175 28.9052 4.87919 28.9052 15.1374C28.9052 17.3222 30.14 22.5122 30.811 26.5485C31.0262 26.5251 31.2455 26.5127 31.4669 26.5127C34.8673 26.5127 37.6241 29.2229 37.6241 32.5655C37.6255 35.5266 34.4795 38.0607 32.6033 38.511Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className='col-6 d-flex justify-content-center'>
                                        <p className='mt-3 text-center'>
                                            Nose
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className='col-4 col-md-3 col-lg-2 mt-3  m-0 p-0 px-2 d-flex justify-content-center'>
                                <div className={`row border rounded tr_btn1 m-0 p-0 ${jacketShow ? "active_trbtn" : ""}`}
                                    onClick={(e) => showTraits("jacket")}
                                    onMouseLeave={() => setimg1(false)}
                                    onMouseEnter={() => setimg1(true)}
                                >
                                    <div className={`col-6  m-0 p-0 d-flex justify-content-center ${jacketShow ? "img_main" : "img_main1"}`}>
                                        {img1 ?
                                            <Image
                                                src={JacketLogo1}
                                                className="img-fluid "
                                            />
                                            :
                                            <Image
                                                src={JacketLogo}
                                                className="img-fluid "
                                            />
                                        }
                                    </div>
                                    <div className={`col-6 m-0 p-0 pe-2 pe-md-0 d-flex justify-content-center ${jacketShow ? "img_hover1" : "img_hover"}`}>
                                        <Image
                                            src={JacketLogo1}
                                            className="img-fluid "
                                        />
                                    </div>
                                    <div className='col-6 d-flex justify-content-center'>
                                        <p className='mt-3 pe-2 pe-md-0  text-center'>
                                            Jacket
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {console.log(hatFreeze, "lllllllll")}

                    {hatShow ?
                        <div className="container mt-5 mb-5 cont_size">
                            <div className="row mt-2">
                                {
                                    Hats.map((e, i) => {
                                        return (
                                            <div className='col-4 col-md-3 col-lg-2 d-flex justify-content-center mb-4' key={i}>
                                                <div className='card'>
                                                    <div className={`card_size rounded-top ${e.id == setCurrentBg ? 'card_fill' : ''} ${NewHat == true ? 'freeze' : ''} ${e.id == hatFreeze[i] ? 'freeze1' : ''}`}
                                                        ref={divEl}
                                                        onClick={() => {
                                                            if (NewHat == true) {
                                                                return null
                                                            }
                                                            if (NewHat == false) {
                                                                if (hatFreeze[i] === e.id) {
                                                                    return null
                                                                }
                                                                else {
                                                                    changeToSelected(i + 1)
                                                                }
                                                            }

                                                        }}

                                                    >
                                                        {/* {console.log("hatfrteeze",hatFreeze)} */}


                                                        <Image
                                                            className="img-fluid"
                                                            src={e.img}
                                                            onClick={() => {
                                                                if (NewHat == true) {
                                                                    return null
                                                                }
                                                                if (NewHat == false) {
                                                                    if (hatFreeze[i] === e.id) {
                                                                        return null
                                                                    }
                                                                    else {
                                                                        setTraits("Hat", e.name)
                                                                    }
                                                                }

                                                            }}

                                                        />

                                                    </div>
                                                    <div className="card-body border-top">
                                                        <h5 className="card-title text-center card_text">{e.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        : ""}
                    {hairShow ?
                        <div className="container mt-5 mb-5 cont_size">
                            <div className="row mt-2">
                                {
                                    Hairs.map((e, i) => {
                                        return (
                                            <div className='col-4 col-md-3 col-lg-2 d-flex justify-content-center mb-4' key={i}>
                                                <div className='card'>
                                                    <div className={`card_size  rounded-top ${e.id == setCurrentBg1 ? 'card_fill' : ''} ${NewHair == true ? 'freeze' : ''} ${e.id == hairFreeze[i] ? 'freeze1' : ''}`}
                                                        ref={divEl}


                                                        onClick={() => {
                                                            if (NewHair == true) {
                                                                return null
                                                            }
                                                            if (NewHair == false) {
                                                                if (hairFreeze[i] === e.id) {
                                                                    return null
                                                                }
                                                                else {
                                                                    changeToSelected1(i + 1)
                                                                }
                                                            }
                                                        }}
                                                    >
                                                        <Image
                                                            className="img-fluid"
                                                            src={e.img}
                                                            onClick={() => {
                                                                if (NewHair == true) {
                                                                    return null
                                                                }
                                                                if (NewHair == false) {
                                                                    if (hairFreeze[i] === e.id) {
                                                                        return null
                                                                    }
                                                                    else {
                                                                        setTraits("Hair", e.name)
                                                                    }
                                                                }
                                                            }}

                                                        />

                                                    </div>
                                                    <div className="card-body border-top">
                                                        <h5 className="card-title text-center card_text">{e.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        : ""}
                    {glaseShow ?
                        <div className="container mt-5 mb-5 cont_size">
                            <div className="row mt-2">
                                {
                                    Glasses.map((e, i) => {
                                        return (
                                            <div className='col-4 col-md-3 col-lg-2 d-flex justify-content-center mb-4' key={i}>
                                                <div className='card'>
                                                    <div className={`card_size rounded-top ${e.id == setCurrentBg2 ? 'card_fill' : ''} ${Newglasse == true ? 'freeze' : ''} ${e.id == glassFreeze[i] ? 'freeze1' : ''}`}
                                                        ref={divEl}

                                                        onClick={() => {
                                                            if (Newglasse == true) {
                                                                return null

                                                            }
                                                            if (Newglasse == false) {
                                                                if (glassFreeze[i] === e.id) {
                                                                    return null
                                                                }
                                                                else {
                                                                    changeToSelected2(i + 1)
                                                                }
                                                            }

                                                        }}
                                                    >
                                                        <Image
                                                            className="img-fluid "
                                                            src={e.img}
                                                            onClick={() => {
                                                                if (Newglasse == true) {
                                                                    return null
                                                                }
                                                                if (Newglasse == false) {
                                                                    if (glassFreeze[i] === e.id) {
                                                                        return null
                                                                    }
                                                                    else {
                                                                        setTraits("Glasse", e.name)
                                                                    }
                                                                }
                                                            }}
                                                        />

                                                    </div>
                                                    <div className="card-body border-top">
                                                        <h5 className="card-title text-center card_text">{e.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        : ""}
                    {earShow ?
                        <div className="container mt-5 mb-5 cont_size">
                            <div className="row mt-2">
                                {
                                    Ears.map((e, i) => {
                                        return (
                                            <div className='col-4 col-md-3 col-lg-2 d-flex justify-content-center mb-4' key={i}>
                                                <div className='card'>
                                                    <div className={`card_size rounded-top ${e.id == setCurrentBg3 ? 'card_fill' : ''} ${Ear == true ? 'freeze' : ''} ${e.id == earFreeze[i] ? 'freeze1' : ''}`}
                                                        ref={divEl}

                                                        onClick={() => {
                                                            if (Ear == true) {
                                                                return null
                                                            }
                                                            if (Ear == false) {
                                                                if (earFreeze[i] === e.id) {
                                                                    return null
                                                                }
                                                                else {
                                                                    changeToSelected3(i + 1)
                                                                }
                                                            }
                                                        }}

                                                    >

                                                        <Image
                                                            className="img-fluid "
                                                            src={e.img}
                                                            onClick={() => {
                                                                if (Ear == true) {
                                                                    return null
                                                                }
                                                                if (Ear == false) {
                                                                    if (earFreeze[i] === e.id) {
                                                                        return null
                                                                    }
                                                                    else {
                                                                        setTraits("Ear", e.name)
                                                                    }
                                                                }
                                                            }}

                                                        />

                                                    </div>
                                                    <div className="card-body border-top">
                                                        <h5 className="card-title text-center card_text">{e.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        : ""}
                    {noseShow ?
                        <div className="container mt-5 mb-5 cont_size">
                            <div className="row mt-2">
                                {
                                    Nose.map((e, i) => {
                                        return (
                                            <div className='col-4 col-md-3 col-lg-2 d-flex justify-content-center mb-4' key={i}>
                                                <div className='card'>
                                                    <div className={` card_size rounded-top ${e.id == setCurrentBg4 ? 'card_fill' : ''} ${NewNose == true ? 'freeze' : ''} ${e.id == noseFreeze[i] ? 'freeze1' : ''}`}
                                                        ref={divEl}
                                                        onClick={() => {
                                                            if (NewNose == true) {
                                                                return null
                                                            }
                                                            if (NewNose == false) {
                                                                if (noseFreeze[i] === e.id) {
                                                                    return null
                                                                }
                                                                else {
                                                                    changeToSelected4(i + 1)
                                                                }
                                                            }
                                                        }} >
                                                        <Image
                                                            className="img-fluid"
                                                            src={e.img}
                                                            onClick={() => {
                                                                if (NewNose == true) {
                                                                    return null
                                                                }
                                                                if (NewNose == false) {
                                                                    if (noseFreeze[i] === e.id) {
                                                                        return null
                                                                    }
                                                                    else {
                                                                        setTraits("Nose", e.name)
                                                                    }
                                                                }
                                                            }}

                                                        />

                                                    </div>
                                                    <div className="card-body border-top">
                                                        <h5 className="card-title text-center card_text">{e.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        : ""}
                    {jacketShow ?
                        <div className="container mt-5 mb-5 cont_size">
                            <div className="row mt-2">
                                {
                                    Jackets.map((e, i) => {
                                        return (
                                            <div className='col-4 col-md-3 col-lg-2 d-flex justify-content-center mb-4' key={i}>
                                                <div className='card'>
                                                    <div className={` card_size rounded-top ${e.id == setCurrentBg5 ? 'card_fill' : ''} ${NewJacket == true ? 'freeze' : ''} ${e.id == jacketFreeze[i] ? 'freeze1' : ''}`}
                                                        ref={divEl}

                                                        onClick={() => {
                                                            if (NewJacket == true) {
                                                                return null
                                                            }
                                                            if (NewJacket == false) {
                                                                if (jacketFreeze[i] === e.id) {
                                                                    return null
                                                                }
                                                                else {
                                                                    changeToSelected5(i + 1)
                                                                }
                                                            }
                                                        }} >

                                                        <Image
                                                            className="img-fluid"
                                                            src={e.img}
                                                            onClick={() => {
                                                                if (NewJacket == true) {
                                                                    return null
                                                                }
                                                                if (NewJacket == false) {
                                                                    if (jacketFreeze[i] === e.id) {
                                                                        return null
                                                                    }
                                                                    else {
                                                                        setTraits("Jacket", e.name)
                                                                    }
                                                                }
                                                            }}

                                                        />

                                                    </div>
                                                    <div className="card-body border-top">
                                                        <h5 className="card-title text-center card_text">{e.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        : ""}
                </div>

                : <div className=' container-fluid mt-5 '>
                    <div className='row  d-flex justify-content-center'>
                        <div className='col-md-6 mt-md-5'>
                            <p className="text-center wl_text1 mt-5">
                                Oops sorry you cant access this!
                            </p>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}
