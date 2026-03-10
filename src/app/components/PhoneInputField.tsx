import { useState, useRef, useEffect } from 'react';
import PhoneInput, { Country } from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface PhoneInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  /** visual variant */
  variant?: 'default' | 'modal';
  required?: boolean;
  label?: string;
}

export function PhoneInputField({
  value,
  onChange,
  variant = 'default',
  required = true,
  label = 'Телефон',
}: PhoneInputFieldProps) {
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);

  const isValid = value ? isValidPhoneNumber(value) : true;
  const showError = touched && value && !isValid;

  const isModal = variant === 'modal';

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    background: focused ? '#ffffff' : '#f8fafc',
    border: showError
      ? '1.5px solid #ef4444'
      : focused
      ? '1.5px solid #2F71BE'
      : '1.5px solid #dde5f0',
    borderRadius: 8,
    transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
    overflow: 'hidden',
    boxSizing: 'border-box',
    boxShadow: focused ? '0 0 0 3px rgba(42,98,212,0.08)' : 'none',
  };

  return (
    <div>
      {label && (
        <label
          style={{
            display: 'block',
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: '#475569',
            marginBottom: 6,
            fontFamily: 'var(--font-sans)',
          }}
        >
          {label}
        </label>
      )}

      <div style={containerStyle}>
        <PhoneInput
          international
          defaultCountry="RO"
          value={value}
          onChange={(val) => onChange(val ?? '')}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); setTouched(true); }}
          style={{ width: '100%' }}
          numberInputProps={{
            required,
            style: {
              background: 'transparent',
              border: 'none',
              outline: 'none',
              padding: isModal ? '11px 14px 11px 6px' : '14px 16px 14px 6px',
              fontSize: isModal ? '0.9rem' : '0.9375rem',
              color: '#1a1a1a',
              fontFamily: 'var(--font-sans)',
              width: '100%',
              minWidth: 0,
            },
          }}
        />
      </div>

      {showError && (
        <p style={{
          fontSize: '0.75rem',
          color: '#ef4444',
          marginTop: 4,
          fontFamily: 'var(--font-sans)',
        }}>
          Введите корректный номер телефона
        </p>
      )}

      <style>{`
        .PhoneInput {
          display: flex;
          align-items: center;
          width: 100%;
        }
        .PhoneInputCountry {
          display: flex;
          align-items: center;
          gap: 4px;
          padding-left: ${isModal ? '10px' : '14px'};
          flex-shrink: 0;
          cursor: pointer;
          position: relative;
        }
        .PhoneInputCountryIcon {
          width: 22px;
          height: 16px;
          border-radius: 2px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.08);
        }
        .PhoneInputCountryIcon--square {
          width: 22px;
          height: 22px;
        }
        .PhoneInputCountrySelectArrow {
          width: 8px;
          height: 8px;
          border-bottom: 1.5px solid #9ca3af;
          border-right: 1.5px solid #9ca3af;
          transform: rotate(45deg) translateY(-2px);
          margin-left: 2px;
          flex-shrink: 0;
        }
        .PhoneInputCountrySelect {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
          width: 100%;
          height: 100%;
        }
        .PhoneInputInput {
          flex: 1;
          min-width: 0;
        }
      `}</style>
    </div>
  );
}