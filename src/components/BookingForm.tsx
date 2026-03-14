"use client";

import React, { useState } from 'react';
import SearchableSelect from './SearchableSelect';

// Define the comprehensive device list organized by Manufacturer/Group
const DEVICE_OPTIONS = [
  // Apple iPhone
  { value: "iPhone 17 Pro Max", label: "iPhone 17 Pro Max", group: "Apple iPhone" },
  { value: "iPhone 17 Pro", label: "iPhone 17 Pro", group: "Apple iPhone" },
  { value: "iPhone 17 Plus", label: "iPhone 17 Plus", group: "Apple iPhone" },
  { value: "iPhone 17", label: "iPhone 17", group: "Apple iPhone" },
  { value: "iPhone 16 Pro Max", label: "iPhone 16 Pro Max", group: "Apple iPhone" },
  { value: "iPhone 16 Pro", label: "iPhone 16 Pro", group: "Apple iPhone" },
  { value: "iPhone 16 Plus", label: "iPhone 16 Plus", group: "Apple iPhone" },
  { value: "iPhone 16", label: "iPhone 16", group: "Apple iPhone" },
  { value: "iPhone 15 Pro Max", label: "iPhone 15 Pro Max", group: "Apple iPhone" },
  { value: "iPhone 15 Pro", label: "iPhone 15 Pro", group: "Apple iPhone" },
  { value: "iPhone 15 Plus", label: "iPhone 15 Plus", group: "Apple iPhone" },
  { value: "iPhone 15", label: "iPhone 15", group: "Apple iPhone" },
  { value: "iPhone 14 Pro Max", label: "iPhone 14 Pro Max", group: "Apple iPhone" },
  { value: "iPhone 14 Pro", label: "iPhone 14 Pro", group: "Apple iPhone" },
  { value: "iPhone 14 Plus", label: "iPhone 14 Plus", group: "Apple iPhone" },
  { value: "iPhone 14", label: "iPhone 14", group: "Apple iPhone" },
  { value: "iPhone 13 Pro Max", label: "iPhone 13 Pro Max", group: "Apple iPhone" },
  { value: "iPhone 13 Pro", label: "iPhone 13 Pro", group: "Apple iPhone" },
  { value: "iPhone 13", label: "iPhone 13", group: "Apple iPhone" },
  { value: "iPhone 13 mini", label: "iPhone 13 mini", group: "Apple iPhone" },
  { value: "iPhone SE (3rd Gen)", label: "iPhone SE (3rd Gen)", group: "Apple iPhone" },
  { value: "iPhone 12 Pro Max", label: "iPhone 12 Pro Max", group: "Apple iPhone" },
  { value: "iPhone 12 Pro", label: "iPhone 12 Pro", group: "Apple iPhone" },
  { value: "iPhone 12", label: "iPhone 12", group: "Apple iPhone" },
  { value: "iPhone 12 mini", label: "iPhone 12 mini", group: "Apple iPhone" },
  { value: "iPhone 11 Pro Max", label: "iPhone 11 Pro Max", group: "Apple iPhone" },
  { value: "iPhone 11 Pro", label: "iPhone 11 Pro", group: "Apple iPhone" },
  { value: "iPhone 11", label: "iPhone 11", group: "Apple iPhone" },
  
  // Apple iPad
  { value: "iPad Pro 13-inch (M4)", label: "iPad Pro 13-inch (M4)", group: "Apple iPad" },
  { value: "iPad Pro 11-inch (M4)", label: "iPad Pro 11-inch (M4)", group: "Apple iPad" },
  { value: "iPad Air 13-inch (M2)", label: "iPad Air 13-inch (M2)", group: "Apple iPad" },
  { value: "iPad Air 11-inch (M2)", label: "iPad Air 11-inch (M2)", group: "Apple iPad" },
  { value: "iPad Pro 12.9-inch (M2)", label: "iPad Pro 12.9-inch (M2)", group: "Apple iPad" },
  { value: "iPad Pro 11-inch (M2)", label: "iPad Pro 11-inch (M2)", group: "Apple iPad" },
  { value: "iPad Air (5th Gen)", label: "iPad Air (5th Gen)", group: "Apple iPad" },
  { value: "iPad (10th Gen)", label: "iPad (10th Gen)", group: "Apple iPad" },
  { value: "iPad mini (6th Gen)", label: "iPad mini (6th Gen)", group: "Apple iPad" },

  // Samsung Galaxy S Series
  { value: "Samsung Galaxy S26 Ultra", label: "Galaxy S26 Ultra", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S26+", label: "Galaxy S26+", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S26", label: "Galaxy S26", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S25 Ultra", label: "Galaxy S25 Ultra", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S25+", label: "Galaxy S25+", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S25", label: "Galaxy S25", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S24 Ultra", label: "Galaxy S24 Ultra", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S24+", label: "Galaxy S24+", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S24", label: "Galaxy S24", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S23 Ultra", label: "Galaxy S23 Ultra", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S23+", label: "Galaxy S23+", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S23", label: "Galaxy S23", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S23 FE", label: "Galaxy S23 FE", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S22 Ultra", label: "Galaxy S22 Ultra", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S22+", label: "Galaxy S22+", group: "Samsung Galaxy" },
  { value: "Samsung Galaxy S22", label: "Galaxy S22", group: "Samsung Galaxy" },
  
  // Samsung Z Series (Foldables)
  { value: "Samsung Galaxy Z Fold 7", label: "Galaxy Z Fold 7", group: "Samsung Galaxy Z Fold/Flip" },
  { value: "Samsung Galaxy Z Flip 7", label: "Galaxy Z Flip 7", group: "Samsung Galaxy Z Fold/Flip" },
  { value: "Samsung Galaxy Z Fold 6", label: "Galaxy Z Fold 6", group: "Samsung Galaxy Z Fold/Flip" },
  { value: "Samsung Galaxy Z Flip 6", label: "Galaxy Z Flip 6", group: "Samsung Galaxy Z Fold/Flip" },
  { value: "Samsung Galaxy Z Fold 5", label: "Galaxy Z Fold 5", group: "Samsung Galaxy Z Fold/Flip" },
  { value: "Samsung Galaxy Z Flip 5", label: "Galaxy Z Flip 5", group: "Samsung Galaxy Z Fold/Flip" },
  
  // Samsung A Series
  { value: "Samsung Galaxy A55", label: "Galaxy A55", group: "Samsung Galaxy A Series" },
  { value: "Samsung Galaxy A35", label: "Galaxy A35", group: "Samsung Galaxy A Series" },
  { value: "Samsung Galaxy A54", label: "Galaxy A54", group: "Samsung Galaxy A Series" },
  { value: "Samsung Galaxy A14", label: "Galaxy A14", group: "Samsung Galaxy A Series" },

  // Google Pixel
  { value: "Google Pixel 10 Pro Fold", label: "Pixel 10 Pro Fold", group: "Google Pixel" },
  { value: "Google Pixel 10 Pro XL", label: "Pixel 10 Pro XL", group: "Google Pixel" },
  { value: "Google Pixel 10 Pro", label: "Pixel 10 Pro", group: "Google Pixel" },
  { value: "Google Pixel 10", label: "Pixel 10", group: "Google Pixel" },
  { value: "Google Pixel 9 Pro Fold", label: "Pixel 9 Pro Fold", group: "Google Pixel" },
  { value: "Google Pixel 9 Pro XL", label: "Pixel 9 Pro XL", group: "Google Pixel" },
  { value: "Google Pixel 9 Pro", label: "Pixel 9 Pro", group: "Google Pixel" },
  { value: "Google Pixel 9", label: "Pixel 9", group: "Google Pixel" },
  { value: "Google Pixel 8 Pro", label: "Pixel 8 Pro", group: "Google Pixel" },
  { value: "Google Pixel 8", label: "Pixel 8", group: "Google Pixel" },
  { value: "Google Pixel 8a", label: "Pixel 8a", group: "Google Pixel" },
  { value: "Google Pixel Fold", label: "Pixel Fold", group: "Google Pixel" },
  { value: "Google Pixel 7 Pro", label: "Pixel 7 Pro", group: "Google Pixel" },
  { value: "Google Pixel 7", label: "Pixel 7", group: "Google Pixel" },
  { value: "Google Pixel 7a", label: "Pixel 7a", group: "Google Pixel" },

  // OnePlus
  { value: "OnePlus 13", label: "OnePlus 13", group: "OnePlus" },
  { value: "OnePlus 12", label: "OnePlus 12", group: "OnePlus" },
  { value: "OnePlus 12R", label: "OnePlus 12R", group: "OnePlus" },
  { value: "OnePlus Open", label: "OnePlus Open", group: "OnePlus" },
  { value: "OnePlus 11", label: "OnePlus 11", group: "OnePlus" },
  { value: "OnePlus 10 Pro", label: "OnePlus 10 Pro", group: "OnePlus" },
  { value: "OnePlus 10T", label: "OnePlus 10T", group: "OnePlus" },

  // Motorola
  { value: "Motorola Edge 50 Ultra", label: "Edge 50 Ultra", group: "Motorola" },
  { value: "Motorola Edge 50 Pro", label: "Edge 50 Pro", group: "Motorola" },
  { value: "Motorola Razr+ 2024", label: "Razr+ (2024)", group: "Motorola" },
  { value: "Motorola Razr 2024", label: "Razr (2024)", group: "Motorola" },
  { value: "Motorola Edge+ 2023", label: "Edge+ (2023)", group: "Motorola" },
  { value: "Motorola Razr+ 2023", label: "Razr+ (2023)", group: "Motorola" },
  { value: "Moto G Stylus 5G", label: "Moto G Stylus 5G", group: "Motorola" },
  { value: "Moto G Power 5G", label: "Moto G Power 5G", group: "Motorola" }
];


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

    // Basic validation to ensure a searchable select option was chosen and not just empty
    if (!data.device) {
       setErrorMsg("Please select a device model from the list.");
       setIsSubmitting(false);
       return;
    }

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let errMsg = 'Failed to book appointment';
        try {
           const errData = await response.json();
           if (errData.error) errMsg = errData.error;
        } catch(e) {}
        throw new Error(errMsg);
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
        {/* Replaced native select with Custom Searchable Select */}
        <SearchableSelect 
           id="device" 
           name="device" 
           options={DEVICE_OPTIONS} 
           placeholder="Search for your device (e.g. iPhone 17, Galaxy S26)" 
           required={true}
        />
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
