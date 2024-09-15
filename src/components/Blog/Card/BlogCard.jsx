import Button from '../../UI/Button';
import styles from '../Card/BlogCard.module.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BlogCard = ({imageSrc, category, date, description}) => {
    return (
        <div className={styles.container}>
            <div className="imageWrapper">
                <img src={imageSrc} alt="" className="image" />
            </div>
            <div className={styles.content}>
                <span className={styles.category}>{category}</span>
                <span className={styles.date}>{date}</span>
                <p className={styles.description}>{description}</p>
            </div>
            {/* <div>
                <button>Read More</button>
                <MdKeyboardDoubleArrowRight  style={{color: 'white'}}/>
            </div> */}
            <Button className={styles.button} label='Read More' icon={<MdKeyboardDoubleArrowRight style={{ color: 'white' }} />} />
        </div>
    )
}

export default BlogCard
