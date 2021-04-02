import { AccountModel } from '../models/account-model'

export type AuthenticationParams = {
  email: String,
  password: String
}

export interface Authentication {
  auth (params: AuthenticationParams): Promise<AccountModel> 
}