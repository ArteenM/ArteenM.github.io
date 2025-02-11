export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Arteen Mohammadi.</p>
      <div className="mt-2 space-x-4">
        <a
          href="https://github.com/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
