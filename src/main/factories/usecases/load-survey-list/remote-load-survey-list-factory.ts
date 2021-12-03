import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { LoadSurveyList } from '@/domain/usecases'
import { RemoteSurveyList } from '@/data/usecases'
import { makeAuthorizeHttpGetClientDecorator } from '@/main/factories/decorators'

export const makeRemoteLoadSurveyList = (): LoadSurveyList => {
  return new RemoteSurveyList(makeApiUrl('/surveys'), makeAuthorizeHttpGetClientDecorator())
}
