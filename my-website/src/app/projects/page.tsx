import Image from "next/image";
export default function Projects() {
  const projects = [
    {
      name: "Travel Helper",
      link: "https://google.com",
      image: "/images/tempImage.jpg",
    },
    {
      name: "Portfolio",
      link: "/",
      image: "/images/AMLogo.png",
    },
    {
      name: "Placeholder",
      link: "https://github.com",
      image: "Placeholder.jpg",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/projects-bg.jpg')" }}
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl font-bold mb-20">My Projects</h1>

        {/* Horizontal List */}
        <div className="flex justify-center gap-6 flex-wrap">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-60 h-40 rounded-lg overflow-hidden shadow-lg"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transform transition duration-300 group-hover:scale-105"
              />

              {/* Overlay & Text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-semibold text-lg">
                  {project.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
