import { NAV_LINKS } from "@/Constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-containter relative z-30 py-5">

<div className="flex justify-between items-center w-full pl-5">
<Link href="/" legacyBehavior>
  <div className="cursor-pointer">
    <Image src="/Mac App iconW.png" alt="logo" width={40} height={15} />
  </div>
</Link>

  <ul className="flex pr-5">
  {NAV_LINKS.map((link) => (
    <li key={link.key}>
      <Link href={link.href} className="regular-12 text-gray-50 cursor-pointer transition-all hover:font-bold" style={{ marginRight: '20px' }}>
        {link.label}
      </Link>
    </li>
  ))}
</ul>

</div>

    </nav>
  )
}

export default Navbar