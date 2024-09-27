import styles from '../Blog/BlogSecondVersion.module.css'
import BlogCard from './Card/BlogCard'

const BlogSecondVersion = () => {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                {/* <BlogCard imageSrc='blog1.jpg' category='React' date='17 September, 2024' description='Reusable components simplify complex UIs—start small, think big.' className={styles['blog-card']} /> */}
                <BlogCard imageSrc='blog1.jpg' category='React' date='17 October, 2024' description='Mastering the Basics: Building a Simple React App.' className={styles['blog-card']} />
                {/* <BlogCard imageSrc='blog2.jpg' category='CSS Modules' date='15 September, 2024' description='Scoped styles in React keep your components clean and maintainable.' className={styles['blog-card']} /> */}
                <BlogCard imageSrc='blog2.jpg' category='CSS Modules' date='19 Mai, 2024' description='Mastering the Basics: Building a Simple React App.' className={styles['blog-card']} />
                <BlogCard imageSrc='blog3.jpg' category='React' date=' 26 December, 2024' description='Mastering the Basics: Building a Simple React App.' className={styles['blog-card']} />
                {/* <BlogCard imageSrc='blog2.jpg' category='CSS Modules' date='15 September, 2024' description='Scoped styles in React keep your components clean and maintainable.' className={styles['blog-card']} /> */}
                {/* <BlogCard imageSrc='blog2.jpg' category='CSS Modules' date='15 June, 2024' description='Mastering the Basics: Building a Simple React App.' className={styles['blog-card']} /> */}
            </div>
        </div>
    )
}

export default BlogSecondVersion
