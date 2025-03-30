import { useState } from "react";
import { LuMenu, LuSquareArrowOutUpRight, LuX } from "react-icons/lu";
import { Link, href } from "react-router";
import { Logo } from "~/components/logo";

type Links = {
  name: string;
  url: string;
  isExternal: boolean;
}[];

const links: Links = [
  { name: "blog", url: "https://blog.zli.works", isExternal: false },
  { name: "join", url: href("/join"), isExternal: false },
  {
    name: "contact",
    url: "https://forms.gle/7KVrev2REB6BBBb78",
    isExternal: false,
  },
  { name: "connpass", url: "https://zli.connpass.com", isExternal: true },
  { name: "GitHub", url: "https://github.com/Zli-UoA", isExternal: true },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Logo className="h-8 text-brand-primary" />
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-light hover:text-brand-primary focus:outline-none"
            >
              {isOpen ? (
                <LuX className="h-6 w-6" />
              ) : (
                <LuMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  to={link.url}
                  className="text-brand-light hover:text-brand-primary transition-colors flex items-center justify-center"
                >
                  {link.name}
                  {link.isExternal && (
                    <LuSquareArrowOutUpRight className="ml-2 h-4 w-4" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-brand-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  to={link.url}
                  className="px-3 py-2 text-brand-light hover:text-brand-primary transition-colors flex items-center justify-start"
                >
                  {link.name}
                  {link.isExternal && (
                    <LuSquareArrowOutUpRight className="ml-2 h-4 w-4" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
