import { apiInstance } from '../apiInstance'
import { UserSignUpData, UserSignInData } from './auth.interface'

export async function signUpUser(
  requestData: UserSignUpData
): Promise<boolean> {
  const PATH = '/signup'
  const res = await apiInstance.post(PATH, requestData)
  return res.data.data
}

export async function signInUser(
  requestData: UserSignInData
): Promise<boolean> {
  const PATH = '/login'
  const res = await apiInstance.post(PATH, requestData)
  if (res.data.data['token']) {
    window.localStorage.setItem('Token', res.data.data['token'])
    window.localStorage.setItem('Role', res.data.data['userRole'])
    window.localStorage.setItem('Club', res.data.data['faculty'])
  }
  return res.data.data
}
