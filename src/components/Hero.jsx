import profileImg from '../assets/profile.jpg';
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl w-full">
        <img
          src={profileImg}
          alt="Anbumani"
          className="w-60 h-60 rounded-full mx-auto mb-6 border-4 border-purple-600 shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Hi, I’m Anbumani
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          React Developer | Frontend Engineer | UI/UX Specialist <br /> Passionate about building beautiful, performant, and accessible web experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition duration-300">Projects</a>
          <a href="#experience" className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition duration-300">Experience</a>
          <a href="#education" className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition duration-300">Education</a>
          <a href="#skills" className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition duration-300">Skills</a>
          <a href="#contact" className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition duration-300">Contact Me</a>
        </div>
      </div>
    </section>
  );
}