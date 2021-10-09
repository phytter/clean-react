export type SurveyModel = {
  id: string
  quentions: string
  answers: [
    {
      image: string
      answer: string
    }
  ]
  date: string
  didAnswer: Boolean
}
