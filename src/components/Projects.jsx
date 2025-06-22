export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Projects
        </h3>
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <li className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-purple-400">
              <a
                href="https://github.com/ANBUMANI890/Full_Stack_Ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Full-Stack E-commerce Platform
              </a>
            </h4>
            <p className="text-gray-300 mt-4">
              End-to-end shopping experience built on the MERN stack—product catalogue, JWT-secured auth, Stripe checkout, and an admin dashboard for inventory & orders.
            </p>
            <p className="text-sm text-gray-400 mt-2">Tech: React, Node.js, Express, MongoDB, JWT, Tailwind CSS</p>
          </li>
          <li className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-purple-400">
              <a
                href="https://github.com/ANBUMANI890/My-Custom-Blog"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                My Custom Blog Engine
              </a>
            </h4>
            <p className="text-gray-300 mt-4">
              Lightweight blogging platform with Markdown support, live preview, post CRUD, and client-side routing—designed for swift content creation and SEO-friendly rendering.
            </p>
            <p className="text-sm text-gray-400 mt-2">Tech: React, Context API, Express, MongoDB, Markdown</p>
          </li>
          <li className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-purple-400">
              <a
                href="https://github.com/ANBUMANI890/Movie-app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Movie Explorer
              </a>
            </h4>
            <p className="text-gray-300 mt-4">
              Single-page app that consumes the IMDb/OMDb API to let users search, filter, and bookmark movies—showing trailers, posters, and ratings in real time.
            </p>
            <p className="text-sm text-gray-400 mt-2">Tech: React, Axios, OMDb API, Tailwind CSS</p>
          </li>
          <li className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-purple-400">
              <a
                href="https://github.com/ANBUMANI890/Covid-19-Statistics"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                COVID-19 Stats Dashboard
              </a>
            </h4>
            <p className="text-gray-300 mt-4">
              Real-time dashboard that visualizes global & per-country COVID-19 case data with instant search and clean, responsive charts for at-a-glance insights.
            </p>
            <p className="text-sm text-gray-400 mt-2">Tech: React, Public COVID API, Chart.js, CSS Modules</p>
          </li>
          <li className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-purple-400">
            <a
                href="https://paypal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
              Dynamic PayPal Web Pages
              </a></h4>
            <p className="text-gray-300 mt-4">
              Developed 100+ production pages for PayPal at eClerx, boosting performance and consistency across the web interface.
            </p>
            <p className="text-sm text-gray-400 mt-2">Tech: React, JavaScript, CSS, REST APIs</p>
          </li>
          <li className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-purple-400">Portfolio Website</h4>
            <p className="text-gray-300 mt-4">
              Designed and built this very portfolio with React and Tailwind to showcase my work in a performant, mobile-first way.
            </p>
            <p className="text-sm text-gray-400 mt-2">Tech: React, Tailwind CSS, Vite</p>
          </li>
        </ul>
      </div>
    </section>
  );
}