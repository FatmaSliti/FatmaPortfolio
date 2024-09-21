import Section from '../Section/Section'
import Card from './Card/Card'
import styles from '../Services/ServicesWrapper.module.css'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const items1 = ['HTML/CSS', 'JavaScript', 'React', 'Accessibility', 'Responsive Design']
const items2 = ['Server Setup', 'Database Integration', ' APIs', 'Deployment', 'Error Handling']
const items3 = ['Version Control (Git)', 'Command Line', 'Package Management', 'Debugging', 'Browser DevTools']

const ServicesWrapper = () => {
    return (
        <Section
            sectionTag="My Services"
            title="How I Turn My Clients' Ideas into Reality."
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
                pagination={{ clickable: true, dynamicBullets: true, bulletActiveClass: styles.activeBullet }}
            >
                <div className={`${styles.serviceContainer}`}>
                    <SwiperSlide>
                        <Card imageSrc='service-icon-1.png' title='Frontend' items={items1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageSrc='service-icon-3.png' title='Configuration' items={items3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageSrc='service-icon-2.png' title='Backend' items={items2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageSrc='service-icon-3.png' title='Configuration' items={items3} />
                    </SwiperSlide>
                </div>
            </Swiper>
        </Section>
    )
}

export default ServicesWrapper
