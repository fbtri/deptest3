import { NAV_LINKS } from "@/Constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';

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
        <ul className="flex flex-wrap justify-end"> {/* Added justify-end to align items to the right */}
  {NAV_LINKS.map((link) => (
    <li key={link.key} className="mr-5">
      <Link href={link.href} className="text-white hover:text-gray-300 transition-all font-small">
        {link.label}
      </Link>
    </li>
  ))}
</ul>

        {/* Mobile navigation */}
        <div className="hidden">
          
          <ul className="flex flex-wrap mt-5 ml-0">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="mb-0">
                <Link href={link.href} className="text-white hover:text-gray-300 transition-all font-small">
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
