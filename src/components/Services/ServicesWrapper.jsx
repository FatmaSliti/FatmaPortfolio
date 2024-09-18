import Section from '../Section/Section'
import Card from './Card/Card'
import styles from '../Services/ServicesWrapper.module.css'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const items1 = ['Landing Pages', 'User Flow', 'Wireframing', 'Prototyping', 'Mobile App Design']
const items2 = ['HTML/CSS', 'JavaScript', 'Animation', 'WordPress', 'React']
const items3 = ['Character Design', 'Icon Set', ' Illustration Guide', 'Illustration Set', 'Motion Graphic']

const ServicesWrapper = () => {
    return (
        <Section
            sectionTag="My Services"
            title="Service Provide For My Clients."
        >
            <Swiper
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1100: {
                        slidesPerView:3,
                    },
                }}
                modules={[Pagination]}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                className={styles['swiper-pagination-bullet']}
                pagination={{ clickable: true, bulletActiveClass: styles.bullets }}
            >
                <div className={`${styles.serviceContainer}`}>
                    <SwiperSlide>
                        <Card imageSrc='service-icon-1.png' title='UI/UX Design' items={items1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageSrc='service-icon-2.png' title='Development' items={items2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageSrc='service-icon-3.png' title='Illustration' items={items3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageSrc='service-icon-3.png' title='Illustration' items={items3} />
                    </SwiperSlide>
                </div>
            </Swiper>
        </Section>
    )
}

export default ServicesWrapper
