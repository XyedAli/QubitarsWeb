import React from 'react'
interface InstagramProps {
  width?: number
  height?: number
  className?: string
}
const Instagram = ({ width = 24, height = 24, className }: InstagramProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect
        x='2'
        y='2'
        width='20'
        height='20'
        rx='5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='12'
        cy='12'
        r='4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='17'
        cy='7'
        r='1'
        fill='currentColor'
      />
    </svg>
  )
}

export { Instagram }

