import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 flex items-center justify-center"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
  src="/images/profile.jpg"
  alt="Dharani"
  className="w-44 h-44 rounded-full mx-auto border-4 border-blue-500 shadow-2xl mb-8 object-cover"
/>
        <p className="text-blue-400 text-xl">Hello 👋</p>

        <h1 className="text-7xl font-extrabold text-white mt-5">
  Kandikatla Dharani
</h1>

<h2 className="text-4xl font-semibold text-blue-400 mt-6">
  Frontend Developer
</h2>

<p className="text-gray-400 mt-8 max-w-2xl mx-auto leading-8 text-lg">
  Passionate Frontend Developer skilled in React.js, TypeScript,
  Tailwind CSS and JavaScript. I build responsive and modern web
  applications with clean UI and good user experience.
</p>

      <a
  href="/Resume.pdf"
  download
  className="inline-block mt-10 bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 shadow-lg"
>
  Download Resume
</a>

      <div className="flex justify-center gap-8 mt-10 text-4xl text-white">

  <a
    href="https://github.com/kandikatladharani79"
    target="_blank"
    rel="noreferrer"
    className="hover:text-blue-400 hover:scale-125 transition duration-300"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/YOUR_LINKEDIN"
    target="_blank"
    rel="noreferrer"
    className="hover:text-blue-400 hover:scale-125 transition duration-300"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:yourmail@gmail.com"
    className="hover:text-blue-400 hover:scale-125 transition duration-300"
  >
    <FaEnvelope />
  </a>

</div>
      </motion.div>
    </section>
  );
};

export default Hero;