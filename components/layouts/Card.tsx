import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import { CardProps } from '../../interface';
import { ClockIcon, EthIcon, ViewIcon } from '../icons';

export const Card = ({
  id,
  image,
  title,
  numberId,
  description,
  price,
  timeLeft,
  avatar,
  username,
}: CardProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const hoverStyle = 'hover:text-primary-cyan hover:cursor-pointer transition';
  return (
    <div key={id} className='h-auto p-4 rounded-lg w-[300px] bg-neutral-card'>
      <div className='justify-center'>
        <div
          className='relative'
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Image
            key={id}
            src={image}
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
          <h1 className={classNames(hoverStyle)}>
            {title} #{numberId}
          </h1>
        </div>
        <div className='text-base text-primary-soft-blue'>
          <h4 className='break-words whitespace-normal '>{description}</h4>
        </div>
        <div className='flex items-center justify-between py-4 text-sm'>
          <div className='inline-flex'>
            <span className='pr-2'>
              <EthIcon color='#00FFF8' />
            </span>
            <span className='font-normal text-left text-primary-cyan'>
              {price}
            </span>
          </div>
          <div className='inline-flex'>
            <span className='pr-2'>
              <ClockIcon color='#8BACD9' />
            </span>
            <span className='text-right text-primary-soft-blue'>
              {timeLeft} days left
            </span>
          </div>
        </div>
        <div className='border border-t border-neutral-line' />
        <div className='pt-4'>
          <div className='inline-flex items-center justify-start w-full'>
            <Image
              key={id}
              src={avatar}
              className='object-cover w-auto h-auto rounded-full'
              alt='avatar'
              width={38}
              height={38}
              draggable={false}
            />
            <span className='pl-4 text-sm text-primary-soft-blue'>
              Creation of
              <span className={classNames(hoverStyle, 'text-white pl-2')}>
                {username}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
