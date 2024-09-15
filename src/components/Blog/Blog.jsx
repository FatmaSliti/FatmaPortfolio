import styles from '../Blog/Blog.module.css'
import Section from '../Section/Section'
import BlogCard from './Card/BlogCard'

const Blog = () => {
    return (
        <Section sectionTag='Blog Post' title='Latest Tips & Tricks' className={styles.section}>
            <BlogCard imageSrc='blog-feed-img-1.png' category='Business' date=' 07 February, 2024' description='Dont wait until you officially started business to line these up.' />
            <BlogCard imageSrc='blog-feed-img-2.png' category='Business' date=' 07 February, 2024' description='Dont wait until you officially started business to line these up.' />
            <BlogCard imageSrc='blog-feed-img-3.png' category='Business' date=' 07 February, 2024' description='Dont wait until you officially started business to line these up.' />
        </Section>
    )
}

export default Blog
