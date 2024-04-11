import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Hero background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/TWK9.jpeg"
          alt="background image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black opacity-70"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-3xl text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Ironman Oceanside 70.3</h1>
        <p className="max-w-md mx-auto mb-8">A race weekend with friends and family</p>
        {/* Link */}
        <Link href="/weekend">
            Go to Destination Page
        </Link>
      </div>
    </div>
  );
};

export default Hero;


