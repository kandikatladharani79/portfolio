import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-800 text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-blue-400 mb-8">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-10">
          I'm looking for Frontend Developer opportunities.
          Feel free to contact me.
        </p>

        <div className="space-y-6 text-xl">

          <p className="flex justify-center items-center gap-3">
            <FaEnvelope />
            kandikatladharani12@gmail.com
          </p>

          <p className="flex justify-center items-center gap-3">
            <FaGithub />
            github.com/dharani123
          </p>

          <p className="flex justify-center items-center gap-3">
            <FaLinkedin />
            https://www.linkedin.com/in/kandikatla-dharani-776037295
          </p>

        </div>
      </div>
    </section>
  );
};

export default Contact;