import React from 'react'

export const Logo = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #5c7cfa 0%, #f06595 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: 700,
        color: 'white',
        letterSpacing: '-0.02em',
      }}>
        B
      </div>
      <div>
        <div style={{
          fontSize: '20px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #5c7cfa, #f06595)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.2,
        }}>
          Builder
        </div>
        <div style={{
          fontSize: '11px',
          fontWeight: 500,
          opacity: 0.5,
          letterSpacing: '0.05em',
          textTransform: 'uppercase' as const,
        }}>
          Website Platform
        </div>
      </div>
    </div>
  )
}
