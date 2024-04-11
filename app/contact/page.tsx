import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Link href="/" legacyBehavior>
        <div className="cursor-pointer">
          <Image src="/Mac App iconW.png" alt="logo" width={70} height={70} />
        </div>
      </Link>
      <h1 style={{ color: 'white', fontSize: '16px', margin: '5px 0' }}> Contact </h1>
      <a href="https://www.instagram.com/felipes_training" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', fontSize: '16px', margin: '5px 0' }}> @felipes_training </a>
      <h1 style={{ color: 'white', fontSize: '16px', margin: '5px 0' }}> fbragga@gmail.com </h1>
    </div>
  );
}
