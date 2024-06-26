// pages/goal/[code].tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchSdgGoals } from '../utils/sdgApi';
import { SdgGoal, SdgTarget } from '../types/types'; 
const GoalPage = () => {
  const router = useRouter();
  const { code } = router.query;
  if (!code) {
    // Handle case where code is not available
    return <div>Loading...</div>;
  }
  console.log('Router query code:', code);
  const [goal, setGoal] = useState<SdgGoal | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const goals = await fetchSdgGoals();
      //const x= goals.slice(0,17);
      //console.log(x)
      const selectedGoal = goals.find((g) => g.code === code);
      //const specificTarget: SdgTarget | undefined = selectedGoal?.targets.find((target) => target.code === code); // Replace with your logic
      setGoal(selectedGoal || null);
    };
    if (code) {
      fetchData();
    }
  }, [code]);

  if (!goal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{goal.title}</h1>
      <p className="mt-4">{goal.description}</p>
      <h2 className="mt-4 text-xl font-semibold">Targets:</h2>
      <ul className="list-disc pl-6 mt-2">
        {goal.targets.map((target) => (
          <li key={target.goal} className="mt-2">
            <h3 className="font-semibold">{target.title}</h3>
            <p className="mt-1">{target.description}</p>
            <a href={target.uri} className="text-blue-600 hover:underline">
              More info
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalPage;
