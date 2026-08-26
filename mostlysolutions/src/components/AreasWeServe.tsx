const AREAS = [
  'London',
  'Guildford',
  'Reading',
  'Oxford',
  'Watford',
  'Hemel Hempstead',
  'High Wycombe',
  'Slough',
  'St Albans',
]

function PinGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden style={{ flex: 'none' }}>
      <path
        d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z"
        stroke="#4CC163"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" stroke="#4CC163" strokeWidth="1.8" />
    </svg>
  )
}

export default function AreasWeServe() {
  return (
    <section
      aria-label="Areas we serve"
      style={{
        borderTop: '1px solid rgba(255,255,255,.07)',
        padding: 'clamp(56px,8vw,92px) clamp(16px,5vw,48px)',
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.24em', color: '#4CC163' }}>AREAS WE COVER</div>
        <h2
          style={{
            margin: '12px 0 0',
            fontSize: 'clamp(28px,4vw,44px)',
            fontWeight: 800,
            letterSpacing: '-.02em',
            lineHeight: 1.1,
            color: '#FFFFFF',
          }}
        >
          Mobile Mechanics Across London &amp; the Home Counties
        </h2>
        <p style={{ margin: '14px auto 0', maxWidth: 560, fontSize: 16, lineHeight: 1.65, color: 'rgba(234,240,247,.62)' }}>
          No garage visit needed — our certified technicians come to your home, workplace, or roadside across these locations.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(10px,1.4vw,14px)',
            marginTop: 'clamp(30px,4vw,44px)',
          }}
        >
          {AREAS.map((area) => (
            <span
              key={area}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                padding: '11px 18px',
                borderRadius: 99,
                border: '1px solid rgba(255,255,255,.1)',
                background: 'rgba(255,255,255,.04)',
                fontSize: 'clamp(13.5px,1.5vw,15px)',
                fontWeight: 600,
                color: 'rgba(234,240,247,.85)',
                whiteSpace: 'nowrap',
              }}
            >
              <PinGlyph />
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
