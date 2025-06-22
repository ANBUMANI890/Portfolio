export default function Education() {
  return (
    <section id="education" className="py-16 bg-gradient-to-b from-gray-800 to-gray-700text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Education
        </h3>
        <div className="space-y-8">
          <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg">
            <h4 className="text-xl sm:text-2xl font-bold text-purple-400">B.Sc. in Computer Science</h4>
            <p className="text-sm sm:text-base text-gray-400">Thiruvalluvar University, Vellore — 2017 – 2021</p>
            <p className="text-gray-300 mt-4">
              Graduated with 85% overall. Built foundational knowledge in data structures, algorithms, and web development.
            </p>
          </div>
          <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg">
            <h4 className="text-xl sm:text-2xl font-bold text-purple-400">Full Stack Development</h4>
            <p className="text-sm sm:text-base text-gray-400">Board Infinity — September 2022</p>
            <p className="text-gray-300 mt-4">
              Completed full stack training covering HTML, CSS, JavaScript, React, ExpressJS, NodeJS, MongoDB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}