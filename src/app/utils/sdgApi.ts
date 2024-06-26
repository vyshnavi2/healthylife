// utils/fetchSdgGoals.ts

import axios from 'axios';
import { SdgGoal } from '../types/types';

const SDG_API_URL = 'https://unstats.un.org/sdgapi/v1/sdg/Goal/List';
console.log(SDG_API_URL)

export const fetchSdgGoals = async (): Promise<SdgGoal[]> => {
  try {
    const response = await axios.get(SDG_API_URL);
    const goals: SdgGoal[] = response.data.map((item: any) => ({
      code: item.code,
      title: item.title,
      description: item.description,
      targets: item.targets.map((target: any) => ({
        goal: target.goal,
        title: target.title,
        description: target.description,
        uri: target.uri,
      })),
    }));
    console.log(goals)
    return goals;
  } catch (error) {
    console.error('Error fetching SDG goals:', error);
    return [];
  }
};
