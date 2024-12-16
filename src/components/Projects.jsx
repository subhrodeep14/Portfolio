function Projects() {
    const projects = [
      {
        title: 'Project 1',
        description: 'A short description of Project 1.',
        link: '#',
      },
      {
        title: 'Project 2',
        description: 'A short description of Project 2.',
        link: '#',
      },
    ];
  
    return (
      <section id="projects" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <a href={project.link} className="mt-4 inline-block text-blue-500 underline">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  