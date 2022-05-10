import { apiInstance } from '../apiInstance'
import { UserData } from './user.interface'

export async function createUser(userData: any): Promise<string | boolean> {
  const response = await apiInstance.post(`/users`, userData)
  return response.data.data
}

export async function deleteUser(id: string): Promise<string | boolean> {
  const response = await apiInstance.delete(`/users/${id}`)
  return response.data.data
}

export async function getAllUsers(): Promise<UserData[] | boolean> {
  const response = await apiInstance.get(`/users`)
  return response.data.data as UserData[]
}

export async function getUserInfo(): Promise<UserData | boolean> {
  const response = await apiInstance.get(`/users/myuserdata`)
  return response.data.data as UserData
}

export async function changePassword(newPassword: string): Promise<string | boolean> {
  const body = { newPassword: newPassword }
  const response = await apiInstance.put(`/users/changepassword`, body)
  return response.data.data
}
