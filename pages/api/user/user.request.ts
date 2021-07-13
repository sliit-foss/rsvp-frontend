import { apiInstance } from '../apiInstance'
import { UserSignUpData } from './user.interface'

export async function userSignUp(
  requestData: UserSignUpData
): Promise<boolean> {
  try {
    const apiRes = await apiInstance.post('/signup', requestData)
    return apiRes.data
  } catch (e) {
    console.error(e.message)
    return false
  }
}

export async function userSignIn(): Promise<boolean> {
  try {
    const apiRes = await apiInstance.post('/login')
    return apiRes.data
  } catch (e) {
    console.error(e.message)
    return false
  }
}
