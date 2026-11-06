import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Form.module.css";
import Button from "./Button.jsx";

function Form() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const email = formData.get("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Wrong Email");
      return;
    }
    setIsSending(true);
    setStatus(null);
    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus({ type: "success", text: "Message sent succes!" });
          form.reset(); 
          setIsSending(false);
        },
        (error) => {
          console.error("Error EmailJS:", error);
          setStatus({
            type: "error",
            text: "Send Error.Try Later!",
          });
          setIsSending(false);
        },
      );
  };

  return (
    <div className={styles.containerForm}>
      <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label>ASK YOUR QUESTION</label>

          <label htmlFor="name">
            Your Name
            <input
              className={styles.name}
              id="name"
              name="name"
              type="text"
              placeholder="Write your name"
              required
            />
          </label>

          <label htmlFor="email">
            Your Email
            <input
              className={styles.email}
              id="email"
              name="email"
              type="email"
              placeholder="Write your email"
              required
            />
          </label>

          <label htmlFor="textArea">
            Write your question
            <textarea
              className={styles.area}
              id="textArea"
              name="textarea"
              placeholder="Ask a question"
              rows="3"
              required
            />
          </label>

          {status && (
            <p
              style={{
                color: status.type === "success" ? "#4caf50" : "#f44336",
                marginTop: "10px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {status.text}
            </p>
          )}

          <div className={styles.submitButton}>
            <Button
              buttonText={isSending ? "Отправка..." : "Отправить"}
              type="submit"
              disabled={isSending}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
