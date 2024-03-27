import img1 from '../public/HomePage/abe.png'
import style from "../styles/HomePage.module.css";

export default function Abc() {
   
    return (
        <>

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >

                <div className={`carousel-inner  ${style.cr_text} ${style.cr_card}`}>
                    <div className=''>
                        <div className="carousel-item h-100 active text-start mt-2 ms-3">
                            <div className="px-5 d-block mt-3 " alt="..." >
                                <ul>
                                    <li>
                                        Fun & engaging project keeping
                                        Handlers engaged with plent of
                                        room to flesh out lore in the
                                        future (e.g. burning Knowlytes,
                                        3party to hunt them)
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className={`carousel-item h-100 text-start px-3  mt-5 mt-md-5 ms-3`}>
                            <div className="d-block " alt="..." >
                                <ul>
                                    <li>
                                        Access to $KNOWledge Token
                                        Raffles for unique Clothing Items
                                    </li>
                                </ul>


                            </div>
                        </div>
                        <div className="carousel-item h-100 text-start px-3 mt-5 mt-md-5 ms-3">
                            <div className="d-block " alt="..." >
                                <ul>
                                    <li>
                                        Augmented Reality Transmissions
                                        (Star Wars Style) to receive
                                        instructions
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={`active ${style.cr_bt}`} aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={`${style.cr_bt}`} aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={`${style.cr_bt}`} aria-label="Slide 3"></button>
                </div>

            </div>
        </>
    )
}