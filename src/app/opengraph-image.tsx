import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = "Ulrich Tchiem - Infrastructure & Cloud Architect"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0e17 0%, #1a2332 100%)',
          padding: 40,
        }}
      >
        {/* Grille technique */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage: 'radial-gradient(circle at 20px 20px, #3b82f6 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Contenu */}
        <div style={{ textAlign: 'center', zIndex: 1 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#3b82f6',
              fontFamily: 'monospace',
              letterSpacing: 4,
            }}
          >
            EmperorCloud
          </div>
          <div
            style={{
              fontSize: 32,
              marginTop: 16,
              color: '#94a3b8',
              fontFamily: 'monospace',
              letterSpacing: 2,
            }}
          >
            Infrastructure & Cloud Architect
          </div>
          <div
            style={{
              fontSize: 24,
              marginTop: 32,
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Ulrich Tchiem
          </div>
          <div
            style={{
              fontSize: 16,
              marginTop: 24,
              color: '#334155',
              fontFamily: 'monospace',
              borderTop: '1px solid #1e293b',
              paddingTop: 24,
              width: '60%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            50+ infrastructures déployées · 7+ ans d'expérience · 99.99% SLA
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}