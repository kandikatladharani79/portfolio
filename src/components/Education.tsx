const education = [
  {
    degree: "B.Tech - Computer Science & Engineering",
    college: "Sri Vasavi Engineering College",
    year: "2022 - 2026",
    score: "78.84%",
  },
  {
    degree: "Intermediate (MPC)",
    college: "Sai Teja Junior College",
    year: "2020 - 2022",
    score: "73.10%",
  },
  {
    degree: "SSC",
    college: "ZPP High School",
    year: "2019 - 2020",
    score: "89.33%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-blue-400 mb-14">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.degree}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold text-blue-400">
                {item.degree}
              </h3>

              <p className="text-lg mt-2">{item.college}</p>

              <div className="flex justify-between mt-4 text-gray-300">
                <span>{item.year}</span>
                <span>{item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;