export type SurveyModel = {
  id: string
  quentions: string
  answers: SurveyAnswerModel[]
  date: Date
  didAnswer: Boolean
}

export type SurveyAnswerModel = {
  image?: string
  answer?: string
}
