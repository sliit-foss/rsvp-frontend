import { apiInstance } from '../apiInstance'
import { UserData } from './user.interface'

export async function createUser(userData: any): Promise<string | boolean> {
  try {
    const response = await apiInstance.post(`/users`, userData)
    return response.data
  } catch (e:any) {
    throw JSON.stringify(e.response)
  }
}

export async function deleteUser(id: string): Promise<string | boolean> {
  try {
    const response = await apiInstance.delete(`/users/${id}`)
    return response.data
  } catch (e:any) {
    throw JSON.stringify(e.response)
  }
}

export async function getAllUsers(): Promise<UserData[] | boolean> {
  try {
    const response = await apiInstance.get(`/users`)
    return response.data as UserData[]
  } catch (e:any) {
    return false
  }
}

export async function getUserInfo(): Promise<UserData | boolean> {
  try {
    const response = await apiInstance.get(`/users/myuserdata`)
    return response.data as UserData
  } catch (e:any) {
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
  } catch (e:any) {
    throw JSON.stringify(e.response)
  }
}
