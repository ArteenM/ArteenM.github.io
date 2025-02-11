export default function Projects() {
  const projects = [
    { name: "Project One", link: "https://github.com/yourname/project1" },
    { name: "Project Two", link: "https://github.com/yourname/project2" },
  ];

  return (
    <div className="py-10 text-center">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul className="mt-6 space-y-4">
        {projects.map((project, index) => (
          <li key={index}>
            <a
              href={project.link}
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
