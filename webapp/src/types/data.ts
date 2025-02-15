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

  export interface ActivityOne {
    activity_name: string;
    order: number;
    questions: Question[];
  }

  export interface ActivityTwo {
    activity_name: string;
    order: number;
    questions: Round[];
  }
  
  export interface GameResponse {
    name: string;
    heading: string;
    activities: ActivityOne[] | ActivityTwo[];
  }
  