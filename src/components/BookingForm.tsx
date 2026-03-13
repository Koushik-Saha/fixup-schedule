"use client";

import React, { useState } from 'react';

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
        <h2>Request Received!</h2>
        <p>We've received your repair booking. We will review it and contact you shortly to confirm the appointment.</p>
        <button className="btn btn-outline" onClick={() => setIsSuccess(false)} style={{ marginTop: '1rem' }}>
          Book Another Repair
        </button>
      </div>
    );
  }

  return (
    <form className="glass-panel" onSubmit={handleSubmit} id="booking">
      <h2 style={{ marginBottom: '2rem' }}>Schedule a Repair</h2>
      
      {errorMsg && (
        <div style={{ padding: '1rem', backgroundColor: 'rgba(255,50,50,0.1)', border: '1px solid rgba(255,50,50,0.3)', borderRadius: '12px', marginBottom: '1.5rem', color: '#ffb3b3' }}>
          {errorMsg}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label" htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" className="form-input" required placeholder="John Doe" />
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label" htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" className="form-input" required placeholder="(805) 555-0123" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">Email Address *</label>
        <input type="email" id="email" name="email" className="form-input" required placeholder="john@example.com" />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="device">Device Model *</label>
        <select id="device" name="device" className="form-select" required defaultValue="">
          <option value="" disabled>Select your device</option>
          <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
          <option value="iPhone 15 Pro">iPhone 15 Pro</option>
          <option value="iPhone 15">iPhone 15</option>
          <option value="iPhone 14 Series">iPhone 14 Series</option>
          <option value="iPhone 13 / 12 Series">iPhone 13 / 12 Series</option>
          <option value="Samsung Galaxy S24 Series">Samsung Galaxy S24 Series</option>
          <option value="Samsung Galaxy S23 Series">Samsung Galaxy S23 Series</option>
          <option value="iPad / Tablet">iPad / Tablet</option>
          <option value="Other">Other Device</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="service">Service Needed *</label>
        <select id="service" name="service" className="form-select" required defaultValue="">
          <option value="" disabled>Select the issue</option>
          <option value="Screen Replacement">Screen Replacement</option>
          <option value="Battery Replacement">Battery Replacement</option>
          <option value="Charging Port Repair">Charging Port Repair</option>
          <option value="Water Damage Recovery">Water Damage Recovery</option>
          <option value="Diagnostic / Other">Diagnostic / Unsure</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label" htmlFor="date">Preferred Date *</label>
          <input type="date" id="date" name="date" className="form-input" required />
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label" htmlFor="time">Preferred Time</label>
          <select id="time" name="time" className="form-select">
            <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
            <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
            <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="notes">Additional Details</label>
        <textarea id="notes" name="notes" className="form-textarea" placeholder="Is the screen completely black? Does it hold a charge for less than an hour? Let us know any details."></textarea>
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.125rem' }} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Request Appointment'}
      </button>
      
      <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem', marginBottom: 0 }}>
        By submitting, you agree to our repair terms. We'll contact you shortly.
      </p>
    </form>
  );
}
