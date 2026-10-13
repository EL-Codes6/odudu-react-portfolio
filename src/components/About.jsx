import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utilities/motion.js";
import { SectionWrapper } from "../HOC";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.4 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="title"
            className="w-16 h-16 object-contain"
            loading="lazy"
          />
          <h3 className="text-center text-white text-[20px] font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const serviceElements = services.map((service, index) => (
    <ServiceCard
      key={service.title}
      index={index}
      title={service.title}
      icon={service.icon}
    />
  ));

  return (
    <div id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.div
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        <motion.p className="mb-5">
          With 3 years of Frontend Engineering experience and deep expertise
          in HTML5, CSS3, Node.js, JavaScript (ES6), React.js, and three.js,
          alongside a strong command of tools like TypeScript, Material UI,
          SASS/SCSS, TailwindCSS, and version control systems (Git, GitHub).
        </motion.p>

        <motion.p className="mb-5">
          With proven success in developing and deploying scalable web
          applications and solutions, I bring a mix of technical excellence and
          creativity to every project. My approach is highly organized,
          detail-oriented, and always open to new ideas and innovative
          solutions.
        </motion.p>

        <motion.p>
          I thrive in collaborative environments and love to work in teams of
          talented professionals where I can bring immediate value and continue
          to learn and grow as we build the applications of the future.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        viewport={{ once: true }}
        whileInView="show"
        className="mt-20 flex flex-wrap gap-10"
      >
        {serviceElements}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
