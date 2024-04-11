// LT.js

import Link from "next/link";

export default function LT() {
  return (
    <div>
      <p>This is the content of the LT page.</p>
      <Link href="/theweekend">
        Go to Your Page
      </Link>
    </div>
  );
}
