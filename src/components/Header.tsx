import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <a href="/" className="logo">
          <span>⚙️</span> FixUp
        </a>
        <div>
          <a href="#booking" className="btn btn-primary">Book Repair</a>
        </div>
      </div>
    </header>
  );
}
