'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/96 backdrop-blur-[20px] shadow-header'
            : 'bg-white/96 backdrop-blur-[20px] shadow-header'
        )}
        style={{ height: '88px' }}
      >
        <div className="container-site h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Mostly Solutions Limited — Home">
            <Image
              src="/logo.png"
              alt="Mostly Solutions Limited"
              width={204}
              height={129}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-inter font-medium text-sm text-gray-700 hover:text-blue transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+441189000000"
              className="flex items-center gap-2 font-poppins font-semibold text-sm text-navy hover:text-blue transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a href="#booking" className="btn-blue text-xs px-5 h-11">
              Book Service
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-premium flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Image
                src="/logo.png"
                alt="Mostly Solutions Limited"
                width={204}
                height={129}
                className="h-10 w-auto"
              />
              <button
                className="p-2 text-gray-500 hover:text-navy"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex-1 p-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-inter font-medium text-base text-gray-700 hover:text-blue py-3 border-b border-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="p-6 flex flex-col gap-3">
              <a
                href="tel:+441189000000"
                className="flex items-center justify-center gap-2 h-12 border border-navy rounded-button text-navy font-poppins font-semibold text-sm"
              >
                <Phone size={16} />
                +44 118 900 0000
              </a>
              <a
                href="#booking"
                className="btn-blue text-xs w-full"
                onClick={() => setMobileOpen(false)}
              >
                Book Service
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
