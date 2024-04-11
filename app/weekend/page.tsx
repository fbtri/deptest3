import Navbar from "../Components/Navbar";
import Image from "next/image";

export default function Weekend() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '00px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />
      <div style={{ maxWidth: '100vw', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        {[...Array(5)].map((_, columnIndex) => ( // Iterate over 5 columns
          <div key={columnIndex} style={{ width: '19%', marginLeft: '0' }}> {/* Adjust width for 5 columns */}
            {[1, 2, 3, 4].map((index) => { // Iterate over 4 photos in each column
              const photoIndex = columnIndex * 4 + index; // Calculate photo index
              return (
                photoIndex <= 19 && // Check if photo index is within range
                <div key={index} style={{ marginBottom: '20px' }}>
                  <Image
                    src={`/TWK${photoIndex}.jpeg`}
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
