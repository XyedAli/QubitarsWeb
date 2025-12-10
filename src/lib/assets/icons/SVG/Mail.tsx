import React from 'react'
interface MailProps {
  width?: number
  height?: number
  fill?: string
}
const Mail = ({ width = 20, height = 20, fill = '#FC7E13' }: MailProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.1818 2.5H1.81818C0.814025 2.5 0 3.31403 0 4.31818V15.2273C0 16.2314 0.814025 17.0454 1.81818 17.0454H18.1818C19.186 17.0454 20 16.2314 20 15.2273V4.31818C20 3.31403 19.186 2.5 18.1818 2.5Z'
        fill='url(#paint0_linear_2763_2763)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.1818 2.5H1.81812C1.57702 2.5 1.34508 2.54613 1.12233 2.6384C0.899578 2.73067 0.702959 2.86204 0.532471 3.03253L8.71432 11.2144C8.88475 11.3848 9.08138 11.5162 9.30413 11.6084C9.52688 11.7007 9.75882 11.7469 9.99994 11.7469C10.241 11.7469 10.4729 11.7007 10.6958 11.6084C10.9184 11.5162 11.1151 11.3848 11.2856 11.2144L19.4674 3.03253C19.2969 2.86204 19.1003 2.73067 18.8776 2.6384C18.6548 2.54613 18.4229 2.5 18.1818 2.5Z'
        fill='url(#paint1_linear_2763_2763)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_2763_2763'
          x1='10'
          y1='2.5'
          x2='10'
          y2='17.0454'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={fill} />
          <stop offset='1' stopColor='#F56D19' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_2763_2763'
          x1='10.0001'
          y1='2.5'
          x2='10.0001'
          y2='11.7469'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={fill} />
          <stop offset='1' stopColor='#F99C25' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Mail
