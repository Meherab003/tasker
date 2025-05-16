const Header = () => {
  return (
    <nav className="py-5 px-3 lg:px-0 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <a className="flex items-center justify-center" href="/">
          <img
            className="h-[30px]"
            src="https://img.icons8.com/color/48/brief.png"
            alt="Lws"
          />
          <p className="text-3xl lg:text-4xl text-blue-300 font-semibold font-mono">
            Tasker.
          </p>
        </a>
        {/* <!-- Logo Ends --> */}
      </div>
    </nav>
  );
};

export default Header;
