import { LuMail } from "react-icons/lu";
import { SiGithub, SiX } from "react-icons/si";
import { Logo } from "~/components/logo";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <Logo className="h-8 text-brand-primary" />
            </div>
            <p className="mt-4 text-gray-400">会津大学 総合技術系サークル</p>
            <div className="flex space-x-4 mt-6">
              <a
                aria-label="GitHub"
                href="https://github.com/Zli-UoA"
                className="text-gray-400 hover:text-brand-primary transition-colors"
              >
                <SiGithub className="h-6 w-6" />
              </a>
              <a
                aria-label="Twitter"
                href="https://x.com/ZliOfficial"
                className="text-gray-400 hover:text-brand-primary transition-colors"
              >
                <SiX className="h-6 w-6" />
              </a>
              <a
                aria-label="Mail"
                href="mailto:contact@zli.works"
                className="text-gray-400 hover:text-brand-primary transition-colors"
              >
                <LuMail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-brand-secondary text-center text-gray-400">
          <p>© {new Date().getFullYear()} Zli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
