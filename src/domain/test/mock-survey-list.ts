import { SurveyModel } from '../models'
import faker from 'faker'

export const mockSurveyListModel = (): SurveyModel[] => ([{
  id: faker.random.uuid(),
  quentions: faker.random.words(10),
  answers: [{
    answer: faker.random.words(4),
    image: faker.internet.url()
  },{
    answer: faker.random.words(4)
  }],
  didAnswer: faker.random.boolean(),
  date: faker.date.recent()
}])
