export interface SdgTarget {
    id: string;
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