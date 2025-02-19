function FooterBottom() {
  return (
    <div className="relative w-full flex sm:flex-col sm:items-center flex-row items-start justify-between dark:bg-gray-900 dark:text-white">
      <span className="flex items-center justify-center order-first text-sm text-footerBoxColor mb-4 pt-10">
        <i className="fab fa-github text-4xl mr-4 text-white"></i>
        <a
          href="https://github.com/chingu-voyages/V53-tier3-team-40"
          target="_blank"
          className="hover:text-white text-lg text-white">
          Github Project Link - February 2025
        </a>
      </span>
      <div className="relative w-full flex flex-col items-center content-center sm:flex-row sm:items-start justify-center rounded-3xl">
        <div className="px-8 py-8 flex flex-col space-y-6 content-center text-gray-400">
          <div>
            Disclaimer: This website and its associated services are provided
            for demonstrative and educational purposes only.
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
