// pages/index.tsx

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchSdgGoals } from '../utils/sdgApi';
import { SdgGoal } from '../types/types';

const HomePage = () => {
  const [goals, setGoals] = useState<SdgGoal[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedGoals = await fetchSdgGoals();
      setGoals(fetchedGoals);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">UN Sustainable Development Goals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {goals.map((goal) => (
          <Link href={`/goal/${goal.code}`} key={goal.code}>
            <a
              className="block h-64 rounded-lg overflow-hidden shadow-md transition duration-300 hover:opacity-80"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="bg-white bg-opacity-75 p-4">
                <h2 className="text-xl font-semibold">{goal.title}</h2>
                <p className="mt-2">{goal.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
