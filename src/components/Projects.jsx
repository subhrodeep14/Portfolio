

function Projects() {
    const projects = [
      {
        title: 'Project 1',
        description: 'A short description of Project 1.',
        link: '#',
        Image: 'https://via.placeholder.com/150',
      },
      {
        title: 'Project 2',
        description: 'A short description of Project 2.',
        link: '#',
        Image: 'https://via.placeholder.com/150',
      },
    ];
  
    return (
      <section id="projects" className="py-16 h-screen bg-zinc-900 text-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold pt-5 ">My <span className="text-blue-500 underline underline-offset-4">Projects</span> </h2>
          <div className="flex justify-center gap-10 m-10"> 
            {projects.map((project, index) => (
              <div key={index} className="p-4 w-2/3 border rounded-lg">
                <img src={project.Image} alt="" />
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
  