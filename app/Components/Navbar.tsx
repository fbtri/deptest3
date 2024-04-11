
import { NAV_LINKS as NAV_LINKS_LARGE } from "@/Constants"; // Importing large set of navigation links
import { NAV_LINKS as NAV_LINKS_SMALL } from "@/ConstantsSmall"; // Importing small set of navigation links
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-10 right-6 z-50 bg-transparent py-5">
      <div className="max-container padding-container flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <div className="cursor-pointer">
            <Image src="/Mac App iconW.png" alt="logo" width={70} height={70} />
          </div>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex flex flex-wrap pr-5">
          {NAV_LINKS_LARGE .map((link) => (
            <li key={link.key}>
              <Link href={link.href} className="regular-12 text-gray-50 cursor-pointer transition-all hover:font-bold" style={{ marginRight: '20px' }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex lg:hidden"> {/* Added lg:hidden to hide on large screens */}
          <ul className="flex flex-wrap mt-2 ml-1">
            {NAV_LINKS_SMALL.map((link) => (
              <li key={link.key} className="mb-0">
                <Link href={link.href} className="regular-5 text-gray-50 cursor-pointer transition-all hover:font-bold" style={{ marginRight: '20px' }}>
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