'use client'

import { useState, useEffect } from 'react'
import { NAV_LINKS, PRACTICE_INFO } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'sticky top-0 z-40 hidden w-full transition-shadow duration-300 md:flex',
        isScrolled ? 'bg-card shadow-md' : 'bg-card/95'
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Practice Name */}
        <a href="#home" className="text-xl font-bold text-primary">
          {PRACTICE_INFO.name}
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-primary transition-colors hover:text-accent after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
