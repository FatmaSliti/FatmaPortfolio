import styles from '../Portfolio/Portfolio.module.css'
import Section from '../Section/Section'
import ProjectCard from './Projects/ProjectCard'

const Portfolio = () => {
    return (
        <Section sectionTag='Awesome Portfolio' title='My Complete Projects' >
            <div className={styles.projects}>
                <div>
                    <ProjectCard imageSrc='project-slider-img-1.png' projectName='Givest - Non Profit PSD Template' field='Chairty /Fund Rising /Non Profit' />
                </div>
                <div>
                    <ProjectCard imageSrc='project-slider-img-2.png' projectName='Givest - Non Profit PSD Template' field='Chairty /Fund Rising /Non Profit' />
                </div>
            </div>
        </Section>
    )
}

export default Portfolio
