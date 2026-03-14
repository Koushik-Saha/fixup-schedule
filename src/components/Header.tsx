import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <a href="/" className="logo">
          <Image src="/fixup-logo-transparent.png" alt="FixUp Logo" width={120} height={40} style={{ objectFit: 'contain' }} priority />
        </a>
        <div>
          <a href="#booking" className="btn btn-primary">Book Repair</a>
        </div>
      </div>
    </header>
  );
}
