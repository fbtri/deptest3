import Navbar from "../Components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function RacePhotos() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '00px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Link href="/" legacyBehavior>
          <div className="cursor-pointer">
            <Image src="/Mac App iconW.png" alt="logo" width={70} height={70} />
          </div>
        </Link>
        <h1 style={{ color: 'white' }}> Race Photos </h1>
      <div style={{ maxWidth: '100vw', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        {[...Array(4)].map((_, columnIndex) => ( // Iterate over 4 columns
          <div key={columnIndex} style={{ width: '24%', marginLeft: '0' }}> {/* Set width to 23% for 4 columns */}
            {[0, 1, 2, 3, 4].map((index) => { // Iterate over 5 photos in each column
              const photoIndex = columnIndex + index * 4; // Calculate photo index
              return (
                photoIndex <= 19 && // Check if photo index is within range
                <div key={index} style={{ marginBottom: '20px' }}>
                  <Image
                    src={`/RP${photoIndex}.jpeg`}
                    alt={`background image ${photoIndex}`}
                    layout="responsive"
                    width={800}
                    height={600}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
