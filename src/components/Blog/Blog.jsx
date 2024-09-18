import styles from '../Blog/Blog.module.css'
import Section from '../Section/Section'
import BlogCard from './Card/BlogCard'

const Blog = () => {
    return (
        <Section sectionTag='Blog Post' title='Latest Tips & Tricks' className={styles.section}>
            <BlogCard imageSrc='blog1.jpg' category='React' date='17 September, 2024' description='Reusable components simplify complex UIs—start small, think big.' />
            <BlogCard imageSrc='blog2.jpg' category='CSS Modules' date='15 September, 2024' description='Scoped styles in React keep your components clean and maintainable.' />
            <BlogCard imageSrc='blog3.jpg' category='React' date=' 07 February, 2024' description='Mastering the Basics: Building a Simple React App.' />
        </Section>
    )
}

export default Blog
