import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-center">
      {/*profile picture*/}
      <div className="flex justify-center mb-4">
        <Image
          src="/images/profile.jpg" // Don't have a professional photo, this is temporary.
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* about section */}
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-gray-600 text-lg leading-relaxed">
        Hi, I&apos;m Arteen Mohammadi! I&apos;m a passionate developer with
        experience in web development, game engines, and OOP.
      </p>

      {/* skills section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 mt-3">
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm">
            TypeScript
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm">
            React
          </span>
          <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-lg text-sm">
            Next.js
          </span>
          <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg text-sm">
            Tailwind CSS
          </span>
        </div>
      </div>

      {/* Personal Interests */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Interests</h2>
        <p className="text-gray-600">
          Outside of coding, I enjoy{" "}
          <span className="font-semibold">
            gaming, reading tech blogs, and hiking.
          </span>
          I&apos;m always open to collaborating on interesting projects!
        </p>
      </div>
    </div>
  );
}
