import { HttpPostClientSpy } from "../..//test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";
type SuTypes = {
  sut: RemoteAuthentication,
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any_url'): SuTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Shoud call HttpPostClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    sut.auth() 
    expect(httpPostClientSpy.url).toBe(url)
  });
});
