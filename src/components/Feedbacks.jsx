import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utilities/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const roleText = [designation, company].filter(Boolean).join(" at ");

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] h-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className=" flex flex-col justify-between h-[250px]">
        <p className="text-white tracking-wider text-[12px]">{testimonial}</p>
        <div className="flex justify-between items-center gap-1">
          <div className=" flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            {roleText && (
              <p className="mt-1 text-secondary text-[12px]">{roleText}</p>
            )}
          </div>

          <img
            src={image}
            alt={`feedback-by-${name}`}
            loading="lazy"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const testimonialCards = testimonials.map((testimonial, index) => (
    <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
  ));

  return (
    <div className="mt-12 bg-black-100 rounded-[20px] h-full">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            You don't have to take my word for it!
          </p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex justify-center flex-wrap gap-7`}
      >
        {testimonialCards}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
