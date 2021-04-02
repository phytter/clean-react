import { AccountModel } from '../models/account-model'

type AuthenticationParams = {
  email: String,
  password: String
}

export interface Authentication {
  auth (params: AuthenticationParams): Promise<AccountModel> 
}