import Image from "next/image";
import Link from "next/link";

export default function RaceCourse() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Link href="/" legacyBehavior>
        <div className="cursor-pointer">
          <Image src="/Mac App iconW.png" alt="logo" width={70} height={70} />
        </div>
      </Link>
      <h1 style={{ color: 'white' }}> Race Course </h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src="/RC1.png" alt="Race Course 1" layout="responsive" width={800} height={600} style={{ marginBottom: '20px' }} />
          <Image src="/RC2.png" alt="Race Course 2" layout="responsive" width={800} height={600} style={{ marginBottom: '20px' }} />
          <Image src="/RC3.png" alt="Race Course 3" layout="responsive" width={800} height={600} style={{ marginBottom: '20px' }} />
          <Image src="/RC4.png" alt="Race Course 4" layout="responsive" width={800} height={600} style={{ marginBottom: '20px' }} />
          <Image src="/RC5.png" alt="Race Course 5" layout="responsive" width={800} height={600} />
        </div>
      </div>
    </div>
  );
}

