export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          About Me
        </h3>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify">
          I’m a passionate Frontend Developer driven by the art of creating seamless, user-centric digital experiences. 
          With over three years of experience in crafting scalable web interfaces using React, JavaScript, HTML5, and CSS3, 
          I find deep satisfaction in turning complex problems into elegant, intuitive solutions.
        </p>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify mt-6">
          Beyond code, I value clarity, design, and purpose in everything I build. I have a keen interest in performance optimization, 
          modern UI/UX trends, and crafting interfaces that not only work well — but feel right.
        </p>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify mt-6">
          Coming from a humble farming background, I learned the values of patience, persistence, and hard work from my father. 
          These principles ground me and shape my approach to both life and technology.
        </p>
      </div>
    </section>
  );
}