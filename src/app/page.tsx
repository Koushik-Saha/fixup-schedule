import Image from "next/image";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '8rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(10,132,255,0.15) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(160,160,160,0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1 }}></div>
        
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>
          <div className="animate-fade-in">
            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', border: '1px solid var(--border)', fontSize: '0.875rem', marginBottom: '1.5rem', fontWeight: 500 }}>
              <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>●</span> Open Today until 8:00 PM
            </div>
            <h1>Breathe Life Back Into Your Devices.</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '90%' }}>
              Premium smartphone and tablet repair service in the heart of Santa Barbara. Fast turnarounds, high-quality parts, and expert technicians.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#booking" className="btn btn-primary">Book Now</a>
              <a href="tel:8058574226" className="btn btn-outline">Call Us: (805) 857-4226</a>
            </div>
            
            <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>4.9★</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Google Reviews</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>{"< 2h"}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Avg. Repair Time</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>90-Day</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Warranty</div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in delay-2" style={{ position: 'relative' }}>
            <div style={{ width: '100%', aspectRatio: '4/5', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', borderRadius: '24px', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5, mixBlendMode: 'luminosity' }}></div>
              <div style={{ zIndex: 1, padding: '2rem', textAlign: 'center' }}>
                 <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem', background: 'rgba(0,0,0,0.5)', padding: '0.5rem 1rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>FixUp State Street</div>
                 <div style={{ color: 'rgba(255,255,255,0.8)', background: 'rgba(0,0,0,0.5)', padding: '0.5rem 1rem', borderRadius: '8px', backdropFilter: 'blur(10px)', display: 'inline-block' }}>619 A State St, Santa Barbara</div>
              </div>
            </div>
            {/* Floating feature card */}
            <div className="glass-panel" style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', padding: '1.5rem', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(10,132,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>🔋</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'white' }}>OEM Quality Parts</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Tested for reliability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Book Your Repair</h2>
            <p>Tell us what's wrong with your device and schedule a time to come in. Most repairs are completed within 1-2 hours of drop-off.</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
