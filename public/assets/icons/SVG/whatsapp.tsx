import React from 'react'
interface WhatsappProps {
  width?: number
  height?: number
  stroke?: string
  className?: string
}
const Whatsapp = ({ width = 24, height = 24, stroke = '#1A1A1A', className }: WhatsappProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M16.9941 16.2886C15.3855 17.8972 11.6792 16.5262 9.82649 14.6735C7.97381 12.8208 6.60278 9.11453 8.2114 7.50592C8.67735 7.03997 9.31894 6.9845 9.71093 7.00299C9.93743 7.01316 10.1334 7.14629 10.2656 7.33119L11.1457 8.56446C11.2728 8.74255 11.3326 8.95994 11.3145 9.17796C11.2964 9.39599 11.2015 9.60052 11.0468 9.75521L10.2139 10.5882C10.3673 11.0504 10.861 12.1598 11.6006 12.8994C12.3402 13.639 13.4496 14.1327 13.9118 14.2861L14.7448 13.4541C14.8994 13.2992 15.1038 13.2042 15.3219 13.1859C15.5399 13.1677 15.7573 13.2273 15.9355 13.3543L17.1688 14.2344C17.3537 14.3666 17.4868 14.5626 17.497 14.7891C17.5155 15.1811 17.46 15.8227 16.9941 16.2886Z'
        stroke="currentColor"
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M12 22C17.5229 22 22 17.5228 22 12C22 6.47714 17.5229 2 12 2C6.47714 2 2 6.47714 2 12C2 13.8209 2.48667 15.5295 3.3381 17L2.5 21.5L7 20.6619C8.51952 21.541 10.2445 22.0027 12 22Z'
        stroke="currentColor"
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default Whatsapp
