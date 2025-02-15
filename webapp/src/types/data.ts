export interface Question {
    is_correct: boolean;
    stimulus: string;
    order: number;
    user_answers: string[];
    feedback: string;
  }
  
  export interface Round {
    round_title: string;
    order: number;
    questions: Question[];
  }

  export interface Activity {
    activity_name: string;
    order: number;
    questions: (Question | Round)[];
  }
  
  export interface GameResponse {
    name: string;
    heading: string;
    activities: Activity[];
  }
  