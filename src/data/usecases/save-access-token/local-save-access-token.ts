import { SetStorage } from '@/data/protocols/cache/set-storage'
import { SaveAcessToken } from '@/domain/usecases'

export class LocalSaveAccessToken implements SaveAcessToken {
  constructor (private readonly setStorage: SetStorage) {}

  async save (accessToken: string): Promise<void> {
    await this.setStorage.set('accessToken', accessToken)
  }
}
