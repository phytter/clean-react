import { HttpPostClientSpy } from "@/data/test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";
import { mockAccountModel, mockAuthentication } from "@/domain/test/mock-account";
import { InvalidCredentialError } from "@/domain/errors/invalid-credentials-error";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { AuthenticationParams } from "@/domain/usecases/authentication";
import { AccountModel } from "@/domain/models/account-model";
import faker from 'faker'

type SuTypes = {
  sut: RemoteAuthentication,
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SuTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParams, AccountModel>()
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

  test('Shoud throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unathorized
    }
    
    const promise = sut.auth(mockAuthentication()) 
    await expect(promise).rejects.toThrow(new InvalidCredentialError)
  });

  test('Shoud throw unexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    
    const promise = sut.auth(mockAuthentication()) 
    await expect(promise).rejects.toThrow(new UnexpectedError)
  });

  test('Shoud throw unexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    
    const promise = sut.auth(mockAuthentication()) 
    await expect(promise).rejects.toThrow(new UnexpectedError)
  });

  test('Shoud return an AccountModel if HttpPostClient return 200', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const httpResult = mockAccountModel()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult  
    }
    
    const account = await sut.auth(mockAuthentication()) 
    await expect(account).toEqual(httpResult)
  });
});
