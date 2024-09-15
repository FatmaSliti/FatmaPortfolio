import Section from '../Section/Section'
import Card from './Card/Card'
import styles from '../Services/ServicesWrapper.module.css'


const items1 = ['Landing Pages', 'User Flow', 'Wireframing', 'Prototyping', 'Mobile App Design']
const items2 = ['HTML/CSS', 'JavaScript', 'Animation', 'WordPress', 'React']
const items3 = ['Character Design', 'Icon Set', ' Illustration Guide', 'Illustration Set', 'Motion Graphic']


const ServicesWrapper = () => {
    return (
        <Section
            sectionTag="My Services"
            title="Service Provide For My Clients."
        >
            <div className={`${styles.serviceContainer} service-box-single-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev`}>
                <Card imageSrc='service-icon-1.png' title='UI/UX Design' items={items1} />
                <Card imageSrc='service-icon-2.png' title='Development' items={items2} />
                <Card imageSrc='service-icon-3.png' title='Illustration' items={items3} />
            </div>
        </Section>
    )
}

export default ServicesWrapper
