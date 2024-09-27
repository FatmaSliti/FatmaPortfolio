import styles from '../Portfolio/PortfolioSecondVersion.module.css'
import ProjectCard from './Projects/ProjectCard'

const PortfolioSecondVersion = () => {
    return (
        <div className={styles.container}>
            <div className={styles.projects}>

                <ProjectCard imageSrc='project3.png' projectName='Elzero - HTML/CSS Template' field='Charity /Fund Raising /Non Profit' liveDemo='https://temp3-blue.vercel.app/' />

                <ProjectCard imageSrc='project2.png' projectName='Kasper - HTML/CSS Template' field='Charity /Fund Raising /Non Profit' liveDemo='https://html-css-template2-nzb1.vercel.app/' />

                <ProjectCard imageSrc='project1.png' projectName='IO - HTML/CSS Template' field='Charity /Fund Raising /Non Profit' liveDemo='https://temp-f96b.vercel.app/' />

                <ProjectCard imageSrc='project4.png' projectName='GPT3 - React Template' field='Charity /Fund Raising /Non Profit' liveDemo='https://gpt3-react-project-smoky.vercel.app/' />

                <ProjectCard imageSrc='project55.png' projectName='Easy Recipes - React Project' field='Charity /Fund Raising /Non Profit' liveDemo='https://react-easy-recipe-site.vercel.app/' />

                <ProjectCard imageSrc='project6.png' projectName='Meals - React Project' field='Charity /Fund Raising /Non Profit' liveDemo='https://food-order-app-kqam.vercel.app/' />
            </div>

        </div>
    )
}

export default PortfolioSecondVersion
