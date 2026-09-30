const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-blue-400 mb-14">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-8 rounded-xl text-center shadow-lg hover:scale-105 hover:bg-blue-600 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;