import Navbar from "../Components/Navbar";
import Image from "next/image";

export default function Weekend() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '00px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />
      <div style={{ maxWidth: '100vw', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        {[1, 2, 3, 4].map((columnIndex) => (
          <div key={columnIndex} style={{ width: '24.5%', marginLeft: '00px' }}>
            {columnIndex === 5 && columnIndex * 4 > 19 ? null : (
              <div style={{ marginBottom: '10px' }}>
                <Image
                  src={`/TWK${Math.min(columnIndex * 4, 19)}.jpeg`}
                  alt={`background image ${Math.min(columnIndex * 4, 19)}`}
                  layout="responsive"
                  width={800}
                  height={600}
                />
              </div>
            )}
            {[1, 2, 3].map((index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <Image
                  src={`/TWK${(columnIndex - 1) * 4 + index}.jpeg`}
                  alt={`background image ${(columnIndex - 1) * 4 + index}`}
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