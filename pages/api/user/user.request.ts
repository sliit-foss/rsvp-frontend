import { apiInstance } from '../apiInstance'
import { UserSignUpData, UserSignInData } from './user.interface'

export async function signUpUser(
  requestData: UserSignUpData
): Promise<boolean> {
  const PATH = '/signup'

  const res = await apiInstance.post(PATH, requestData)
  return res.data
}

export async function signInUser(
  requestData: UserSignInData
): Promise<boolean> {
  const PATH = '/login'

  const res = await apiInstance.post(PATH, requestData)
  const token = res.data['token']

  if (token) {
    window.localStorage.setItem('Token', token)
  }

  return res.data
}
