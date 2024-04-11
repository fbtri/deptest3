import Image from "next/image";
import Link from "next/link";

export default function RacePerformance() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Link href="/" legacyBehavior>
        <div className="cursor-pointer">
          <Image src="/Mac App iconW.png" alt="logo" width={70} height={70} />
        </div>
      </Link>
      <h1 style={{ color: 'white' }}> Performance </h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', maxWidth: '800px', width: '100%', marginTop: '20px' }}>
        {[...Array(7)].map((_, photoIndex) => (
          <div key={photoIndex} style={{ width: '48%', marginBottom: '20px' }}>
            <Image
              src={`/P${photoIndex}.png`}
              alt={`background image ${photoIndex}`}
              layout="responsive"
              width={800}
              height={600}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
