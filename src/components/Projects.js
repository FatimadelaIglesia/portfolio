function Projects() {
  return (
    <section id="projects" className="mb-5">
      <h3>Projects</h3>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Weather App (React)</h5>
          <p className="card-text">
            A responsive weather application using live API data.
          </p>
          <a
            href="https://your-weather-app.netlify.app"
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/fatimadelaiglesia/weather-app"
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Portfolio Website</h5>
          <p className="card-text">
            One-page React portfolio built with Bootstrap.
          </p>
          <a
            href="https://github.com/fatimadelaiglesia/portfolio"
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
