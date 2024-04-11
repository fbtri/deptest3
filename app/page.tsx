import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}> {/* Apply inline style for background color and set min height to fill the viewport */}
      <Navbar />
      <Hero />
      
    </div>
  );
}
