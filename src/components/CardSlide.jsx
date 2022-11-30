
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import moviedata from "../data/moviedata";
import SlideCard from "./SlideCard";
import { t } from "i18next";


export default function CardSlide() {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}
                pagination={{
                    clickable: true,

                }}
                // pagination={true}
                modules={[Pagination]}
                className="mySwiper card_slide"
            >
                {moviedata[8].map((fd, i) => (
                    <SwiperSlide key={i}>
                        <SlideCard img={fd.img} title={t(`movietitle.${i+49}`)} key={i} movies={fd} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
