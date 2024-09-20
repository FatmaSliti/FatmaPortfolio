// import styles from '../Info/ClientForm'

// const ClientForm = () => {
//     return (

//         <form>
//             <div className={styles.formGroup}>
//                 <label htmlFor="">Name</label>
//                 <input type="text" name="" id="" />
//             </div>
//             <div className={styles.formGroup}>
//                 <label htmlFor="">Email</label>
//                 <input type="text" name="" id="" />
//             </div>
//             <div className={styles.formGroup}>
//                 <label htmlFor="">Project Name</label>
//                 <input type="text" name="" id="" />
//             </div>
//             <div className={styles.formGroup}>
//                 <label htmlFor="">Project Description</label>
//                 <textarea cols="30" rows="10"></textarea>
//             </div>
//             <div className={styles.formGroup}>
//                 <label htmlFor="">Budget</label>
//                 <input type="number" />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// export default ClientForm
import styles from '../Info/ClientForm.module.css';

const ClientForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="projectName">Project Name</label>
                <input type="text" name="projectName" id="projectName" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="projectDescription">Project Description</label>
                <textarea name="projectDescription" id="projectDescription" cols="30" rows="10"></textarea>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="budget">Budget</label>
                <input type="number" name="budget" id="budget" />
            </div>
            <div className={styles.buttonWrapper}>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default ClientForm;
