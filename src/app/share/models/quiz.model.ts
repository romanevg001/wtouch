
export class Answers {
    answer: string;
    id?: number;
    valid?: boolean;
    rightAnswer?: string;
}

export class Quiz {
    question: string;
    answers: Answers[];
    historyAnswers: any[];
    waytosave: number;
    fieldType: number;
    evaluateType: number;
    evaluateMark: number;
}
