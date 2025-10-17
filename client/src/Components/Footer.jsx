const Footer = () => {
  return (
    <footer className="h-[150px] w-full bg-black flex items-center justify-around px-10">
      {/* Left side */}
      <div className="flex flex-col">
        {/* Logo */}
        <div className="text-2xl text-white font-bold tracking-wide cursor-pointer">
          Algo
          <span className="bg-neon-gradient bg-clip-text text-transparent font-extrabold">
            Arena
          </span>
        </div>
        <p className="text-gray-400">AlgoArena &copy; 2025.</p>
        <p className="text-gray-400">All rights reserved.</p>
      </div>

      {/* Right side links */}
      <div className="flex flex-col ">
        <a
          href="/about"
          className="text-white hover:bg-neon-gradient hover:bg-clip-text 
          hover:text-transparent"
        >
          Rules
        </a>
        <a
          href="/contact"
          className="text-white hover:bg-neon-gradient hover:bg-clip-text 
          hover:text-transparent"
        >
          Dashboards
        </a>
      </div>
    </footer>
  );
};

export default Footer;
