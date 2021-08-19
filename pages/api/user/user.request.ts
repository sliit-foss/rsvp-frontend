import { apiInstance } from '../apiInstance'
import { UserData } from './user.interface'

export async function getUserInfo(): Promise<UserData | boolean> {
  try {
    const response = await apiInstance.get(`/users/myuserdata`)
    return response.data as UserData
  } catch (e) {
    console.error(e.message)
    return false
  }
}

export async function changePassword(
  newPassword: string
): Promise<string | boolean> {
  try {
    const body = {
      newPassword: newPassword,
    }
    const response = await apiInstance.put(`/users/changepassword`, body)
    return response.data
  } catch (e) {
    throw JSON.stringify(e.response)
  }
}
