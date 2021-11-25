import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { LoadSurveyList } from '@/domain/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import { RemoteSurveyList } from '@/data/usecases'

export const makeRemoteLoadSurveyList = (): LoadSurveyList => {
  return new RemoteSurveyList(makeApiUrl('/surveys'), makeAxiosHttpClient())
}
