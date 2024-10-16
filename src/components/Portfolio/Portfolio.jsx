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
            <Section sectionTag='Awesome Portfolio' title={<div className={styles.title}>Some stunning selective projects I have done.</div>} className={styles.portfolioSection}>
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
                            <ProjectCard imageSrc='stats.png' projectName='Frontend Mentor Challenge 1' field='See project ' liveDemo='https://frontend-mentor-challenges-z88h.vercel.app/' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProjectCard imageSrc='fourcard.png' projectName='Frontend Mentor Challenge 2' field='See project ' liveDemo='https://frontend-mentor-challenges-yiva.vercel.app/' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProjectCard imageSrc='chal1.png' projectName='Frontend Mentor Challenge 3' field='See project ' liveDemo='https://frontend-mentor-challenges-eight-liart.vercel.app/' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProjectCard imageSrc='curve.png' projectName='Frontend Mentor Challenge 4' field='See project ' liveDemo='https://frontend-mentor-challenges-12a6.vercel.app/' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProjectCard imageSrc='card.png' projectName='Frontend Mentor Challenge 5' field='See project ' liveDemo='https://frontend-mentor-challenges-96vi.vercel.app/' />
                        </SwiperSlide>
                        


                        <SwiperSlide>
                            <ProjectCard imageSrc='menu.png' projectName='JS menu app' field='See project ' liveDemo='https://javascript-projects-plum-six.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='modal.png' projectName='JS Modal app' field='See project ' liveDemo='https://javascript-projects-cji7.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='ques.png' projectName='JS Questions app' field='See project ' liveDemo='https://javascript-projects-r3pc.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='grocery.png' projectName='JS grocery app' field='See project ' liveDemo='https://javascript-projects-7387.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='scroll.png' projectName='JS scroll app' field='See project ' liveDemo='https://javascript-projects-i6ri.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='about.png' projectName='JS About app' field='See project ' liveDemo='https://javascript-projects-qug1.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='video.png' projectName='JS video app' field='See project ' liveDemo='https://javascript-projects-fnzd.vercel.app/' />
                        </SwiperSlide>




                        <SwiperSlide>
                            <ProjectCard imageSrc='project3.png' projectName='Elzero - HTML/CSS Template' field='See project ' liveDemo='https://temp3-blue.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='project2.png' projectName='Kasper - HTML/CSS Template' field='See project ' liveDemo='https://html-css-template2-nzb1.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='project1.png' projectName='IO - HTML/CSS Template' field='See project ' liveDemo='https://temp-f96b.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='todoapp.png' projectName='Meals - React Project' field='See project ' liveDemo='https://react-todo-list-app-gules.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='expense.png' projectName='Expense Tracker - React Project' field='See project ' liveDemo='https://expense-tracker-react-project-one.vercel.app/' />
                            {/* https://github.com/FatmaSliti/expense-tracker-react-project */}
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='project4.png' projectName='GPT3 - React Template' field='See project ' liveDemo='https://gpt3-react-project-smoky.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='project55.png' projectName='Easy Recipes - React Project' field='See project ' liveDemo='https://react-easy-recipe-site.vercel.app/' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard imageSrc='project6.png' projectName='Meals - React Project' field='See project ' liveDemo='https://food-order-app-kqam.vercel.app/' />
                        </SwiperSlide>
                        
                    </Swiper>
                    <div className={styles.swiperButtonPrev}>
                        <MdKeyboardDoubleArrowLeft />
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
