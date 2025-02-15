export type QuestionResult = {
    order: number;
    isAnswerCorrect: boolean;
};
  
export type RoundResults = {
    roundNumber: number;
    results: QuestionResult[];
};

export type ResultsState = {
    activityName: string;
    rounds: RoundResults[];
};