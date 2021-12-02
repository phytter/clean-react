
export interface LoadSurveyList {
  loadAll: () => Promise<LoadSurveyList.Model[]>
}

export namespace LoadSurveyList {
  export type Model = {
    id: string
    quentions: string
    date: Date
    didAnswer: Boolean
  }
}
