import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../HOC";
import { slideIn } from "../utilities/motion";

emailjs.init("FclYi4ygV4cASczlo");

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => {
      return {...prev, [name]: value}
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!Object.values(form).every((value) => value.trim())) {
      setFeedback("Please complete all fields before sending.");
      return;
    }

    setLoading(true);
    setFeedback("");
    try {
      await emailjs.send(
        "service_fmlyssf",
        "template_0w2pt7f",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          number: form.number,
          message: form.message,
        }
      );
      setFeedback("Message sent successfully. Thank you for reaching out!");
      setForm({
        name: "",
        email: "",
        subject: "",
        number: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      const reason = error?.text || error?.message || `HTTP ${error?.status || "unknown error"}`;
      setFeedback(`Message could not be sent: ${reason}`);
    } finally {
      setLoading(false);
    }
  }
 
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white">Name</span>
            <input 
              type="text" 
              name="name" 
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white">Email</span>
            <input 
              type="email" 
              name="email" 
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white">Subject</span>
            <input
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white">Phone number</span>
            <input
              type="tel"
              name="number"
              required
              value={form.number}
              onChange={handleChange}
              placeholder="Phone number"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white">Message</span>
            <textarea
              rows={7}
              name="message" 
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
           type="submit"
           disabled={loading}
           className="bg-tertiary py-4 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {feedback && <p role="status" className="text-white">{feedback}</p>}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.25, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")