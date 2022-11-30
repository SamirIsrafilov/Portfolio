import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { FaPlay } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { t } from "i18next";

export default function BannerSlide() {
    AOS.init({
        duration: 1200,
    });

    return (
        <>
            <Swiper navigation={true}
             modules={[Navigation]} 
             className="mySwiper banner_slider">
                <SwiperSlide className="d-flex align-items-center" id="iron_door">
                    <div className="d-flex flex-column justify-content-center banner_slide_desc" data-aos="fade-up" >
                        <span className="text-dark badge bg-warning d-flex align-items-center justify-content-center fw-bold fs-5" id="new">{t("new.1")}</span>
                        <h1 className="text-white my-4 text-uppercase">{t("banner.1")}</h1>
                        <ul className="list-unstyled d-flex align-items-center">
                            <li className="text-white">2021</li>
                            <li className="text-white mx-3 rounded-pill ">+18</li>
                            <li className="text-white">2h 6m</li>
                        </ul>
                        <p className="text-white my-4">{t("lorem.1")}</p>
                        <div className='d-flex box_btn_group' >
                            <Link to="/play" className='btn text-white rounded-0 btn_group me-3'><span><FaPlay /> {t("buttons.1")}</span></Link>
                            <Link to="/favorite" className='btn text-white rounded-0 btn_group'><span><FaPlus /> {t("buttons.2")}</span></Link>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide className="d-flex align-items-center" id="the_earth">
                    <div className="d-flex flex-column justify-content-center banner_slide_desc" data-aos="fade-up" >
                        <span className="text-dark badge bg-warning d-flex align-items-center justify-content-center fw-bold fs-5" id="new">{t("new.1")}</span>
                        <h1 className="text-white my-4 text-uppercase">{t("banner.2")}</h1>
                        <ul className="list-unstyled d-flex align-items-center">
                            <li className="text-white">2021</li>
                            <li className="text-white mx-3 rounded-pill ">+18</li>
                            <li className="text-white">2h 6m</li>
                        </ul>
                        <p className="text-white my-4">{t("lorem.1")}</p>
                        <div className='d-flex box_btn_group' >
                        <Link to="/play" className='btn text-white rounded-0 btn_group me-3'><span><FaPlay /> {t("buttons.1")}</span></Link>
                        <Link to="/favorite" className='btn text-white rounded-0 btn_group'><span><FaPlus /> {t("buttons.2")}</span></Link>

                        </div>
                    </div>

                </SwiperSlide>


                <SwiperSlide className="d-flex align-items-center" id="city_dreams">
                    <div className="d-flex flex-column justify-content-center banner_slide_desc" data-aos="fade-up"  >
                        <span className="text-dark badge bg-warning d-flex align-items-center justify-content-center fw-bold fs-5" id="new">{t("new.1")}</span>
                        <h1 className="text-white my-4 text-uppercase">{t("banner.3")}</h1>
                        <ul className="list-unstyled d-flex align-items-center">
                            <li className="text-white">2021</li>
                            <li className="text-white mx-3 rounded-pill ">+18</li>
                            <li className="text-white">2h 6m</li>
                        </ul>
                        <p className="text-white my-4">{t("lorem.1")}</p>
                        <div className='d-flex box_btn_group' >
                        <Link to="/play" className='btn text-white rounded-0 btn_group me-3'><span><FaPlay /> {t("buttons.1")}</span></Link>
                        <Link to="/favorite" className='btn text-white rounded-0 btn_group'><span><FaPlus /> {t("buttons.2")}</span></Link>

                        </div>
                    </div>

                </SwiperSlide>
              
            
            </Swiper>
        </>
    );
}


