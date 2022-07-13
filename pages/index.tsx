import type { NextPage } from 'next';
import { Card } from '../components';
import { mockData } from '../mock';

const Home: NextPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen gap-6 mx-auto bg-neutral-main debug-screens'>
      {mockData?.map((items) => {
        return <Card key={items.id} {...items} />;
      })}
    </div>
  );
};

export default Home;
