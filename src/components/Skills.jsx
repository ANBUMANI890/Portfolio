export default function Skills() {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React.js", "Redux", "Tailwind CSS",
    "Bootstrap", "Git", "GitHub", "REST APIs", "Postman", "Responsive Design"
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-800 to-gray-700 text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Skills
        </h3>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <li key={skill} className="bg-gray-900 px-4 py-2 rounded-full text-sm font-medium text-gray-300 shadow-lg">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}