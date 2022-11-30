// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import { FaPlay } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import SlideLogo from '../img/top-movies.png';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MoviesSlideBox() {
    const {t, i18n} = useTranslation()

    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 1,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={true}
                // pagination={{ clickable: true }}
                // pagination={true}
                modules={[EffectCoverflow, Pagination,Navigation]}
                className="mySwiper mt-5"
            >
                <SwiperSlide className="d-flex align-items-start justify-content-around flex-column box_slide" style={{ width: "650px", height: "530px" }} id="slide1">
                    <img className="ms-5" src={SlideLogo} alt="" />
                    <div className="ms-5 desc">

                        <h1 className="text-white fw-bold text-uppercase">{t("boxslide.1")}</h1>
                        <p className="text-white my-4">{t("lorem.2")}</p>
                        <div className='d-flex box_btn_group' >
                            <Link to="/play" className='btn text-white rounded-0 btn_group  me-3'><span><FaPlay /> {t("buttons.1")}</span></Link>
                            <Link to="/favorite" className='btn text-white rounded-0 btn_group'><span><FaPlus /> {t("buttons.2")}</span></Link>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="d-flex align-items-start justify-content-around flex-column box_slide" style={{ width: "650px", height: "530px" }} id="slide2">
                    <img className="ms-5" src={SlideLogo} alt="" />
                    <div className="ms-5 desc">
                        <h1 className="text-white fw-bold text-uppercase">{t("boxslide.2")}</h1>
                        <p className="text-white my-4">{t("lorem.2")}.</p>
                        <div className='d-flex box_btn_group' >
                        <Link to="/play" className='btn text-white rounded-0 btn_group  me-3'><span><FaPlay /> {t("buttons.1")}</span></Link>
                        <Link to="/favorite" className='btn text-white rounded-0 btn_group'><span><FaPlus /> {t("buttons.2")}</span></Link>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="d-flex align-items-start justify-content-around flex-column box_slide" style={{ width: "650px", height: "530px" }} id="slide3">
                    <img className="ms-5" src={SlideLogo} alt="" />
                    <div className="ms-5 desc">

                        <h1 className="text-white fw-bold text-uppercase">{t("boxslide.3")}</h1>
                        <p className="text-white my-4">{t("lorem.2")}</p>
                        <div className='d-flex box_btn_group' >
                        <Link to="/play" className='btn text-white rounded-0 btn_group  me-3'><span><FaPlay /> {t("buttons.1")}</span></Link>
                        <Link to="/favorite" className='btn text-white rounded-0 btn_group'><span><FaPlus /> {t("buttons.2")}</span></Link>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="d-flex align-items-start justify-content-around flex-column box_slide" style={{ width: "650px", height: "530px" }} id="slide4">
                    <img className="ms-5" src={SlideLogo} alt="" />
                    <div className="ms-5 desc">

                        <h1 className="text-white fw-bold text-uppercase">{t("boxslide.4")}</h1>
                        <p className="text-white my-4">{t("lorem.2")}</p>
                        <div className='d-flex box_btn_group' >
                        <Link to="/play" className='btn text-white rounded-0 btn_group  me-3'><span><FaPlay /> {t("buttons.1")}</span></Link>
                        <Link to="/favorite" className='btn text-white rounded-0 btn_group'><span><FaPlus /> {t("buttons.2")}</span></Link>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="d-flex align-items-start justify-content-around flex-column box_slide" style={{ width: "650px", height: "530px" }} id="slide5">
                    <img className="ms-5" src={SlideLogo} alt="" />
                    <div className="ms-5 desc">

                        <h1 className="text-white fw-bold text-uppercase">{t("boxslide.5")}</h1>
                        <p className="text-white my-4">{t("lorem.2")}</p>
                        <div className='d-flex box_btn_group' >
                        <Link to="/play" className='btn text-white rounded-0 btn_group  me-3'><span><FaPlay /> {t("buttons.1")}</span></Link>
                        <Link to="/favorite" className='btn text-white rounded-0 btn_group'><span><FaPlus /> {t("buttons.2")}</span></Link>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
