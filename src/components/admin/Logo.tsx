import React from 'react'

export const Logo = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    }}>
      <div style={{
        width: '38px',
        height: '38px',
        borderRadius: '11px',
        background: 'linear-gradient(135deg, #5c7cfa 0%, #4c6ef5 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        fontWeight: 700,
        color: 'white',
        letterSpacing: '-0.02em',
        boxShadow: '0 2px 8px rgba(92, 124, 250, 0.3)',
      }}>
        B
      </div>
      <div>
        <div style={{
          fontSize: '18px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: '#1a1d2b',
          lineHeight: 1.2,
        }}>
          Builder
        </div>
        <div style={{
          fontSize: '10px',
          fontWeight: 600,
          color: '#8891a8',
          letterSpacing: '0.06em',
          textTransform: 'uppercase' as const,
        }}>
          Website Platform
        </div>
      </div>
    </div>
  )
}
