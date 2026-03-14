import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <div className="logo" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
             <Image src="/fixup-logo-transparent.png" alt="FixUp Logo" width={150} height={50} style={{ objectFit: 'contain' }} />
          </div>
          <p style={{ margin: 0, fontSize: '1rem' }}>Premium Mobile Repair Services in Santa Barbara</p>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem' }}>Location</h3>
            <p style={{ margin: 0 }}>619 A State St<br/>Santa Barbara, CA 93101</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem' }}>Contact</h3>
            <p style={{ margin: 0 }}>(805) 857-4226</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem' }}>Hours</h3>
            <p style={{ margin: 0 }}>Open until 8 PM</p>
          </div>
        </div>
        
        <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.5, marginTop: '2rem' }}>
          &copy; {new Date().getFullYear()} FixUp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
