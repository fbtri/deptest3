import Navbar from "../Components/Navbar";
import Image from "next/image";

export default function Weekend() {
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.style.transform = 'scale(1)';
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '00px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />
      <div style={{ maxWidth: '100vw', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        {[1, 2, 3, 4, 5].map((columnIndex) => (
          <div key={columnIndex} style={{ width: '19%', marginLeft: '20px' }}>
            {columnIndex === 5 && columnIndex * 4 > 19 ? null : (
              <div style={{ marginBottom: '10px' }}>
                <div
                  style={{ transition: 'transform 0.2s', cursor: 'pointer' }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <Image
                    src={`/TWK${Math.min(columnIndex * 4, 19)}.jpeg`}
                    alt={`background image ${Math.min(columnIndex * 4, 19)}`}
                    layout="responsive"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            )}
            {[1, 2, 3].map((index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <div
                  style={{ transition: 'transform 0.2s', cursor: 'pointer' }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <Image
                    src={`/TWK${(columnIndex - 1) * 4 + index}.jpeg`}
                    alt={`background image ${(columnIndex - 1) * 4 + index}`}
                    layout="responsive"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
