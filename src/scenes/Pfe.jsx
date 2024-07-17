import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const PFE = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className=" mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">End Of Studies Project</span>
            <hr />
            <div className="mx-2"></div>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 font-playfair font-semibold text-2xl">
          On my End Of Studies Project, I had the incredible opportunity to work
          with a professional development team on a real-world project. We
          focused on creating a data-driven web job platform, leveraging a
          variety of tools and technologies such as Cassandra, Postgres,
          Next.js, JavaScript, axios, Tailwind CSS, Spring Boot, Microservices,
          SonarQube, Zustand, JWT, Keycloak, Spring Security, Swagger,
          RestTemplate, and FeignClient. This hands-on experience not only honed
          my technical skills but also taught me the importance of
          collaboration, agile methodologies, and the value of producing a
          high-quality product that meets real-world demands.
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>
      </div>
      <div className="ml-11">
        <img src={`../assets/image2.png`} alt={"image"} />
      </div>
    </section>
  );
};

export default PFE;
