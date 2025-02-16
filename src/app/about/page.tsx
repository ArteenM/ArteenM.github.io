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
          className="rounded-full shadow-lg border-4 border-gray-300 hover:scale-105 transition-transform"
        />
      </div>

      {/* about section */}
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-gray-600 text-lg leading-relaxed">
        Hi, my name is Arteen Mohammadi! I&apos;m an programmer with experience
        in web development, game engines, and OOP.
      </p>

      {/* skills section */}
      {/* Skills Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center">Skills</h2>

        <div className="space-y-6">
          {/* Frontend Development */}
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-3">
              Frontend Development
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg shadow-sm">
                HTML & CSS
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg shadow-sm">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg shadow-sm">
                React
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg shadow-sm">
                Next.js
              </span>
            </div>
          </div>

          {/* Backend Development */}
          <div>
            <h3 className="text-lg font-medium text-green-700 mb-3">
              Backend Development
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg shadow-sm">
                Python
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg shadow-sm">
                C
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg shadow-sm">
                C++
              </span>
            </div>
          </div>

          {/* Game Development */}
          <div>
            <h3 className="text-lg font-medium text-purple-700 mb-3">
              Game Development
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg shadow-sm">
                Unity Engine
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Interests */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Interests</h2>
        <p className="text-gray-600">
          Outside of coding, I enjoy{" "}
          <span className="font-semibold">
            gaming, watching sports, swimming, and working with
            microcontrollers.
          </span>
          I&apos;m always open to collaborating on interesting projects!
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg font-medium">Interested in collaborating?</p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
