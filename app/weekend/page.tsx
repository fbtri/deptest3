import Navbar from "../Components/Navbar";
import Image from "next/image";

export default function Weekend() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '00px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />
      <div style={{ maxWidth: '100vw', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        {[1, 2, 3, 4, 5].map((columnIndex) => (
          <div key={columnIndex} style={{ width: '19%', marginLeft: '5px' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((index) => (
              <div key={index} style={{ marginBottom: '5px', position: 'relative', overflow: 'hidden', borderRadius: '0px' }}>
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
        ))}
      </div>
    </div>
  );
}
