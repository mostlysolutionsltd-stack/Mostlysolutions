const BRANDS = [
  { name: 'Audi', src: '/brands/audi.png' },
  { name: 'BMW', src: '/brands/bmw.png' },
  { name: 'Mercedes-Benz', src: '/brands/mercedes-benz.png' },
  { name: 'Volkswagen', src: '/brands/volkswagen.png' },
  { name: 'SEAT', src: '/brands/seat.png' },
  { name: 'Vauxhall', src: '/brands/vauxhall.png' },
  { name: 'Citroën', src: '/brands/citroen.png' },
  { name: 'Ford', src: '/brands/ford.png' },
  { name: 'Toyota', src: '/brands/toyota.png' },
  { name: 'Nissan', src: '/brands/nissan.png' },
]

export default function BrandsMarquee() {
  const row = [...BRANDS, ...BRANDS]
  return (
    <section style={{ padding: 'clamp(48px,7vw,80px) 0', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', padding: '0 clamp(16px,5vw,64px)' }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.3em', color: 'var(--blue)', textTransform: 'uppercase' }}>
          Marques We Service
        </div>
        <h2 style={{ margin: '14px 0 0', fontSize: 'clamp(24px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em' }}>
          Trusted With Every Badge
        </h2>
      </div>

      <div
        style={{
          position: 'relative',
          marginTop: 'clamp(32px,4vw,52px)',
          maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
          WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
        }}
      >
        <div style={{ display: 'flex', width: 'max-content', gap: 22, animation: 'msMarquee 34s linear infinite' }}>
          {row.map((brand, i) => (
            <div key={`${brand.name}-${i}`} className="ms-brand-chip" aria-hidden={i >= BRANDS.length}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.src}
                alt={brand.name}
                style={{ height: 46, width: 'auto', maxWidth: 96, objectFit: 'contain' }}
                loading="lazy"
              />
              <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.05em', color: '#0B1B33' }}>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
