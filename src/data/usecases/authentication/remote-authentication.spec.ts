import { HttpPostClientSpy } from "../..//test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";
import faker from 'faker'
import { mockAuthentication } from "../../../domain/test/mock-authentication";

type SuTypes = {
  sut: RemoteAuthentication,
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SuTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Shoud call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    sut.auth(mockAuthentication()) 
    expect(httpPostClientSpy.url).toBe(url)
  });

  test('Shoud call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationParams = mockAuthentication()
    sut.auth(authenticationParams) 
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  });
});
