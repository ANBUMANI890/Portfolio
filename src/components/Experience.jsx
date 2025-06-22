export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-gray-800 to-gray-700 text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Experience
        </h3>
        <div className="space-y-8">
          <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg">
            <h4 className="text-xl sm:text-2xl font-bold text-purple-400">Frontend Developer - Cognizant</h4>
            <p className="text-sm sm:text-base text-gray-400">June 2025 – Present | Chennai</p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Collaborating with cross-functional teams to build and maintain client-facing UIs using React.js.</li>
              <li>Contributing to reusable component libraries to streamline development across multiple projects.</li>
              <li>Consuming REST APIs and handling dynamic rendering using Context API and Redux.</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg">
            <h4 className="text-xl sm:text-2xl font-bold text-purple-400">Frontend Developer - eClerx (PayPal)</h4>
            <p className="text-sm sm:text-base text-gray-400">February 2022 – June 2025 | Remote</p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Developed and maintained 100+ PayPal web pages using React, increasing engagement by 40%.</li>
              <li>Optimized state management with React Hooks, Context API & Redux, cutting re-renders by 25%.</li>
              <li>Integrated RESTful APIs to improve data flow and UI responsiveness by 30%.</li>
              <li>Led the migration from legacy forms to page-level handlers, improving data accuracy and performance.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}