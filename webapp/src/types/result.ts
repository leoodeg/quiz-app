export type QuestionResult = {
    order: number;
    result: string;
};
  
export type RoundResults = {
    roundNumber: number;
    results: QuestionResult[];
};

export type ResultsState = {
    activityName: string;
    rounds: RoundResults[];
};