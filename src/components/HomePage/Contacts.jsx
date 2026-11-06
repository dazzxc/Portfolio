import Form from "../Form.jsx"
import styles from "./Contacts.module.css"
import Button from "../Button.jsx"

function Contacts() {

   return (
     <section id="Contacts" className={styles.contacts}>
      <div className={styles.wrapper}>
       <div className={styles.contactsText}>
         <h1>CONTACTS</h1>
         <h2>HAVE A PROJECT IN MIND?</h2>
         <p>
           I work with HTML, CSS, JavaScript, and React to create clean,
           responsive, and visually appealing websites. I pay attention to every
           detail, from smooth animations and intuitive layouts to performance
           and usability.
         </p>
         <p>
           Have an idea, a question, or just want to discuss a potential
           collaboration? Feel free to reach out via the form or Telegram. I'm
           always happy to connect
         </p>
         <h3>Let's build something great together.</h3>
         <div className={styles.btns}>
           <Button buttonText="GitHub" to="https://github.com/dazzxc" />
           <Button buttonText="Telegram" link="https://t.me/hell_session" />
         </div>
       </div>
       <Form />
      </div>
     </section>
   );
}

export default Contacts