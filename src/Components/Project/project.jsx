import React from "react";
import projectCSS from './../Project/project.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import 'swiper/css';

import user1 from './../../assets/webpage1.png';
import user2 from './../../assets/webpage2.png';
import user3 from './../../assets/webpage3.png';
import user4 from './../../assets/webpage4.png';

function Project() {
    return (
        <div className={`${projectCSS.ProjectWrapper} section`} id="project">
            <h2>My Project</h2>
            <p className={projectCSS.pera}>Here are a few of my projects.</p>

            <Swiper
                className={projectCSS.Swiper}
                spaceBetween={30}
                loop={true}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1100: { slidesPerView: 3 }
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={projectCSS.Project}>
                        <div className={projectCSS.profile}>
                            <img src={user1} alt="BucksBox website screenshot" className={projectCSS.users} />
                            <h3>BucksBox Website <span>BucksBox</span></h3>
                        </div>
                        <p>
                            Created the frontend for BucksBox’s intro site using HTML, Tailwind CSS, and Next.js.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={projectCSS.Project}>
                        <div className={projectCSS.profile}>
                            <img src={user2} alt="AI Authentication project screenshot" className={projectCSS.users} />
                            <h3>AI Authentication for Security <span>Purpose</span></h3>
                        </div>
                        <p>
                            Built a smart system for automating attendance using AI for better accuracy.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={projectCSS.Project}>
                        <div className={projectCSS.profile}>
                            <img src={user3} alt="PG Accommodation project screenshot" className={projectCSS.users} />
                            <h3>PG Accommodation for Karaikudi</h3>
                        </div>
                        <p>
                            Developed a PG finding app with search, filter, and booking features.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={projectCSS.Project}>
                        <div className={projectCSS.profile}>
                            <img src={user4} alt="Stall Booking project screenshot" className={projectCSS.users} />
                            <h3>Stall Booking Web Application</h3>
                        </div>
                        <p>
                            Created a web app using Java, PHP, and SQL for easy stall bookings.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Project;
