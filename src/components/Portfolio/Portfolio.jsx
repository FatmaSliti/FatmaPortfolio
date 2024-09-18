// import styles from '../Portfolio/Portfolio.module.css'
// import Section from '../Section/Section'
// import ProjectCard from './Projects/ProjectCard'
// import { Swiper, SwiperSlide } from 'swiper/react';

// import { Navigation } from 'swiper/modules';


// const Portfolio = () => {
//     return (
//         <>
//             <Section sectionTag='Awesome Portfolio' title='My Complete Projects' >
//                 <div className={styles.swiperContainer}>
//                     <Swiper
//                         modules={[Navigation]}
//                         spaceBetween={50}
//                         slidesPerView={2}
//                         navigation={{
//                             nextEl: `.${styles.swiperButtonNext}`,
//                             prevEl: `.${styles.swiperButtonPrev}`,
//                         }}
//                     >
//                         <SwiperSlide>
//                             <ProjectCard imageSrc='project-slider-img-1.png' projectName='Givest - Non Profit PSD Template' field='Chairty /Fund Rising /Non Profit' />
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <ProjectCard imageSrc='project-slider-img-2.png' projectName='Givest - Non Profit PSD Template' field='Chairty /Fund Rising /Non Profit' />
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <ProjectCard imageSrc='project-slider-img-1.png' projectName='Givest - Non Profit PSD Template' field='Chairty /Fund Rising /Non Profit' />
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <ProjectCard imageSrc='project-slider-img-2.png' projectName='Givest - Non Profit PSD Template' field='Chairty /Fund Rising /Non Profit' />
//                         </SwiperSlide>
//                     </Swiper>
//                 </div>
//                 <div className={`${styles.navigationButton} ${styles.swiperButtonPrev}`}></div>
//                 <div className={`${styles.navigationButton} ${styles.swiperButtonNext}`}></div>
//             </Section>
//         </>
//     )
// }

// export default Portfolio
import styles from './Portfolio.module.css'
import Section from '../Section/Section'
import ProjectCard from './Projects/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


const Portfolio = () => {
    return (
        <>
            <Section sectionTag='Awesome Portfolio' title='My Complete Projects'>
                <div className={styles.swiperContainer}>
                    <Swiper
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{
                            nextEl: `.${styles.swiperButtonNext}`,
                            prevEl: `.${styles.swiperButtonPrev}`,
                        }}
                    >
                        <SwiperSlide>
                            <ProjectCard imageSrc='project3.png' projectName='Elzero - HTML/CSS Template' field='Charity /Fund Raising /Non Profit' liveDemo='https://temp3-blue.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='project2.png' projectName='Kasper - HTML/CSS Template' field='Charity /Fund Raising /Non Profit' liveDemo='https://html-css-template2-nzb1.vercel.app/'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='project1.png' projectName='IO - HTML/CSS Template' field='Charity /Fund Raising /Non Profit' liveDemo='https://temp-f96b.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='project4.png' projectName='GPT3 - React Template' field='Charity /Fund Raising /Non Profit' liveDemo='https://gpt3-react-project-smoky.vercel.app/'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='project55.png' projectName='GPT3 - React Template' field='Charity /Fund Raising /Non Profit' liveDemo='https://react-easy-recipe-site.vercel.app/'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='project6.png' projectName='GPT3 - React Template' field='Charity /Fund Raising /Non Profit' liveDemo='https://food-order-app-kqam.vercel.app/'/>
                        </SwiperSlide>
                    </Swiper>
                    <div className={styles.swiperButtonPrev}>
                        <MdKeyboardDoubleArrowLeft  />
                    </div>
                    <div className={styles.swiperButtonNext}>
                        <MdKeyboardDoubleArrowRight />
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Portfolio;
