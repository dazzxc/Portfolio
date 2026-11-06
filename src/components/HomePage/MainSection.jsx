import styles from './MainSection.module.css'
import Button from "../Button.jsx";

const MainSection = ({ title, description, buttonText,buttonTextAbout}) => {
   return (
     <section id="MainSection" className={styles.section}>
       <div className={styles.textBlock}>
         <h1 className={styles.title}>{title}</h1>
         <p className={styles.description}>{description}</p>
         <div className={styles.buttonsRow}>
           <Button buttonText={buttonText} />
           <Button buttonText={buttonTextAbout} />
         </div>
       </div>
       <div className={styles.visualBlock}></div>
     </section>
   );
}

export default MainSection;