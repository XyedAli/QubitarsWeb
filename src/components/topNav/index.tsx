import React from 'react'
import Icons from '../../../public/assets/icons'
import { US, PK } from 'country-flag-icons/react/3x2'
import Link from 'next/link'
import { topNavContainer, topNavText } from '@/commonStyles/styles'

const TopNav = () => {
  return (
    <div className='bg-[#C2C2C2]/10 md:bg-[#F6B378] shadow-mD py-2.5 px-4 xl:px-0'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2 hover:text-accent transition-all duration-300 cursor-pointer group'>
            <Icons.Mail width={20} height={20} />
            <p className="text-black text-[11px] md:text-[13px] font-bold group-hover:text-accent transition-colors">info@qubitars.com</p>
          </div>
          <div className='flex items-center gap-2 md:gap-4'>
            <div className={topNavContainer}>
              <PK title="Pakistan" className="h-5 w-5 object-contain" />
              <p className={topNavText}>+92 302 6469153</p>
            </div>
            <div className={topNavContainer}>
              <US title="United States" className="w-5 h-5 object-contain" />
              <p className={topNavText}>+1 209 479 7184</p>
            </div>
            <div className="hidden sm:block h-5 w-[1px] bg-[#DFDFDF]" />
            <div className='hidden md:flex items-center gap-3 text-black'>
              <Link href='https://www.linkedin.com/company/qubitars' target='_blank'>
                <Icons.Linkedin width={20} height={20} className='hover:text-accent' />
              </Link>
              <Link href='https://www.facebook.com/qubitars' target='_blank'>
                <Icons.Facebook width={20} height={20} className='hover:text-accent' />
              </Link>
              <Link href='https://wa.me/923026469153' target='_blank'>
                <Icons.Whatsapp width={20} height={20} className="text-darkGray hover:text-accent transition-colors duration-200" />
              </Link>
              <Link href='https://www.instagram.com/qubitars' target='_blank'>
                <Icons.Instagram width={20} height={20} className='hover:text-accent' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TopNav