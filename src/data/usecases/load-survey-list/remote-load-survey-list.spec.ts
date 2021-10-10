import faker from 'faker'
import { HttpGetClientSpy } from '@/data/test'
import { RemoteSurveyList } from './remote-load-survey-list'

type SutTypes = {
  sut: RemoteSurveyList
  httpGetClientSpy: HttpGetClientSpy
}

const makesut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteSurveyList(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemoteLoadSurveyList', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makesut(url)
    await sut.loadAll()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
