export interface SdgTarget {
    goal: string;
    code:string;
    title: string;
    description: string;
    uri: string;
  }
  
  export interface SdgGoal {
    code: string;
    title: string;
    description: string;
    targets: SdgTarget[];
  }