import Reveal from './Reveal'

const OFFICES = [
  {
    name: 'Reading Office',
    address: '12 Caversham Road, Reading, RG1 7BZ',
    phone: '+44 118 900 0000',
    telHref: 'tel:+441189000000',
    hours: 'Mon–Sat: 7am – 8pm',
    maps: 'https://maps.google.com/?q=Reading+RG1+7BZ',
  },
  {
    name: 'London Office',
    address: '34 Vauxhall Bridge Road, London, SW1V 1AX',
    phone: '+44 207 000 0000',
    telHref: 'tel:+442070000000',
    hours: 'Mon–Sun: 8am – 9pm',
    maps: 'https://maps.google.com/?q=Vauxhall+Bridge+Road+London',
  },
]

export default function Locations() {
  return (
    <section id="locations" style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,48px)', maxWidth: 1100, margin: '0 auto' }}>
      <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.24em', color: '#4CC163' }}>WHERE TO FIND US</div>
        <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(32px,4.4vw,52px)', fontWeight: 800, letterSpacing: '-.02em', color: '#FFFFFF' }}>
          Reading &amp; London Offices
        </h2>
        <p style={{ margin: '14px auto 0', maxWidth: 520, fontSize: 16, lineHeight: 1.6, color: 'rgba(234,240,247,.6)' }}>
          Two strategic locations covering the M4 corridor and Greater London.
        </p>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(290px,100%),1fr))', gap: 22 }}>
        {OFFICES.map((off) => (
          <Reveal key={off.name} className="ms-office-card" style={{ padding: 30 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon.webp" alt="" style={{ height: 36, width: 'auto' }} />
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#FFFFFF' }}>{off.name}</h3>
            </div>
            <p style={{ margin: '18px 0 0', fontSize: 15, lineHeight: 1.6, color: 'rgba(234,240,247,.75)' }}>{off.address}</p>
            <a href={off.telHref} style={{ display: 'inline-block', marginTop: 10, color: '#2FA8D8', textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              {off.phone}
            </a>
            <p style={{ margin: '10px 0 0', fontSize: 13.5, color: 'rgba(234,240,247,.5)' }}>{off.hours}</p>
            <a
              href={off.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-maps-pill"
              style={{ display: 'inline-block', marginTop: 18, fontSize: 13, padding: '10px 18px' }}
            >
              Open in Maps
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
