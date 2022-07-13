import classNames from 'classnames';

export const EthIcon = ({
  className,
  color = 'white',
  ...variants
}: any): JSX.Element => {
  return (
    <svg
      width={11}
      height={18}
      xmlns='http://www.w3.org/2000/svg'
      className={classNames(className)}
      {...variants}
    >
      <path
        d='M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z'
        fill={color}
      />
    </svg>
  );
};

export const ClockIcon = ({
  className,
  color = 'white',
  ...variants
}: any): JSX.Element => {
  return (
    <svg
      width={17}
      height={17}
      xmlns='http://www.w3.org/2000/svg'
      className={classNames(className)}
      {...variants}
    >
      <path
        d='M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z'
        fill={color}
      />
    </svg>
  );
};

export const ViewIcon = ({
  className,
  color = 'white',
  ...variants
}: any): JSX.Element => {
  return (
    <svg
      width={48}
      height={48}
      xmlns='http://www.w3.org/2000/svg'
      className={classNames(className)}
      {...variants}
    >
      <g fill='none' fillRule='evenodd'>
        <path d='M0 0h48v48H0z' />
        <path
          d='M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z'
          fill={color}
          fillRule='nonzero'
        />
      </g>
    </svg>
  );
};
