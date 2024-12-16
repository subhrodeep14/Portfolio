function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Tailwind CSS'];
  
    return (
      <section id="skills" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <div className="mt-8 flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <span key={index} className="m-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;
  