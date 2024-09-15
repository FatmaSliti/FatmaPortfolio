import styles from '../Companies/Companies.module.css'
import Section from '../Section/Section'
import CompanyCard from './Card/CompanyCard'

const Companies = () => {
    return (
        <Section sectionTag='Favourite Clients' title='Work With Trusted Comapny.' >
            <div className={styles.container}>
                <CompanyCard imageSrc='company-logo-11.png' />
                <CompanyCard imageSrc='company-logo-11.png' />
                <CompanyCard imageSrc='company-logo-11.png' />
                <CompanyCard imageSrc='company-logo-11.png' />
                {/* <CompanyCard imageSrc='counterup-icon-22.png' />
                <CompanyCard imageSrc='counterup-icon-33.png' />
                <CompanyCard imageSrc='counterup-icon-4.png' /> */}
            </div>
        </Section>
    )
}

export default Companies
