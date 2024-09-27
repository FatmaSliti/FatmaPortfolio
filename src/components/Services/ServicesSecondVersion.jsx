import styles from '../Services/ServicesSecondVersion.module.css'
import Card from './Card/Card'

const items1 = ['HTML/CSS', 'JavaScript', 'React', 'Accessibility', 'Responsive Design']
const items2 = ['Server Setup', 'Database Integration', ' APIs', 'Deployment', 'Error Handling']
const items3 = ['Version Control (Git)', 'Command Line', 'Package Management', 'Debugging', 'Browser DevTools']
const items4 = ['Landing Pages', 'User Flow', 'Mobile App Design']


const ServicesSecondVersion = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.serviceContainer}`}>
                <Card className={styles.card} imageSrc='service-icon-1.png' title='Frontend' items={items1} />
                <Card className={styles.card} imageSrc='service-icon-2.png' title='Backend' items={items2} />
                <Card className={styles.card} imageSrc='service-icon-3.png' title='Configuration' items={items3} />
                <Card className={styles.card} imageSrc='service-icon-3.png' title='UI/UX Design' items={items4} />
            </div>
        </div>
    )
}

export default ServicesSecondVersion
