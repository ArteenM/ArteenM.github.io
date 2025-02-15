import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold">My Portfolio</h1>
      <p className="text-gray-600 mt-2">
        Aspiring Software Engineer and Game Developer
      </p>
      <div className="mt-4">
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
      </div>
      <p className="mt-4">
        Passionate about building web applications with modern technologies.
      </p>
      <a
        href="/files/resume-NOTUPDATED.pdf"
        className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded"
        download
      >
        Download Resume
      </a>
    </div>
  );
}
