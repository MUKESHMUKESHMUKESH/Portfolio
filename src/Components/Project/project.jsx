import React from "react";
import projectCSS from './../Project/project.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Ensure this line is present

import 'swiper/css';

import user1 from './../../assets/webpage1.png';
import user2 from './../../assets/webpage2.png';
import user3 from './../../assets/webpage3.png';

function Project() {
    return (
                  <div className={`${projectCSS.ProjectWrapper} section`}>
                          <h2>My Education</h2>
                          <p className={projectCSS.pera}>Hai This is</p>

            <Swiper
                className={projectCSS.Swiper}
                spaceBetween={30}
                loop={true}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false // ✅ Keeps autoplay active after user interaction
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                modules={[Autoplay]} // ✅ Ensure this line is included
            >
                <SwiperSlide>
                    <div className={projectCSS.Project}>
                        <div className={projectCSS.profile}>
                            <img src={user1} alt="BucksBox website screenshot" className={projectCSS.users} />
                            <h3>BucksBox Website <span>BucksBox</span></h3>
                        </div>
                        <p>This is a project session</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={projectCSS.Project}>
                        <div className={projectCSS.profile}>
                            <img src={user2} alt="AI Authentication project screenshot" className={projectCSS.users} />
                            <h3>AI Authentication for Security <span>Security Purpose</span></h3>
                        </div>
                        <p>This is a project session</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={projectCSS.Project}>
                        <div className={projectCSS.profile}>
                            <img src={user3} alt="PG Accommodation project screenshot" className={projectCSS.users} />
                            <h3>PG Accommodation for Karaikudi</h3>
                        </div>
                        <p>This is a project session</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={projectCSS.Project}>
                        <div className={projectCSS.profile}>
                            <img src={user3} alt="PG Accommodation project screenshot" className={projectCSS.users} />
                            <h3>PG Accommodation for Karaikudi</h3>
                        </div>
                        <p>This is a project session</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Project;
