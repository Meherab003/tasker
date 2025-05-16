import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-6 md:py-8 !bg-[#191D26] mt-32">
      <h2 className="md:text-xl text-slate-300 text-center pb-4">
        Developed By: <br className="md:hidden" />
        <span className="text-blue-300">Meherab Hossain Bhuiyan</span>
      </h2>
      <div className="flex justify-center items-center gap-8 text-3xl pb-4">
        <a
          href="https://github.com/Meherab003"
          className="p-2 text-xl bg-blue-300 rounded-full text-black hover:opacity-80 cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/meherab_03"
          className="p-2 text-xl bg-blue-300 rounded-full text-black hover:opacity-80 cursor-pointer"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/meherab03/"
          className="p-2 text-xl bg-blue-300 rounded-full text-black hover:opacity-80 cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/meherab03/"
          className="p-2 text-xl bg-blue-300 rounded-full text-black hover:opacity-80 cursor-pointer"
        >
          <FaInstagramSquare />
        </a>
      </div>
      <div className="container mx-auto px-2">
        <p className="text-center text-xs text-slate-300 lg:text-sm">
          Copyright ©2025 | All rights reserved by Tasker.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
