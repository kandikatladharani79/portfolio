const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-800 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-5xl">
        <h2 className="text-5xl font-bold text-blue-400 mb-8">
          About Me
        </h2>

        <p className="text-lg leading-9 text-gray-300">
          Hi, I'm <span className="text-white font-semibold">Kandikatla Dharani</span>,
          a B.Tech Computer Science graduate passionate about Frontend Development.
          I enjoy building responsive, user-friendly and modern web applications
          using React.js, TypeScript and Tailwind CSS.
        </p>

        <p className="text-lg leading-9 text-gray-300 mt-6">
          I am a quick learner, passionate about solving problems, and always
          excited to learn new technologies. My goal is to become a professional
          Frontend Developer and contribute to real-world projects.
        </p>
      </div>
    </section>
  );
};

export default About;