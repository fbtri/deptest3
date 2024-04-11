import { NAV_LINKS } from "@/Constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-10 right-6 z-50 bg-transparent py-5">
      <div className="max-container padding-container flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <div className="cursor-pointer hidden lg:flex">
            <Image src="/Mac App iconW.png" alt="logo" width={70} height={70} />
          </div>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex flex-wrap">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="mr-5">
              <Link href={link.href} className="text-white hover:text-gray-300 transition-all font-medium">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile navigation */}
        <div className="lg:hidden">
          
          <ul className="flex flex-col mt-5 ml-0">
          <Link href="/" legacyBehavior>
          <div className="cursor-pointer">
            <Image src="/Mac App iconW.png" alt="logo" width={40} height={15} />
          </div>
        </Link>
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="mb-3">
                <Link href={link.href} className="text-white hover:text-gray-300 transition-all font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
