import { Pagination } from 'swiper/modules';
import styles from '../Blog/Blog.module.css'
import Section from '../Section/Section'
import BlogCard from './Card/BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react';

const Blog = () => {
    return (
        <Section sectionTag='Blog Post' title='Latest Tips & Tricks' className={styles.section}>
            <Swiper
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1100: {
                        slidesPerView: 3,
                    },
                }}
                modules={Pagination}
                spaceBetween={50}
                slidesPerView={1}
                pagination
                loop
                className={styles.blogSWiper}
            >
                <SwiperSlide className={styles['swiper-slide']}>
                    {/* <BlogCard imageSrc='blog1.jpg' category='React' date='17 September, 2024' description='Reusable components simplify complex UIs—start small, think big.' className={styles['blog-card']} /> */}
                    <BlogCard imageSrc='blog1.jpg' category='React' date='17 October, 2024' description='Mastering the Basics: Building a Simple React App.' className={styles['blog-card']} />
                </SwiperSlide>
                <SwiperSlide className={styles['swiper-slide']}>
                    {/* <BlogCard imageSrc='blog2.jpg' category='CSS Modules' date='15 September, 2024' description='Scoped styles in React keep your components clean and maintainable.' className={styles['blog-card']} /> */}
                    <BlogCard imageSrc='blog2.jpg' category='CSS Modules' date='19 Mai, 2024' description='Mastering the Basics: Building a Simple React App.' className={styles['blog-card']} />
                </SwiperSlide>
                <SwiperSlide className={styles['swiper-slide']}>
                    <BlogCard imageSrc='blog3.jpg' category='React' date=' 26 December, 2024' description='Mastering the Basics: Building a Simple React App.' className={styles['blog-card']} />
                </SwiperSlide>
                <SwiperSlide className={styles['swiper-slide']}>
                    {/* <BlogCard imageSrc='blog2.jpg' category='CSS Modules' date='15 September, 2024' description='Scoped styles in React keep your components clean and maintainable.' className={styles['blog-card']} /> */}
                    <BlogCard imageSrc='blog2.jpg' category='CSS Modules' date='15 June, 2024' description='Mastering the Basics: Building a Simple React App.' className={styles['blog-card']} />
                </SwiperSlide>
            </Swiper >
        </Section>
    )
}

export default Blog
