import * as Helper from '../support/http-mock'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(/signup/)
