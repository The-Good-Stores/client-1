export default interface Question {
  adsId: string;
  questionId: string;
  question: string;
  answer: string;
  createdAt?: Date;
  updatedAt?: Date;
}

