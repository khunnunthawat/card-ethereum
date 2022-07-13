import classNames from 'classnames';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { ClockIcon, EthIcon, ViewIcon } from '../components';

const Home: NextPage = () => {
  const [hover, setHover] = useState<boolean>(false);
  const hoverStyle = 'hover:text-primary-cyan hover:cursor-pointer transition';
  return (
    <div className='flex items-center justify-center min-h-screen mx-auto bg-neutral-main debug-screens'>
      <div className='h-auto p-4 rounded-lg w-[300px] bg-neutral-card'>
        <div className='justify-center'>
          <div
            className='relative'
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Image
              src='/images/image-equilibrium.jpg'
              className='rounded-lg'
              alt='equilibrium'
              width={300}
              height={300}
              draggable={false}
              loading='lazy'
              objectFit='cover'
            />
            {hover && (
              <div className='absolute inset-0 z-10 flex items-center justify-center transition-all delay-100 cursor-pointer'>
                <ViewIcon />
              </div>
            )}
          </div>
          <div className='py-4 text-2xl font-normal text-left text-white'>
            <h1 className={classNames(hoverStyle)}>Equilibrium #3429</h1>
          </div>
          <div className='text-base text-primary-soft-blue'>
            <h4 className='break-words whitespace-normal '>
              Our Equilibrium collection promotes <br /> balance and calm.
            </h4>
          </div>
          <div className='flex items-center justify-between py-4 text-sm'>
            <div className='inline-flex'>
              <span className='pr-2'>
                <EthIcon color='#00FFF8' />
              </span>
              <span className='font-normal text-left text-primary-cyan'>
                0.041 ETH
              </span>
            </div>
            <div className='inline-flex'>
              <span className='pr-2'>
                <ClockIcon color='#8BACD9' />
              </span>
              <span className='text-right text-primary-soft-blue'>
                3 days left
              </span>
            </div>
          </div>
          <div className='border border-t border-neutral-line' />
          <div className='pt-4'>
            <div className='inline-flex items-center justify-start w-full'>
              <Image
                src='/images/image-avatar.png'
                className='object-cover w-auto h-auto rounded-full'
                alt='avatar'
                width={38}
                height={38}
                draggable={false}
              />
              <span className='pl-4 text-sm text-primary-soft-blue'>
                Creation of{' '}
                <span className={classNames(hoverStyle, 'text-white')}>
                  Jules Wyvern
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
