import { NAV_LINKS } from "@/Constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-containter relative z-30 py-5">

      <div className="flex justify-between items-center w-full pl-5">
        <Link href="/" legacyBehavior>
          <div className="cursor-pointer">
            <Image src="/Mac App iconW.png" alt="logo" width={40} height={15} />
          </div>
        </Link>

        <ul className="hidden lg:flex flex flex-wrap pr-5"> {/* Added flex-wrap class */}
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className="regular-12 text-gray-50 cursor-pointer transition-all hover:font-bold" style={{ marginRight: '20px' }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

      </div>

      <div className="absolute top-0 right-0 mt-5 mr-0 lg:hidden"> {/* Added absolute positioning and margins */}
  <ul className="flex-col pt-n pr-10">
    {NAV_LINKS.map((link) => (
      <li key={link.key} className="mb-4"> {/* Added mb-4 for margin-bottom */}
        <Link href={link.href} className="regular-12 text-gray-50 cursor-pointer transition-all hover:font-bold" style={{ marginBottom: '10px' }}>
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>


    </nav>
  );
};

export default Navbar;

