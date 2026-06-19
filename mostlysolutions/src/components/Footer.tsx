import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const SERVICES = [
  'Automotive Diagnostics',
  'Mechanical Work',
  'Electrical & Batteries',
  'Detailing & Protection',
  'MOT Preparation',
  'Emergency Callout',
]

const COMPANY = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book Service', href: '#booking' },
]

const SOCIALS = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter / X' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#081A36' }}>
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="Mostly Solutions Limited"
                width={204}
                height={129}
                className="h-14 w-auto"
              />
            </div>
            <p className="font-inter text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              Premium mobile automotive diagnostics and repair. Delivered to your door. Trusted across
              Reading and London.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-inter text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-inter text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-light mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm text-white/50">
                  Reading: 12 Caversham Road, RG1 7BZ
                  <br />
                  London: 34 Vauxhall Bridge Road, SW1V 1AX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-lime flex-shrink-0" />
                <a
                  href="tel:+441189000000"
                  className="font-inter text-sm text-white/70 hover:text-white transition-colors font-semibold"
                >
                  +44 118 900 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-blue-light flex-shrink-0" />
                <a
                  href="mailto:hello@mostlysolutions.co.uk"
                  className="font-inter text-sm text-white/50 hover:text-white transition-colors"
                >
                  hello@mostlysolutions.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/30">
            © {new Date().getFullYear()} MostlySolutions Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-inter text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
