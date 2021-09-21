import React from 'react'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'
import { makeLoginValidation } from './login-validation-factory'
import { Login } from '@/presentation/pages'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/save-access-token/local-save-accesss-token-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
