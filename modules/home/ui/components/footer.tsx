export const Footer = () => {
  return (
    <footer className="bg-white mt-8 py-2 border-t border-slate-400">
      <div className="container mx-auto px-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()}
        <p>
          Data sourced from{" "}
          <a
            href="https://data.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:underline"
          >
            data.gov.in
          </a>
          .
        </p>
        <p>
          This is an independent initiative to promote transparency and is not
          an official government application.
        </p>
      </div>
    </footer>
  );
};
