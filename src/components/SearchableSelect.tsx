"use client";

import React, { useState, useRef, useEffect } from 'react';

interface SearchableSelectProps {
  id: string;
  name: string;
  options: { value: string; label: string; group?: string }[];
  placeholder?: string;
  required?: boolean;
}

export default function SearchableSelect({ id, name, options, placeholder = "Select an option", required = false }: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter options
  const filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (option.group && option.group.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Group options for display
  const groupedOptions: Record<string, typeof options> = {};
  filteredOptions.forEach(opt => {
    const group = opt.group || "Other";
    if (!groupedOptions[group]) groupedOptions[group] = [];
    groupedOptions[group].push(opt);
  });

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setSearchTerm("");
    setIsOpen(false);
  };

  const selectedLabel = options.find(o => o.value === selectedValue)?.label;

  return (
    <div className="searchable-select" ref={dropdownRef} style={{ position: 'relative', width: '100%' }}>
      {/* Hidden input to ensure native form submission works */}
      <input type="hidden" name={name} value={selectedValue} required={required} />
      
      {/* Trigger Button */}
      <div 
        className="form-input" 
        style={{ 
          cursor: 'pointer', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          color: selectedLabel ? 'white' : 'rgba(255,255,255,0.7)'
        }}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        <span>{selectedLabel || placeholder}</span>
        <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', fontSize: '0.8em' }}>▼</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          left: 0,
          right: 0,
          backgroundColor: '#1c1c1ebf',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          zIndex: 50,
          maxHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Search Input */}
          <div style={{ padding: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <input 
              type="text" 
              placeholder="Search devices..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              autoFocus
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Options List */}
          <div style={{ overflowY: 'auto', padding: '0.5rem' }}>
            {Object.keys(groupedOptions).length === 0 ? (
              <div style={{ padding: '1rem', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
                No devices found
              </div>
            ) : (
              Object.entries(groupedOptions).map(([group, groupOptions]) => (
                <div key={group} style={{ marginBottom: '0.5rem' }}>
                  <div style={{ 
                    padding: '0.5rem 0.75rem', 
                    fontSize: '0.75rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em', 
                    color: 'rgba(255,255,255,0.4)',
                    fontWeight: 600
                  }}>
                    {group}
                  </div>
                  {groupOptions.map(option => (
                    <div 
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      style={{
                        padding: '0.75rem 1rem',
                        cursor: 'pointer',
                        borderRadius: '6px',
                        backgroundColor: selectedValue === option.value ? 'rgba(10,132,255,0.2)' : 'transparent',
                        color: selectedValue === option.value ? '#0a84ff' : 'white',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = selectedValue === option.value ? 'rgba(10,132,255,0.2)' : 'rgba(255,255,255,0.05)'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = selectedValue === option.value ? 'rgba(10,132,255,0.2)' : 'transparent'}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              ))
            )}
            
            {/* Custom Option Fallback */}
            {searchTerm && Object.keys(groupedOptions).length === 0 && (
               <div 
                  onClick={() => handleSelect(`Other / Unlisted: ${searchTerm}`)}
                  style={{
                    padding: '0.75rem 1rem',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    color: '#0a84ff',
                    marginTop: '0.5rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(10,132,255,0.1)'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Use "{searchTerm}" as custom device
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
