import Navbar from "../Components/Navbar";
import Image from "next/image";

export default function Weekend() {
  return (
    <div style={{ backgroundColor: 'black', position: 'relative' }}>
      <Navbar/>
      <div style={{maxWidth: '100vw', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', position: 'relative', zIndex: 0 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((index) => (
          <div key={index} style={{ width: '19%', margin: '0', position: 'relative', overflow: 'hidden', borderRadius: '00px' }}>
            <Image
              src={`/TWK${index}.jpeg`}
              alt={`background image ${index}`}
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
