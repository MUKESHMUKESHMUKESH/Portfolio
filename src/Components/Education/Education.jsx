import React from "react";
import educationCSS from './../Education/Education.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Autoplay} from "swiper/modules";


function Education () {
    return (
        <div className={`${educationCSS.educationWrapper} section`}id="education">
            <h2>My Education</h2>
            <p className={educationCSS.pera}>
A dedicated Computer Science graduate with a strong foundation in programming, always eager to learn and take on new challenges in the tech world.
</p>

            <Swiper
                className={educationCSS.Swiper}
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    }
                }}
                loop={true}
                autoplay={{
                    delay:2500,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={`${educationCSS.Card} ${educationCSS.Card1}`}>
                        <div className={educationCSS.content}>
                            <h1>10th Grade </h1>
                            <h2>Maharishi vidya Manddir</h2>
                            <h3>2016-2017</h3>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={`${educationCSS.Card} ${educationCSS.Card2}`}>
                        <div className={educationCSS.content}>
                           <h1>12th Board</h1>
                            <h2>Maharishi vidya Manddir</h2>
                            <h3>2018-2019</h3>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={`${educationCSS.Card} ${educationCSS.Card3}`}>
                        <div className={educationCSS.content}>
                            <h1>B.E. CSE</h1>
                            <h2>K Ramakrishnan College of Technology</h2>
                            <h3>2019-2023</h3>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={`${educationCSS.Card} ${educationCSS.Card4}`}>
                        <div className={educationCSS.content}>
                            <h1>MBA (Distance Education)</h1>
                            <h2>Alagappa University</h2>
                            <h3>2024-2026</h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Education;
