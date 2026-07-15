import Reveal from './Reveal'

const WHY = [
  {
    n: '01',
    title: 'Mobile Service',
    desc: 'We come to your home, office, or roadside — no need to arrange transport or take time off work.',
  },
  {
    n: '02',
    title: 'Certified Technicians',
    desc: 'IMI-certified mechanics with 10+ years of experience, using Bosch-grade diagnostic equipment.',
  },
  {
    n: '03',
    title: 'Quality Parts, Fair Prices',
    desc: 'OEM-grade parts backed by a 12-month warranty. No workshop overheads, no hidden charges.',
  },
]

export default function WhyUs() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(72px,10vw,128px) clamp(16px,5vw,64px)',
        background: 'linear-gradient(180deg,#060F1F,#081426 55%,#060F1F)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.3em', color: 'var(--blue)', textTransform: 'uppercase' }}>
            Why MostlySolutions
          </div>
          <h2 style={{ margin: '18px 0 0', fontSize: 'clamp(32px,5vw,54px)', fontWeight: 800, letterSpacing: '-.025em', lineHeight: 1.05 }}>
            The Garage That <span className="ms-grad-text">Comes To You</span>
          </h2>
          <p style={{ margin: '18px auto 0', maxWidth: 560, fontSize: 16.5, lineHeight: 1.65, color: 'rgba(234,240,247,.65)' }}>
            Three reasons drivers across Reading and London trust us with their vehicles.
          </p>
        </Reveal>

        <div
          style={{
            marginTop: 'clamp(40px,6vw,64px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))',
            gap: 20,
          }}
        >
          {WHY.map((item) => (
            <Reveal key={item.n} className="ms-why-card" style={{ padding: '30px 28px' }}>
              <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1 }} className="ms-grad-text">
                {item.n}
              </div>
              <h3 style={{ margin: '18px 0 0', fontSize: 19.5, fontWeight: 700, letterSpacing: '-.01em' }}>{item.title}</h3>
              <p style={{ margin: '12px 0 0', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(234,240,247,.62)' }}>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
