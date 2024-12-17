'use client'

import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa"
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  icon?: boolean
}

const Button = ({ children, href, onClick, className = '', icon = true }: ButtonProps) => {
  const baseClasses = "group inline-flex px-10 py-4 border border-white/20 text-white rounded-md font-light hover:bg-white hover:text-black transition-all duration-500 items-center gap-3 text-sm tracking-wider"
  
  const content = (
    <>
      {children}
      {icon && <FaArrowRight className="group-hover:translate-x-1 transition-transform" />}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {content}
    </button>
  )
}

export default Button 
