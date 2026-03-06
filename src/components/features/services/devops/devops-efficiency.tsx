import { combine, styles } from '@/styles/style';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { getDevOpsCloudinaryImages } from '@/lib/assets/images';
import { efficiencyStatsData } from '@/data/devops/devops';
import Link from 'next/link';

const DevOpsEfficiency = () => {
  const devOpsImages = getDevOpsCloudinaryImages();

  return (
    <section
      className='py-9 lg:py-15 px-1 xl:px-10 mx-5 relative rounded-xl'
      style={{
        backgroundImage: `url(${devOpsImages.bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={combine(styles.sectionPadding, 'flex flex-col md:flex-row md:items-center md:justify-between')}>
        <div>
          <h2 className={combine(styles.h1, 'text-white max-w-sm lg:max-w-lg leading-tight')}>
            Improve efficiency with proven DevOps practices
          </h2>
        
          <Link href='/contact' className='bg-white w-40 lg:w-48 px-3 lg:px-5 py-2 mt-9 lg:mt-12 text-blue text-base lg:text-lg font-bold rounded-lg flex items-center gap-2 cursor-pointer hidden md:block'>
            Get In Touch
            <span className='w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center bg-blue text-white'>
              <MdOutlineArrowOutward />
            </span>
          </Link>
          
        </div>
        <div className='mt-6 md:mt-0'>
          {efficiencyStatsData.map((stat, index) => (
            <p
              key={index}
              className={combine(
                styles.h4,
                'text-white font-bold font-inter mb-2 md:mb-3 lg:mb-5'
              )}
            >
              {stat.text}
            </p>
          ))}
        </div>
           <Link href='/contact' className='bg-white w-40 lg:w-48 px-3 lg:px-5 py-2 mt-5 lg:mt-12 text-blue text-base lg:text-lg font-bold rounded-lg flex items-center gap-2 cursor-pointer block md:hidden'>
            Get In Touch
            <span className='w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center bg-blue text-white'>
              <MdOutlineArrowOutward />
            </span>
          </Link>
      </div>
    </section>
  );
};

export default DevOpsEfficiency;