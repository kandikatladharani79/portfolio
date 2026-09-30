const projects = [
  {
    title: "AI Gastric Cancer Detection",
    image: "/images/gastric.png",
    description:
      "Machine Learning project for detecting gastric cancer using image classification.",
    tech: "Python • TensorFlow • OpenCV",
    github: "https://github.com/YOUR_USERNAME/ai-gastric-cancer",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    description:
      "Personal portfolio built using React, TypeScript and Tailwind CSS.",
    tech: "React • TypeScript • Tailwind CSS",
    github: "https://github.com/YOUR_USERNAME/portfolio",
    demo: "#",
  },
  {
    title: "Weather App",
    image: "/images/weather.png",
    description: "Weather application using OpenWeather API.",
    tech: "React • API • CSS",
    github: "https://github.com/YOUR_USERNAME/weather-app",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-800 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-blue-400 mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 rounded-xl p-6 shadow-lg hover:scale-105 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-2xl font-bold text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {project.description}
              </p>

              <p className="mt-5 text-sm text-gray-400">
                {project.tech}
              </p>

              <div className="flex gap-4 mt-6">
                <div className="flex gap-4 mt-6">
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
  >
    GitHub
  </a>

  <a
    href={project.demo}
    target="_blank"
    rel="noreferrer"
    className="border border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500"
  >
    Live Demo
  </a>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;