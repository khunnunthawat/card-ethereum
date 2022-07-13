import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen mx-auto bg-neutral-main'>
      <div className='text-lg text-primary-cyan'>
        <h1 className='text-2xl text-primary-soft-blue'>
          Nextjs Tailwind Typescript Setup
        </h1>
        <h4 className='font-normal'>Font Weight 300</h4>
        <h4 className='font-medium'>Font Weight 400</h4>
        <h4 className='font-semibold'>Font Weight 600</h4>
      </div>
    </div>
  );
};

export default Home;
