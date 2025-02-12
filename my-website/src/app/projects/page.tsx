export default function Projects() {
  const projects = [
    {
      name: "Travel Helper",
      link: "https://github.com",
    },
    { name: "Project Two", link: "https://github.com" },
    {
      name: "Project Three",
      link: "https://github.com",
    },
  ];

  return (
    <div className="text-xl py-10 text-center">
      <h1 className="text-5xl font-bold">Projects</h1>
      <ul className="mt-24 space-y-10">
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
